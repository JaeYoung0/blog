import { GetStaticProps } from "next";
import DefaultLayout from "src/layouts/DefaultLayout";
import { getAllPosts } from "./helper";
import { PostsPageProps } from "./type";
import * as S from "./Posts.style";
import { useRouter } from "next/router";

export default function Posts({ posts }: PostsPageProps) {
  const { push } = useRouter();
  return (
    <DefaultLayout>
      <S.Outer>
        {posts.map((post) => (
          <S.PostThumbnail onClick={() => push(`/posts/${post.fileName}`)}>
            <S.Title>{post.meta.title}</S.Title>
            <S.Description>{post.meta.description}</S.Description>
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
