import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/react";

// TODO. 클래스 떼었다가 붙였다가 하면 쉬울 것 같은데,
// page상태를 바꾸면서 대응하니 애니메이션이 잘 안먹는듯?

export const fadeIn = keyframes`
from {
    opacity: 0;
    transform: translateX(0%);
}

to{
    opacity: 1;
    transform: translateX(-10%);
}
`;

const rotateAni = keyframes`
    0% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }

  70% {
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
`;

export const Container = styled.div<{ bgGradient: string }>`
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;

  /* background: linear-gradient(120deg, #0272a4, #f6a564); */

  ${({ bgGradient }) => css`
    background: ${bgGradient};
  `}
`;

export const AlbumSection = styled.section`
  position: relative;
  top: 30%;
  left: 10%;
`;

export const Disk = styled.div<{ diskColor: string; show: boolean }>`
  position: absolute;

  width: 244px;
  height: 244px;
  border-radius: 50%;
  background: linear-gradient(120deg, #000, #333333, #000);
  box-shadow: 4px 14px 40px rgba(0, 0, 0, 0.3);
  transition: left 0.5s ease-out;

  animation: ${rotateAni} 10s ease infinite;

  left: 10%;
  visibility: hidden;

  ${({ show }) =>
    show &&
    css`
      left: 25%;

      visibility: visible;
    `}
  div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 100px;

    ${({ diskColor }) => css`
      background-color: ${diskColor};
    `}

    border-radius: 50%;
    border: 3px dashed rgba(255, 255, 255, 0.4);
    &::after {
      position: absolute;
      content: "";
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 7px;
      height: 7px;
      background-color: black;
      border-radius: 50%;
    }
  }
`;

export const Img = styled.img<{ show: boolean }>`
  width: 250px;
  height: 250px;
  position: absolute;
  top: 0;
  left: 0;
  visibility: hidden;

  transition: transform 0.2s ease-out;

  opacity: 0.2;
  transform: translateX(20%);

  ${({ show }) =>
    show &&
    css`
      visibility: visible;
      opacity: 1;
      transform: translateX(0%);
    `}
`;

export const BottomNav = styled.div`
  position: fixed;
  bottom: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  button {
    width: 55px;
    height: 30px;
    background-color: black;
    color: white;
    transition: all 0.3s ease-out;

    &:hover {
      background-color: white;
      color: black;
      border: 1px solid black;
    }
  }
`;

export const PointWrap = styled.ul<{ page: number }>`
  padding: 0 10px;

  display: flex;
  justify-content: center;

  li {
    width: 10px;
    height: 10px;
    list-style: none;
    text-align: center;
    cursor: pointer;
    margin: 0 5px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.4);
    transition: background 0.3s ease-out;
  }

  ${({ page }) => css`
    li:nth-of-type(${page + 1}) {
      background-color: black;
    }
  `}
`;
