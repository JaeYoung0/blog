import useNavbar from "@hooks/useNavbar";
import Link from "next/link";
import * as S from "./Navbar.style";
import Hamburger from "@components/Hamburger";
import { useState } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const Drawer = styled.ol``;

export default function Navbar() {
  const { hideNavbar } = useNavbar();
  const [isOpened, setIsOpened] = useState(false);
  const handleHamburgerClick = () => setIsOpened(!isOpened);

  return (
    <S.Navigation hideNavbar={hideNavbar}>
      <Hamburger open={isOpened} onClick={handleHamburgerClick} />
      <Link href="#">J.Young's blog</Link>

      {/* <Link href="#">메뉴1</Link>
      <Link href="#">메뉴2</Link>
      <Link href="#">메뉴3</Link> */}

      <Drawer
        css={css`
          /* background-color: #222222; */
          background-color: black;
          position: fixed;
          top: 0;
          left: 0;

          transform: ${isOpened ? `translateX(0%)` : `translateX(-100%)`};
          transition: transform 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
          width: 100%;
          min-height: 100vh;
          padding: 10rem;
          text-align: center;

          li {
            font-size: 1.5rem;
            line-height: 5;
            color: skyblue;
          }
        `}
      >
        <li>블로그</li>
        <li>구름</li>
        <li>로그인</li>
      </Drawer>
    </S.Navigation>
  );
}
