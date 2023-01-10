import React, { useEffect } from "react";
import {
  BlockObjectResponse,
  GetPageResponse,
  PageObjectResponse,
  PartialBlockObjectResponse,
  RichTextItemResponse,
  TextRichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints";
import * as S from "./style";
import Prism from "prismjs";

type Props = {
  blocks: (BlockObjectResponse | PartialBlockObjectResponse)[];
};

function isTextItem(
  text: RichTextItemResponse
): text is TextRichTextItemResponse {
  return !!(text as TextRichTextItemResponse).text;
}

function Text({ text }: { text: RichTextItemResponse[] }) {
  return (
    <>
      {text.map((value, idx) => {
        if (!isTextItem(value)) return <span></span>;

        const {
          annotations: { bold, code, color, italic, strikethrough, underline },
          text,
        } = value;

        return (
          <span
            key={idx}
            className={[
              bold ? bold : "",
              code ? code : "",
              italic ? italic : "",
              strikethrough ? strikethrough : "",
              underline ? underline : "",
            ].join(" ")}
            style={color !== "default" ? { color } : {}}
          >
            {text.link ? (
              <a href={text.link.url}>{text.content}</a>
            ) : (
              text.content
            )}
          </span>
        );
      })}
    </>
  );
}

// const renderNestedList = (block) => {
//   const { type } = block;
//   const value = block[type];
//   if (!value) return null;

//   const isNumberedList = value.children[0].type === "numbered_list_item";

//   if (isNumberedList) {
//     return <ol>{value.children.map((block) => renderBlock(block))}</ol>;
//   }
//   return <ul>{value.children.map((block) => renderBlock(block))}</ul>;
// };

function isBlockObjectResponse(
  block: PartialBlockObjectResponse | BlockObjectResponse
): block is BlockObjectResponse {
  return (block as BlockObjectResponse).type !== undefined;
}

const renderBlock = (
  block: PartialBlockObjectResponse | BlockObjectResponse
) => {
  if (!isBlockObjectResponse(block)) return;
  const { type, id } = block;

  console.log("@@block", block);

  // if(type === 'numbered_list_item') return null
  // if(type === 'audio') return null
  // block.type
  // const wow = 'paragraph'
  // const value = block[type] as any;

  switch (type) {
    case "paragraph":
      return (
        <p>
          <Text text={block.paragraph.rich_text} />
        </p>
      );
    case "heading_1":
      return (
        <h1>
          <Text text={block.heading_1.rich_text} />
        </h1>
      );
    case "heading_2":
      return (
        <h2>
          <Text text={block.heading_2.rich_text} />
        </h2>
      );
    case "heading_3":
      return (
        <h3>
          <Text text={block.heading_3.rich_text} />
        </h3>
      );
    case "bulleted_list_item":
    case "numbered_list_item":
      return (
        // <li>
        //   <Text text={value.rich_text} />
        //   {!!value.children && renderNestedList(block)}
        // </li>
        <div></div>
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
            <Text text={block.to_do.rich_text} />
          </label>
        </div>
      );
    case "toggle":
      return (
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
    case "image": {
      const src =
        block.image.type === "external"
          ? block.image.external.url
          : block.image.file.url;
      const caption = block.image.caption
        ? block.image.caption[0]?.plain_text
        : "";
      return (
        <figure>
          <img src={src} alt={caption} />
          {caption && <figcaption>{caption}</figcaption>}
        </figure>
      );
    }
    case "divider":
      return <hr key={id} />;
    case "quote":
      return (
        <blockquote key={id}>{block.quote.rich_text[0].plain_text}</blockquote>
      );
    case "code":
      return (
        <pre className="pre">
          <code className="code_block" key={id}>
            {block.code.rich_text[0].plain_text}
          </code>
        </pre>
      );
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
    default:
      return `❌ Unsupported block (${
        type === "unsupported" ? "unsupported by Notion API" : type
      })`;
  }
};

function BlocksRenderer({ blocks }: Props) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <S.Wrapper>
      {blocks.map((block) => (
        <React.Fragment key={block.id}>{renderBlock(block)}</React.Fragment>
      ))}
    </S.Wrapper>
  );
}

export default BlocksRenderer;
