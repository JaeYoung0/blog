import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Container = styled.div<{ currentSection: number }>`
  scroll-snap-type: y mandatory;
  background-color: black;

  color: white;

  /* height: 100vh; */

  img {
    position: fixed;
    right: 5vw;
    top: 35vh;
    width: 50vw;
    transition: all 1s ease-in-out;
    opacity: 0;

    transform: translate(100px, -150px) rotate(10deg);
  }

  ${({ currentSection }) =>
    currentSection === 1 &&
    css`
      img {
        opacity: 1;
        transform: translate(0px, 0px) rotate(0deg);
      }
    `}

  h1 {
    text-align: center;
    font-size: 2rem;
  }

  section {
    scroll-snap-align: start;
    height: 100vh;
    border: 1px solid blue;
  }

  article {
    padding-top: 40vh;
    padding-left: 5vw;
  }
`;
