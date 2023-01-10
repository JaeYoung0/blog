import { GetStaticPaths, GetStaticProps } from "next";
import DefaultLayout from "@layouts/DefaultLayout";

import UtteranceComment from "@components/UtteranceComment";
import { getNotionBlocks, getNotionDB, getNotionPage } from "@services/notion";
import {
  BlockObjectResponse,
  PageObjectResponse,
  PartialBlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import BlocksRenderer from "@components/BlocksRenderer";
import { TitleColumn } from "@pages/posts/type";
import * as S from "@pages/posts/post.style";
type PostPageProps = {
  post: PageObjectResponse; // GetPageResponse로 일일이 쓰기는 귀찮다..
  blocks: (BlockObjectResponse | PartialBlockObjectResponse)[];
};

function PostPage({ post, blocks }: PostPageProps) {
  return (
    <DefaultLayout backgroud="#0d1117">
      <S.Title>
        {(post.properties.title as TitleColumn).title[0].text.content}
      </S.Title>
      <BlocksRenderer blocks={blocks} />
      <UtteranceComment />
    </DefaultLayout>
  );
}

const getStaticPaths: GetStaticPaths = async () => {
  const db = await getNotionDB(process.env.NOTION_DB_ID!);

  const paths = db.map((post) => ({
    params: {
      postId: post.id,
    },
  }));

  return {
    paths,

    // must be false...
    // https://nextjs.org/docs/basic-features/data-fetching/get-static-paths#how-does-getstaticprops-run-with-regards-to-getstaticpaths
    fallback: false,
  };
};

const getStaticProps: GetStaticProps<any, { postId: string }, any> = async ({
  params,
}) => {
  const id = params!.postId;

  const post = await getNotionPage(id);
  const blocks = await getNotionBlocks(id);

  return {
    props: {
      post,
      blocks,
    },
  };
};

export { getStaticProps, getStaticPaths };
export default PostPage;
