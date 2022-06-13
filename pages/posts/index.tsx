import { GetStaticProps } from "next";
import DefaultLayout from "src/layouts/DefaultLayout";
import { getAllPosts } from "../../src/pages/posts/helper";
import { PostsPageProps } from "../../src/pages/posts/type";
import * as S from "../../src/pages/posts/posts.style";
import { useRouter } from "next/router";

export default function Posts({ posts }: PostsPageProps) {
  const { push } = useRouter();
  return (
    <DefaultLayout>
      <S.Outer>
        {posts.map((post, idx) => (
          <S.PostThumbnail
            key={idx}
            onClick={() => push(`/posts/${post.fileName}`)}
          >
            <S.Title>{post.meta.title}</S.Title>
            <S.Description>{post.meta.description}</S.Description>
            <S.ReadMore>더 읽기{` >> `}</S.ReadMore>
          </S.PostThumbnail>
        ))}
      </S.Outer>
    </DefaultLayout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts();

  return {
    props: {
      posts,
    },
  };
};
