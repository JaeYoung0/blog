import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const FrontGround = styled.div<{ scrollY: number }>`
  position: fixed;
  top: 0;
  /* z-index: 1; */
  /* background: url("/images/bg2.jpg"); */
  background: url("/images/star.png");
  /* min-height: 200vh; */
  height: 200vh;
  width: 100vw;
  /* opacity: 0.5; */

  ${({ scrollY }) =>
    scrollY &&
    css`
      transform: translateY(${-scrollY / 1.7}px);
    `}
`;

export const Container = styled.div<{ scrollY: number }>`
  background: center/cover url("/images/bg.jpg");

  overflow-x: hidden;

  h1 {
    padding-top: 35vh;
    text-align: center;
    font-size: 4rem;
    color: white;
  }

  section:nth-of-type(1) {
    min-height: 300vh;
  }

  section:nth-of-type(2) {
    background: center/cover url("/images/bottom.png");
    min-height: 60vh;
  }

  ${({ scrollY }) =>
    scrollY &&
    css`
      h1 {
        transform: translateY(${-scrollY / 3}px);
      }
    `}

  section ul {
    display: flex;
    justify-content: center;
    list-style: none;
  }

  section ul li {
    z-index: 2;
    margin: 0 15px;
    width: 10rem;
    height: 20rem;
    border-radius: 6px;
    padding: 10px;
    background: linear-gradient(45deg, #6cb9db, #0652bf);

    transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);

    &:hover {
      transform: translateY(-20px);
    }
  }

  section ul li p {
    font-size: 16px;
    color: white;
    margin: 10px;
    padding-bottom: 5px;
    border-bottom: 2px dashed white;
  }
`;
