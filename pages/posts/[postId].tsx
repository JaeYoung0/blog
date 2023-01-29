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
  blocks: BlockObjectResponse[];
};

function PostPage({ post, blocks }: PostPageProps) {
  return (
    <DefaultLayout>
      <S.Title>
        {(post.properties.title as TitleColumn).title[0].text.content}
      </S.Title>
      {/* <S.Subtitle> */}
      {/* {(post.properties.subtitle as SubtitleColumn).title[0].text.content} */}
      {/* </S.Subtitle> */}
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

  const childBlocks = await Promise.all(
    blocks
      .filter((block) => block.has_children ?? false)
      .map(async (block) => {
        return {
          id: block.id,
          children: await getNotionBlocks(block.id),
        };
      })
  );

  // console.log(
  //   "@@childBlocks",
  //   childBlocks.map((item) => item.children)
  // );

  const blocksWithChildren = blocks.map((block) => {
    if (block.type === "audio") return;
    // childblock 안더함

    // block[block.type]
    // // Add child blocks if the block should contain children but none exists
    // if (block.has_children && !block[block.type].children) {
    //   block[block.type]["children"] = childBlocks.find(
    //     (x) => x.id === block.id
    //   )?.children;
    // }
    return block;
  });

  // console.log("@@blocksWithChildren", blocksWithChildren);

  return {
    props: {
      post,
      blocks: blocksWithChildren,
    },
    revalidate: 60 * 60, // In seconds
  };
};

export { getStaticProps, getStaticPaths };
export default PostPage;
