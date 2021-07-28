import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const ClockHand = styled.div<{ rotation: number }>`
  height: 2px;
  width: 30px;
  background-color: white;

  transform-origin: top left;
  ${({ rotation }) => css`
    transform: translateX(50px) translateY(50px) rotate(${rotation}deg);
  `}

  /* transition: all 0.5s ease-in-out; */
  transition: transform 2s cubic-bezier(0.075, 0.82, 0.165, 1)
`;

const Wrapper = styled.div`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  background-color: black;
`;

function RotateGame() {
  const [deg, setDeg] = useState(-90);

  const init = () => {
    const randomDeg = Math.floor(Math.random() * 1000);

    setDeg(deg + randomDeg);
  };

  const reset = () => {
    setDeg(-90);
  };

  return (
    <>
      <h1>RotateGame</h1>
      <h1>deg:{deg}</h1>
      <Wrapper>
        <ClockHand rotation={deg} />
      </Wrapper>
      <button onClick={init}>랜덤회전</button>
      <button onClick={reset}>리셋</button>
    </>
  );
}

export default RotateGame;
