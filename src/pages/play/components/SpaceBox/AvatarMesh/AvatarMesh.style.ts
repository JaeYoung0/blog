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
    box-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #f0f, 0 0 40px #0ff, 0 0 50px #7A62DA, 0 0 60px #7A62DA, 0 0 70px #7A62DA;
  }
  to {
    box-shadow: 0 0 10px #fff, 0 0 30px #7A62DA, 0 0 40px #7A62DA, 0 0 30px #7A62DA, 0 0 60px #7A62DA, 0 0 30px #7A62DA, 0 0 30px #7A62DA;
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
  border: 2px solid #7A62DA;
  }

  100% {
    width: 80px;
    height: 80px;
    border: 2px solid #7A62DA;
  }
`;

export const AvatarWrapper = styled.div<{ isMe: boolean }>`
  ${center}
  width: 50px;
  height: 50px;

  ${({ isMe }) =>
    isMe &&
    css`
      width: 100px;
      height: 100px;
    `}

  border-radius: 50%;
  z-index: 10;

  &::after {
    content: "";
    ${center}
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 3px solid #7a62da;
    filter: blur(2px);

    ${({ isMe }) =>
      isMe &&
      css`
        width: 100px;
        height: 100px;
      `}
  }

  div {
    position: relative;
  }
`;

export const Name = styled.p`
  font-size: 13px;
  color: #fff;
`;
