import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Link from "next/link";
import { useEffect, useState } from "react";

const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Footer = styled.footer`
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Navigation = styled.nav<{ hideNavbar: boolean }>`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 45px;

  background-color: #99b5d2;

  a {
    font-size: 15px;
    margin: 0 10px;
    color: black;

    &:nth-of-type(1) {
      margin-right: auto;
    }
  }

  ${({ hideNavbar }) =>
    hideNavbar &&
    css`
      transform: translateY(-100%);
      transition: 0.5s ease-in-out;
    `}

  ${({ hideNavbar }) =>
    !hideNavbar &&
    css`
      transform: translateY(0%);
      transition: 0.5s ease-in-out;
    `}
`;

function Navbar() {
  const navbarHeight = 45;
  const [hideNavbar, setHideNavbar] = useState(false);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.pageYOffset > 200) setHideNavbar(true);
      if (window.pageYOffset < 200) setHideNavbar(false);
    });
  }, []);
  return (
    <Navigation hideNavbar={hideNavbar}>
      <Link href="#">하루하늘</Link>
      <Link href="#">메뉴1</Link>
      <Link href="#">메뉴2</Link>
      <Link href="#">메뉴3</Link>
    </Navigation>
  );
}

export default function HomePage() {
  return (
    <Container>
      <Navbar />
      <h1 style={{ paddingBottom: "200vh" }}>본문</h1>
      <Footer>
        <span>Footer</span>
      </Footer>
    </Container>
  );
}
