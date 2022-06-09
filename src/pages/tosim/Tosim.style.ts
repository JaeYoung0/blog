import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { calcEffect } from "./Tosim";
import { SECTION_INFO } from "./info.data";
import _ from "lodash";

export const Section = styled.section<{
  height: number;
  currentRatio: number;
  show?: boolean;
  currentSection: number;

  // opa?: number;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  /* border: 1px solid red; */

  h1 {
    font-size: 4.5rem;
    text-align: center;
    padding-top: 50vh;
    display: none;
    position: fixed;
    top: 0;
    opacity: 1;
    z-index: 10;
    white-space: pre;

    &:nth-of-type(2) {
      /* transform: translateY(30%); */
      margin-top: 20vh;
    }
  }

  img {
    display: none;
    position: fixed;
    padding-top: 50vh;
    top: 0;
    opacity: 1;

    transform: translateY(-50%);
  }

  canvas {
    display: none;

    padding-top: 20vh;
    position: fixed;
    top: 0;
  }

  ${({ currentRatio, currentSection }) => css`
    h1 {
      opacity: ${calcEffect(
        "opacity",
        currentRatio,
        SECTION_INFO[currentSection]?.effects
      )};

      transform: translateY(
        ${calcEffect(
          "translateY",
          currentRatio,
          SECTION_INFO[currentSection]?.effects
        )}%
      );
    }

    img {
      opacity: ${calcEffect(
        "opacity",
        currentRatio,
        SECTION_INFO[currentSection]?.effects
      )};
    }
  `}

  ${({ currentSection }) =>
    currentSection === 1 &&
    css`
      background: black;
      h1 {
        color: white;
      }
    `}

  ${({ height }) => css`
    height: ${height}vh;
  `}

  ${({ show }) =>
    show &&
    css`
      h1 {
        display: block;
      }
      img {
        display: block;
        width: 90vw;
      }
      canvas {
        display: block;
      }
    `}
`;

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Footer = styled.footer`
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SectionContainer = styled.div<{ currentSection: number }>`
  width: 100%;
`;
