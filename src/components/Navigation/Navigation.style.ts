import styled from "@emotion/styled";
import { SCREEN_BREAKPOINT } from "@styles/mediaQuery";

export const Drawer = styled.ol`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  min-height: 100vh;
  background: #000;

  padding: 10rem;
  text-align: center;

  transition: transform 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);

  li {
    font-size: 2rem;
    line-height: 4;
    color: skyblue;
    cursor: pointer;
  }
`;

export const Menus = styled.div`
  span {
    font-size: 1.8rem;
    color: skyblue;
    margin-left: 5rem;
    cursor: pointer;
  }
`;

export const Logo = styled.p`
  font-size: 1.8rem;
  font-weight: bold;

  color: #e4e5e7;
  cursor: pointer;

  ${SCREEN_BREAKPOINT("large")} {
    font-size: 2.2rem;
  }
`;

export const Navigation = styled.nav<{
  hideNavbar: boolean;
}>`
  width: 100%;
`;
