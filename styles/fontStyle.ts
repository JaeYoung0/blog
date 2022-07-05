import { css } from "@emotion/react";
import { SCREEN_BREAKPOINT } from "./mediaQuery";

const DEFAULT_FONT_SIZE = 10;
const MOBILE_DESIGN_WIDTH = 375;
const MOBILE_MIN_WIDTH = 320;
const MOBILE_MAX_WIDTH = 400;

const fontStyle = css`
  html {
    font: normal 10px "SUIT";

    -webkit-font-smoothing: antialiased;
  }

  /* font-size */
  html {
    ${SCREEN_BREAKPOINT("XSmall")} {
      font-size: ${DEFAULT_FONT_SIZE *
      (MOBILE_MIN_WIDTH / MOBILE_DESIGN_WIDTH)}px;
    }

    ${SCREEN_BREAKPOINT("large")} {
      font-size: ${DEFAULT_FONT_SIZE *
      (MOBILE_MAX_WIDTH / MOBILE_DESIGN_WIDTH)}px;
    }
  }
`;

export default fontStyle;
