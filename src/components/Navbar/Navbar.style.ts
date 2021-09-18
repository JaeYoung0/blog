import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { COLORS } from "@constants/colors";

export const Navigation = styled.nav<{ hideNavbar: boolean }>`
  position: sticky;
  /* position: fixed; */
  top: 0;
  left: 0;
  z-index: 10;

  display: flex;
  justify-content: space-between;
  justify-content: center;

  align-items: center;
  width: 100%;
  height: 4.5rem;

  padding: 5rem;

  /* background-color: #99b5d2; */
  background-color: #222222;

  a {
    color: skyblue;
    font-size: 2.5rem;
    margin: 0 10px;
  }

  ${({ hideNavbar }) =>
    hideNavbar &&
    css`
      transform: translateY(-100%);
      transition: 0.5s ease-out;
    `}

  ${({ hideNavbar }) =>
    !hideNavbar &&
    css`
      transform: translateY(0%);
      transition: 0.5s ease-out;
    `}
`;
