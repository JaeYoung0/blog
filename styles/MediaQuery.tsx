import { Global } from "@emotion/react";

import { css } from "@emotion/react";

const breakpoints = {
  smaller: 320,
  small: 414,
  large: 1200,
};

type BP = keyof typeof breakpoints;
export const MEDIA_QUERY_ARR = (name: BP) =>
  `@media (min-width: ${breakpoints[name]}px)`;

const DEFAULT_FONT_SIZE = 10;
const DEFAULT_DEVICE_WIDTH = 414;

const style = css`
  html {
    font-size: 10px;

    /* small 이니 large니 이름지을 필요 없이 */
    ${MEDIA_QUERY_ARR("smaller")} {
      font-size: calc((${DEFAULT_FONT_SIZE} / ${DEFAULT_DEVICE_WIDTH}) * 100vw);
    }

    ${MEDIA_QUERY_ARR("small")} {
      font-size: ${DEFAULT_FONT_SIZE}px;
    }
  }
`;

function MediaQuery() {
  return <Global styles={style} />;
}

export default MediaQuery;
