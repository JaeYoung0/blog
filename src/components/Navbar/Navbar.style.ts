import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { SCREEN_BREAKPOINT } from "@styles/mediaQuery";

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
  /* max-width: 120rem; */

  ${SCREEN_BREAKPOINT("large")} {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
  }
`;

export const Menus = styled.div`
  ${SCREEN_BREAKPOINT("large") || SCREEN_BREAKPOINT("XLarge")} {
    display: none;
  }

  span {
    font-size: 1.8rem;
    color: skyblue;
    margin-left: 5rem;
    cursor: pointer;
  }
`;

export const Logo = styled.span`
  font-size: 1.8rem;

  color: #e4e5e7;
  cursor: pointer;

  ${SCREEN_BREAKPOINT("large")} {
    font-size: 2.2rem;
  }
`;

export const Navigation = styled.nav<{
  hideNavbar: boolean;
}>`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 10;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 100%;

  margin: 0 auto;
  height: 6.5rem;
`;
