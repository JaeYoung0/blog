import ReactMarkdown from "react-markdown";
import * as S from "./MarkdownRenderer.style";
import "github-markdown-css/github-markdown.css";
import rehypePrism from "rehype-prism-plus";

interface Props {
  markdownContent: string;
}

function MarkdownRenderer({ markdownContent }: Props) {
  return (
    <>
      <S.Wrapper>
        <ReactMarkdown
          className="markdown-body"
          // children={markdownContent}
          rehypePlugins={[rehypePrism]}
        >
          {markdownContent}
        </ReactMarkdown>
      </S.Wrapper>
    </>
  );
}

export default MarkdownRenderer;
