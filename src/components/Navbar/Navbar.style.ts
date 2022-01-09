import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { SCREEN_BREAKPOINT } from "@styles/MediaQuery";

export const Drawer = styled.ol`
  background-color: black;

  position: fixed;
  top: 0;
  left: 0;

  transition: transform 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  width: 100%;
  min-height: 100vh;
  padding: 10rem;
  text-align: center;

  li {
    font-size: 2rem;
    line-height: 4;
    color: skyblue;
    cursor: pointer;
  }
`;

export const TopMenuWrapper = styled.div`
  max-width: 120rem;

  ${SCREEN_BREAKPOINT("large")} {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
  }

  span {
    font-size: 2.5rem;
    color: skyblue;
    cursor: pointer;
  }
`;

export const Menus = styled.div`
  ${SCREEN_BREAKPOINT("smaller")} {
    display: none;
  }

  ${SCREEN_BREAKPOINT("large")} {
    display: inline-block;
  }

  span {
    font-size: 1.8rem;
    color: skyblue;
    margin-left: 5rem;
    cursor: pointer;
  }
`;

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
  height: 7rem;

  ${({ background }) => css`
    background: ${background};
  `}

  a {
    color: skyblue;
    font-size: 2.5rem;
    margin: 0 10px;
  }

  /* ${({ hideNavbar }) =>
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
    `} */
`;
