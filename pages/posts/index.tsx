import { GetStaticProps } from "next";
import LineAnimatedLayout from "src/layouts/LineAnimatedLayout";
import * as T from "../../src/pages/posts/type";
import * as S from "../../src/pages/posts/posts.style";
import { useRouter } from "next/router";
import { getNotionDB } from "@services/notion";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export function isPageObjectResponse(
  post: T.NotionPost
): post is PageObjectResponse {
  return (post as PageObjectResponse).url !== undefined;
}

export default function Posts({ posts }: T.PostsPageProps) {
  const { push } = useRouter();
  return (
    <LineAnimatedLayout>
      <S.Outer>
        {posts.map((post, idx) => {
          if (!isPageObjectResponse(post)) return null;

          return (
            <S.PostThumbnail
              key={idx}
              onClick={() => push(`/posts/${post.id}`)}
            >
              <S.Title>
                {(post.properties.title as T.TitleColumn).title[0].text.content}
              </S.Title>
              <S.Description>{post.last_edited_time}</S.Description>
              <S.ReadMore>더 읽기{` >> `}</S.ReadMore>
            </S.PostThumbnail>
          );
        })}
      </S.Outer>
    </LineAnimatedLayout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const db = await getNotionDB(process.env.NOTION_DB_ID!);
  const publishedPosts = db.filter((post) => {
    if (!isPageObjectResponse(post)) return;
    const published = (post.properties.published as T.PublishedColumn).checkbox;
    return published;
  });

  return {
    props: {
      posts: publishedPosts,
    },
  };
};
