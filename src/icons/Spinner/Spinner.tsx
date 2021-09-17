import React from "react";

import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/react";

const ShiftDashOffsetAni = keyframes`
0% {
  stroke-dashoffset: 0;
}

100% {
  stroke-dashoffset: -157;
}
`;

const rotateAni = keyframes`

from {
  transform: rotate(0deg)
}

to{
  transform: rotate(360deg)
}
`;

const Wrapper = styled.div`
  position: absolute;
  top: 0;

  z-index: 10;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  background: white;
  /* opacity: 0.7; */

  svg {
    animation: ${rotateAni} 2s infinite;
  }

  circle {
    /* stroke: black; */
    stroke-width: 4;
    fill: transparent;

    stroke-dasharray: 157;
    animation: ${ShiftDashOffsetAni} 1s cubic-bezier(0.075, 0.82, 0.165, 1)
      infinite;
  }
`;

interface Props {
  radius?: number;
  strokeColor?: string;
}

function Spinner({ radius = 25, strokeColor = "black" }) {
  return (
    <>
      <Wrapper>
        <svg width="54" height="54" viewBox="0 0 54 54">
          <circle cx="50%" cy="50%" r={radius} stroke={strokeColor}></circle>
        </svg>
      </Wrapper>
    </>
  );
}

export default Spinner;
