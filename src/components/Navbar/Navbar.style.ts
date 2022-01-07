import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Navigation = styled.nav<{
  hideNavbar: boolean;
  background: string;
}>`
  position: sticky;

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

  ${({ background }) => css`
    background: ${background};
  `}

  a {
    color: skyblue;
    font-size: 2.5rem;
    margin: 0 10px;
  }

  ${({ hideNavbar }) =>
    hideNavbar &&
    css`
      transform: translateY(-100%);
      transition: transform 0.5s ease-out;
    `}

  ${({ hideNavbar }) =>
    !hideNavbar &&
    css`
      transform: translateY(0%);
      transition: transform 0.5s ease-out;
    `}
`;
