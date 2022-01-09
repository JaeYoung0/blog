import { Global } from "@emotion/react";

import { css } from "@emotion/react";

const breakpoints = {
  smaller: 280,
  small: 414,
  large: 1200,
};

type BP = keyof typeof breakpoints;
export const SCREEN_BREAKPOINT = (name: BP) =>
  `@media (min-width: ${breakpoints[name]}px)`;

const DEFAULT_FONT_SIZE = 10;
const DEFAULT_DEVICE_WIDTH = 414;

const style = css`
  html {
    font-size: 10px;

    ${SCREEN_BREAKPOINT("smaller")} {
      font-size: calc((${DEFAULT_FONT_SIZE} / ${DEFAULT_DEVICE_WIDTH}) * 100vw);
    }

    ${SCREEN_BREAKPOINT("small")} {
      font-size: ${DEFAULT_FONT_SIZE}px;
    }
  }
`;

function MediaQuery() {
  return <Global styles={style} />;
}

export default MediaQuery;
