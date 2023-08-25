import React, { useEffect } from "react";
import {
  BlockObjectResponse,
  // GetPageResponse,
  // PageObjectResponse,
  PartialBlockObjectResponse,
  RichTextItemResponse,
  TextRichTextItemResponse,
  BulletedListItemBlockObjectResponse,
  NumberedListItemBlockObjectResponse,
  CodeBlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import * as S from "./style";

import { css } from "@emotion/react";

import CodeBlock from "@components/NotionBlock/CodeBlock";
import ImageBlock from "@components/NotionBlock/ImageBlock/ImageBlock";
import TextBlock from "@components/NotionBlock/TextBlock/TextBlock";

type Props = {
  blocks: (BlockObjectResponse | PartialBlockObjectResponse)[];
};

const renderNestedList = (
  block:
    | BulletedListItemBlockObjectResponse
    | NumberedListItemBlockObjectResponse
) => {
  // const { type } = block;
  // TODO. 애초에 패키지에서 타입정의가 잘못됨
  // if (type === "numbered_list_item") {
  //   return (
  //     <ol>
  //       {block.numbered_list_item?.children.map((block) => renderBlock(block))}
  //     </ol>
  //   );
  // }
  // return (
  //   <ul>
  //     {block.bulleted_list_item?.children?.map((block) => renderBlock(block))}
  //   </ul>
  // );
};

export function isBlockObjectResponse(
  block: PartialBlockObjectResponse | BlockObjectResponse
): block is BlockObjectResponse {
  return (block as BlockObjectResponse).type !== undefined;
}

const renderBlock = (
  block: PartialBlockObjectResponse | BlockObjectResponse
) => {
  if (!isBlockObjectResponse(block)) return;
  const { type, id } = block;

  switch (type) {
    case "paragraph":
      if (block.paragraph.rich_text.length === 0) {
        return (
          <span
            css={css`
              white-space: pre;
            `}
          >{`\n`}</span>
        );
      }

      return (
        <p>
          <TextBlock text={block.paragraph.rich_text} />
        </p>
      );
    case "heading_1":
      return (
        <h1>
          <TextBlock text={block.heading_1.rich_text} />
        </h1>
      );
    case "heading_2":
      return (
        <h2>
          <TextBlock text={block.heading_2.rich_text} />
        </h2>
      );
    case "heading_3":
      return (
        <h3>
          <TextBlock text={block.heading_3.rich_text} />
        </h3>
      );
    // TODO
    case "bulleted_list_item":
      return (
        <li>
          <TextBlock text={block.bulleted_list_item.rich_text} />
          {/* {!!block.has_children && renderNestedList(block)} */}
        </li>
      );
    case "numbered_list_item":
      return (
        <>
          <li
            css={css`
              list-style: none;
            `}
          >
            <span
              css={css`
                display: inline-block;
                margin-right: 1rem;
              `}
            >{`${block.numbering}. `}</span>
            <TextBlock text={block.numbered_list_item.rich_text} />
          </li>

          {!!block.has_children && renderNestedList(block)}
        </>
      );
    case "to_do":
      return (
        <div>
          <label htmlFor={id}>
            <input
              type="checkbox"
              id={id}
              defaultChecked={block.to_do.checked}
            />{" "}
            <TextBlock text={block.to_do.rich_text} />
          </label>
        </div>
      );
    case "toggle":
      return (
        // TODO
        // <details>
        //   <summary>
        //     <Text text={value.rich_text} />
        //   </summary>
        //   {value.children?.map((block) => (
        //     <React.Fragment key={block.id}>{renderBlock(block)}</React.Fragment>
        //   ))}
        // </details>
        <div></div>
      );
    case "child_page":
      return <p>{block.child_page.title}</p>;
    case "image":
      return <ImageBlock block={block} />;

    case "divider":
      return <hr key={id} />;
    case "quote":
      return (
        <blockquote key={id}>{block.quote.rich_text[0].plain_text}</blockquote>
      );
    case "code":
      return <CodeBlock block={block} />;
    case "file":
      // const src_file =
      //   value.type === "external" ? value.external.url : value.file.url;
      // const splitSourceArray = src_file.split("/");
      // const lastElementInArray = splitSourceArray[splitSourceArray.length - 1];
      // const caption_file = value.caption ? value.caption[0]?.plain_text : "";
      // return (
      //   <figure>
      //     <div>
      //       📎{" "}
      //       <Link href={src_file} passHref>
      //         {lastElementInArray.split("?")[0]}
      //       </Link>
      //     </div>
      //     {caption_file && <figcaption>{caption_file}</figcaption>}
      //   </figure>
      // );
      return <div></div>;
    case "bookmark":
      // const href
      return <div></div>;
    case "table_of_contents":
      return <></>;
    default:
      return `❌ Unsupported block (${
        type === "unsupported" ? "unsupported by Notion API" : type
      })`;
  }
};

function BlocksRenderer({ blocks }: Props) {
  console.log("@@blocks", blocks);

  return (
    <S.Container>
      <S.Article>
        {blocks.map((block) => {
          if (!isBlockObjectResponse(block)) return;

          return (
            <React.Fragment key={block.id}>{renderBlock(block)}</React.Fragment>
          );
        })}
      </S.Article>
      {/* aside */}
    </S.Container>
  );
}

export default BlocksRenderer;
