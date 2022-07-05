import * as S from "./MdxRenderer.style";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Input from "@components/Input";

interface Props {
  mdxSource: MDXRemoteSerializeResult<Record<string, unknown>>;
}

/**
 * mdx 파일에서 인식해야할 components.
 * e.g. components = { Button, AlertModal }
 */
const components = { Input };

function MdxRenderer({ mdxSource }: Props) {
  return (
    <S.Wrapper className="markdown-body">
      <MDXRemote {...mdxSource} components={components} />
    </S.Wrapper>
  );
}

export default MdxRenderer;
