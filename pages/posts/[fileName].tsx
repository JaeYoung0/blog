import MarkdownRenderer from "@components/MarkdownRenderer";
import { GetStaticPaths, GetStaticProps } from "next";
import DefaultLayout from "@layouts/DefaultLayout";
import { getAllPosts, getPostData } from "@pages/posts/helper";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import rehypePrism from "rehype-prism-plus";
import "github-markdown-css/github-markdown.css";
import { Wrapper } from "@components/MarkdownRenderer/MarkdownRenderer.style";
import Input from "@components/Input";

interface PostPageProps {
  meta: {
    date: string | number;
    title: string;
  };

  content: string;
  mdxSource: MDXRemoteSerializeResult<Record<string, unknown>>;
}

const components = { Input };

function PostPage({ meta, content, mdxSource }: PostPageProps) {
  return (
    <DefaultLayout backgroud="#0d1117">
      {/* <MarkdownRenderer markdownContent={content} /> */}
      <Wrapper className="markdown-body">
        <MDXRemote {...mdxSource} components={components} lazy />
      </Wrapper>
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
      post,
      mdxSource,
    },
  };
};

const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts();

  return {
    paths: posts.map((post) => {
      return {
        params: {
          fileName: post.fileName,
        },
      };
    }),
    fallback: true,
  };
};

export { getStaticProps, getStaticPaths };
export default PostPage;
