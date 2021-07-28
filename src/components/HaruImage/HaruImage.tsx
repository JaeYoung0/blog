/* eslint-disable @next/next/no-img-element */
import React from "react";

// TODO 린트설정
interface Props {
  src: string;
  style?: React.CSSProperties;
  webpSrc?: string;
  className?: string;
}

function HaruImage({ style, src, className }: Props) {
  const webpSrc = src?.replace(/(^\S+)\.(jpg|png|gif|bmp)$/i, "$1.webp");

  return (
    <>
      <picture
        style={{ display: "flex", justifyContent: "center" }}
        className={className}
      >
        <source type="image/webp" srcSet={webpSrc} />
        <img alt="webp fallback image" src={src} />
      </picture>
    </>
  );
}

export default HaruImage;
