import { css } from "@emotion/react";
import {
  RichTextItemResponse,
  TextRichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints";

interface Props {}

function isTextItem(
  text: RichTextItemResponse
): text is TextRichTextItemResponse {
  return !!(text as TextRichTextItemResponse).text;
}

function TextBlock({ text }: { text: RichTextItemResponse[] }) {
  return (
    <>
      {text.map((value, idx) => {
        if (!isTextItem(value)) return <span></span>;

        const {
          annotations: { bold, code, color, italic, strikethrough, underline },
          text,
        } = value;

        if (code) return <code key={idx}>{text.content}</code>;

        if (text.link)
          return (
            <a key={idx} target="_blank" rel="noreferrer" href={text.link.url}>
              {text.content}
            </a>
          );

        if (bold)
          return (
            <span
              key={idx}
              css={css`
                font-weight: bold;
              `}
            >
              {text.content}
            </span>
          );

        return (
          <span key={idx} style={color !== "default" ? { color } : {}}>
            {text.content}
          </span>
        );
      })}
    </>
  );
}

export default TextBlock;
