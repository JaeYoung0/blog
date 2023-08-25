import styled from "@emotion/styled";
import { ImageBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

function ImageBlock({ block }: { block: ImageBlockObjectResponse }) {
  const src =
    block.image.type === "external"
      ? block.image.external.url
      : block.image.file.url;

  // https://github.com/splitbee/react-notion/pull/32/commits/4bc20164d4a8f37b777b2cce3308c7868d30afad
  // origin: "https://s3.us-west-2.amazonaws.com"
  // pathname: "/secure.notion-static.com/091a8939-3ef7-464b-8615-a405b5d66e2b/Untitled.png"
  const { origin, pathname } = new URL(src);

  const newSrc = new URL(
    `https://www.notion.so/image/${encodeURIComponent(`${origin}${pathname}`)}`
  );
  newSrc.searchParams.set("id", block.id);
  newSrc.searchParams.set("table", "block");
  newSrc.searchParams.set("cache", "v2");

  const caption = block.image.caption ? block.image.caption[0]?.plain_text : "";
  return (
    <Figure>
      <img
        src={String(newSrc)}
        alt={caption}
        onClick={() => window.open(newSrc, "_blank")}
      />
      {caption && <figcaption>{caption}</figcaption>}
    </Figure>
  );
}

// codeBlockCss에서 정한다.
const Figure = styled.figure``;

export default ImageBlock;
