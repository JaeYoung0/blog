import useNavbar from "@hooks/useNavbar";
import Link from "next/link";
import * as S from "./Navbar.style";
import Hamburger from "@components/Hamburger";
import { useState } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { MEDIA_QUERY_ARR } from "@styles/MediaQuery";
import { useRouter } from "next/router";

import useUser from "@hooks/useUser";

const Drawer = styled.ol``;

const TopMenuWrapper = styled.div``;

export default function Navbar() {
  const { hideNavbar } = useNavbar();
  const [isOpened, setIsOpened] = useState(false);
  const handleHamburgerClick = () => setIsOpened(!isOpened);

  const router = useRouter();
  const handleDrawerMenuClick = (page: string) => {
    setIsOpened(false);
    router.push(`/${page}`);
  };

  const { me, logout } = useUser();

  return (
    <S.Navigation hideNavbar={hideNavbar} background={"#222222"}>
      <Hamburger open={isOpened} onClick={handleHamburgerClick} />

      <TopMenuWrapper
        css={css`
          max-width: 120rem;

          ${MEDIA_QUERY_ARR("large")} {
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 100%;
          }
        `}
      >
        <Link href="#">
          <span
            css={css`
              font-size: 2.5rem;
              color: skyblue;
              cursor: pointer;
            `}
          >
            J.Young's blog
          </span>
        </Link>

        <div
          css={css`
            ${MEDIA_QUERY_ARR("smaller")} {
              display: none;
            }

            ${MEDIA_QUERY_ARR("large")} {
              display: inline-block;
            }
          `}
        >
          <Link href="/login">
            <span
              css={css`
                font-size: 1.8rem;
                color: skyblue;
                margin-left: 5rem;
                cursor: pointer;
              `}
            >
              로그인
            </span>
          </Link>
        </div>
      </TopMenuWrapper>

      {/* <Link href="#">메뉴1</Link>
      <Link href="#">메뉴2</Link>
      <Link href="#">메뉴3</Link> */}

      <Drawer
        css={css`
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
            font-size: 2rem;
            line-height: 4;
            color: skyblue;
            cursor: pointer;
          }
        `}
      >
        <li>블로그</li>
        <li onClick={() => handleDrawerMenuClick("cloud")}>구름</li>

        {me ? (
          <li
            onClick={() => {
              logout();
              setIsOpened(false);
            }}
          >
            로그아웃
          </li>
        ) : (
          <li onClick={() => handleDrawerMenuClick("login")}>로그인</li>
        )}
      </Drawer>
    </S.Navigation>
  );
}
