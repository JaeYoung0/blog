import React from "react";
import Prism from "prismjs";
import { CodeBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import "prismjs/components/prism-typescript";
function CodeBlock({ block }: { block: CodeBlockObjectResponse }) {
  React.useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <pre>
      <code className={`language-${block.code.language}`}>
        {block.code.rich_text[0].plain_text}
      </code>
    </pre>
  );
}

export default CodeBlock;
