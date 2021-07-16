import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { SECTION_INFO, calcEffect } from "./Home";
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

  border: 1px solid red;

  h1 {
    font-size: 4.5rem;
    padding-top: 50vh;
    display: none;
    position: fixed;
    top: 0;
    opacity: 1;
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
