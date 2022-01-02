import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import * as S from "./MarkdownRenderer.style";
import "github-markdown-css/github-markdown.css";
import highlight from "rehype-highlight";

interface Props {
  fileName: string;
}

function MarkdownRenderer({ fileName }: Props) {
  const [post, setPost] = useState("");

  useEffect(() => {
    fetch(`/markdown/${fileName}.md`)
      .then((res) => res.text())
      .then((text) => setPost(text))
      .catch((error) => console.error(error));
  }, []);

  return (
    <S.Wrapper>
      <ReactMarkdown
        className="markdown-body"
        children={post}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[highlight]}
      />
    </S.Wrapper>
  );
}

export default MarkdownRenderer;
