import { css } from "@emotion/react";
import { SCREEN_BREAKPOINT } from "./mediaQuery";

const DEFAULT_FONT_SIZE = 10;
const MOBILE_DESIGN_WIDTH = 375;
const MOBILE_MIN_WIDTH = 320;
const MOBILE_MAX_WIDTH = 400;

// bold -> 700 ...
// https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight#common_weight_name_mapping

const fontStyle = css`
  /*
 * KoPub Batang (Korean) http://www.google.com/fonts/earlyaccess
 */

  @font-face {
    font-family: "KoPub Batang";
    font-style: normal;
    font-weight: 300;
    font-display: fallback;
    src: url("//fonts.gstatic.com/ea/kopubbatang/v3/KoPubBatang-Light.woff")
      format("woff2");
  }

  @font-face {
    font-family: "KoPub Batang";
    font-style: normal;
    font-weight: 400;
    font-display: fallback;
    src: url("//fonts.gstatic.com/ea/kopubbatang/v3/KoPubBatang-Regular.woff2")
      format("woff2");
  }

  /*
* SUIT
*/
  @font-face {
    font-family: "SUIT";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Medium.woff2")
      format("woff2");
    font-weight: 400;
    font-display: fallback;
    font-style: normal;
  }

  @font-face {
    font-family: "SUIT";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Bold.woff2")
      format("woff2");
    font-weight: 700;
    font-display: fallback;
    font-style: normal;
  }

  html {
    font: normal 10px "KoPub Batang";
    -webkit-font-smoothing: antialiased;
  }

  /* font-size */
  html {
    ${SCREEN_BREAKPOINT("XSmall")} {
      font-size: ${DEFAULT_FONT_SIZE *
      (MOBILE_MIN_WIDTH / MOBILE_DESIGN_WIDTH)}px;
    }

    ${SCREEN_BREAKPOINT("small")} {
      font-size: ${(DEFAULT_FONT_SIZE / MOBILE_DESIGN_WIDTH) * 100}vw;
    }

    ${SCREEN_BREAKPOINT("large")} {
      font-size: ${DEFAULT_FONT_SIZE *
      (MOBILE_MAX_WIDTH / MOBILE_DESIGN_WIDTH)}px;
    }
  }
`;

export default fontStyle;
