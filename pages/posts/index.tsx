import { GetStaticProps } from "next";
import * as T from "../../src/pages/posts/type";
import * as S from "../../src/pages/posts/posts.style";
import { useRouter } from "next/router";
import { getNotionDB } from "@services/notion";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { css } from "@emotion/react";
import DefaultLayout from "@layouts/DefaultLayout";

export default function Posts({ posts }: T.PostsPageProps) {
  const { push } = useRouter();
  return (
    <DefaultLayout>
      <S.Outer>
        {posts.map((post, idx) => {
          const { title, subtitle, tags } = post;
          // if (!isPageObjectResponse(post)) return null;

          return (
            <S.Post key={idx} onClick={() => push(`/posts/${post.id}`)}>
              <S.Title>{title}</S.Title>
              <S.Subtitle>{subtitle}</S.Subtitle>
              <S.ReadMore>더 읽기{` >> `}</S.ReadMore>
              <div
                css={css`
                  display: flex;
                  justify-content: flex-end;
                `}
              >
                {tags.map((tag) => (
                  <button
                    key={tag?.id}
                    css={css`
                      font-family: "SUIT";
                      background-color: transparent;
                      border: 1px solid #c9d1d9;
                      opacity: 0.7;
                      color: #c9d1d9;
                      margin-right: 1rem;
                      padding: 0.5rem 1rem;
                      border-radius: 10px;
                    `}
                  >
                    {tag?.name}
                  </button>
                ))}
              </div>
            </S.Post>
          );
        })}
      </S.Outer>
    </DefaultLayout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const db = await getNotionDB(process.env.NOTION_DB_ID!);

  const publishedPosts = db.filter((post) => {
    if (!isPageObjectResponse(post)) return;
    const published = (
      post.properties.published as T.MyNotionPageColumns["published"]
    ).checkbox;
    return published;
  }) as PageObjectResponse[]; // db의 비어있는 row에는 published를 체크하지 않으므로 ParitalObject는 리턴될 수 없다.

  const newPosts: T.PostsPageProps["posts"] = publishedPosts.map((post) => {
    const myProperties = post.properties as T.MyNotionPageColumns;

    const { title, subtitle, tags } = myProperties;
    const titleText = title.title[0].text.content;

    const subtitleText = subtitle?.rich_text[0]?.text.content ?? "";
    const tagList = tags.multi_select;
    const result = {
      id: post.id,
      title: titleText,
      subtitle: subtitleText,
      tags: tagList,
    };
    return result;
  });

  return {
    props: {
      posts: newPosts,
    },
  };
};

export function isPageObjectResponse(
  post: T.NotionPost
): post is PageObjectResponse {
  return (post as PageObjectResponse).url !== undefined;
}
