import { css } from "@emotion/react";

const isSmallMobile = `min-width: 320px`;
const isMobile = `min-width: 375px`;
const isTablet = `min-width: 800px`;
const isDesktop = `min-width: 1024px`;

export const resetStyle = css`
  * {
    box-sizing: border-box;
  }

  html {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    font-size: 10px;

    @media (${isSmallMobile}) {
      font-size: 8px;
    }

    @media (${isMobile}) {
      font-size: 10px;
    }

    @media (${isTablet}) {
      font-size: 12px;
    }

    @media (${isDesktop}) {
      font-size: 14px;
    }
  }
  body,
  strong,
  span,
  b {
    padding: 0;
    margin: 0;
    font-family: SF Pro Display, NotoSansCJKkr;
  }

  button {
    border: none;
    outline: none;
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`;
