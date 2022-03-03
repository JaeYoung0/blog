import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/react";

export const center = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
`;

export const glow = keyframes`
from {
    box-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #f0f, 0 0 40px #0ff, 0 0 50px #7e71f3, 0 0 60px #7e71f3, 0 0 70px #7e71f3;
  }
  to {
    box-shadow: 0 0 10px #fff, 0 0 30px #7e71f3, 0 0 40px #7e71f3, 0 0 30px #7e71f3, 0 0 60px #7e71f3, 0 0 30px #7e71f3, 0 0 30px #7e71f3;
  }
`;

export const glowing = css`
  &::before {
    content: "";
    ${center}
    width: 50px;
    height: 50px;
    border-radius: 50%;
    filter: blur(2px);
    animation: ${glow} 1s ease-in-out infinite alternate;
  }
`;

export const ripple = keyframes`
 0% {
  width: 75px;
  height: 75px;
  filter: blur(0px);
  border: 2px solid #7e71f3;

  }
  100% {
    width: 80px;
    height: 80px;
    filter: blur(2px);
    border: 2px solid #7e71f3;

  }
`;

export const AvatarWrapper = styled.div`
  /* ${center} */
  width: 50px;
  height: 50px;

  /* ${glowing} */

  z-index: 10;

  div {
    position: relative;
  }
`;

export const Name = styled.p`
  /* width: 100%;
  height: 100%;
  ${center} */

  /* position: absolute; */
  /* bottom: 0; */
  font-size: 13px;
  color: #fff;
`;
