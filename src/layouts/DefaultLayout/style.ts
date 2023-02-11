import COLORS from "@constants/colors";
import styled from "@emotion/styled";

export const Layout = styled.div`
  min-height: 100vh;
  background: #1a202c;
`;

export const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;

  width: 100%;
  /* max-width: 76rem; */
  margin: 0 auto;
  z-index: 999;
  padding: 1rem 2rem;

  backdrop-filter: blur(15px);
`;

export const Logo = styled.div`
  min-width: 20rem;

  a {
    display: flex;
    align-items: center;
  }

  img {
    width: 6rem;
  }

  span {
    font-size: 1.6rem;
    color: ${COLORS.WHITE_01};
    font-weight: bold;
  }
`;

export const Main = styled.main``;

export const Footer = styled.footer`
  padding: 3rem 2rem 3rem;
  text-align: center;

  span {
    color: ${COLORS.WHITE_02};
    font-size: 1.2rem;
  }
`;
