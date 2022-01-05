import { MEDIA_QUERY_ARR } from "@styles/MediaQuery";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const SIZE = 3.5;

export const HamburgerButton = styled.div`
  position: absolute;
  left: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${SIZE}rem;
  height: ${SIZE}rem;

  cursor: pointer;
  transition: all 0.5 ease-in-out;

  z-index: 100;

  ${MEDIA_QUERY_ARR("large")} {
    display: none;
  }
`;

export const Line = styled.div<{ isOpened: boolean }>`
  width: 5rem;
  height: 0.4rem;
  background-color: skyblue;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2);
  transition: all 0.3s ease-in-out;

  &::before,
  ::after {
    position: absolute;
    content: "";
    width: ${SIZE}rem;
    height: 0.4rem;
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
