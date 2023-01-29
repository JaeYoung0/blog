import { SCREEN_BREAKPOINT } from "@styles/mediaQuery";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const SIZE = 2.5;

export const HamburgerButton = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center; */
  width: ${SIZE}rem;
  height: ${SIZE}rem;

  cursor: pointer;
  transition: all 0.5 ease-in-out;

  ${SCREEN_BREAKPOINT("large")} {
    display: none;
  }
`;

const HEIGHT = "2px";
export const Line = styled.div<{ isOpened: boolean }>`
  width: 5rem;
  height: ${HEIGHT};
  background-color: skyblue;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2);
  transition: all 0.3s ease-in-out;

  &::before,
  ::after {
    position: absolute;
    content: "";
    width: ${SIZE}rem;
    height: ${HEIGHT};
    background-color: skyblue;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2);

    transition: all 0.3s ease-in-out;
  }
  &::before {
    transform: translateY(-1rem);
  }

  &::after {
    transform: translateY(1rem);
  }

  ${({ isOpened }) =>
    isOpened &&
    css`
      & {
        transform: translateX(-50px);
        background: transparent;
        box-shadow: none;
      }

      &::before {
        transform: rotate(45deg) translate(35px, -35px);
      }

      &::after {
        transform: rotate(-45deg) translate(35px, 35px);
      }
    `}
`;
