import { GetStaticPaths, GetStaticProps } from "next";
import DefaultLayout from "@layouts/DefaultLayout";
import { getAllPosts, getPostData } from "@pages/posts/helper";
import { serialize } from "next-mdx-remote/serialize";
import rehypePrism from "rehype-prism-plus";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import MdxRenderer from "@components/MdxRenderer";

interface PostPageProps {
  meta: {
    id: number;
    title: string;
    date: string;
    description: string;
  };

  mdxSource: MDXRemoteSerializeResult<Record<string, unknown>>;
}

function PostPage({ mdxSource }: PostPageProps) {
  return (
    <DefaultLayout backgroud="#0d1117">
      <MdxRenderer mdxSource={mdxSource} />
    </DefaultLayout>
  );
}

const getStaticProps: GetStaticProps<any, { fileName: string }, any> = async ({
  params,
}) => {
  const post = getPostData(params!.fileName);

  const mdxSource = await serialize(post.content, {
    mdxOptions: {
      rehypePlugins: [rehypePrism],
    },
  });

  return {
    props: {
      meta: post.meta,
      mdxSource,
    },
  };
};

const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts();

  // [ { params: { fileName: 'git-ssh-key' } }, ... ]
  const paths = posts.map((post) => {
    return {
      params: {
        fileName: post.fileName,
      },
    };
  });

  return {
    paths,

    // must be false...
    // https://nextjs.org/docs/basic-features/data-fetching/get-static-paths#how-does-getstaticprops-run-with-regards-to-getstaticpaths
    fallback: false,
  };
};

export { getStaticProps, getStaticPaths };
export default PostPage;
