import useNavbar from "@hooks/useNavbar";
import Link from "next/link";
import * as S from "./Navbar.style";
import Hamburger from "@components/Hamburger";
import { useEffect, useState } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { MEDIA_QUERY_ARR } from "@styles/MediaQuery";
import { useRouter } from "next/router";

import useUser from "@hooks/useUser";

const TopMenuWrapper = styled.div``;

export default function Navbar() {
  const { hideNavbar } = useNavbar();
  const [isOpened, setIsOpened] = useState(false);
  const handleHamburgerClick = () => {
    setIsOpened(!isOpened);
  };

  useEffect(() => {
    if (isOpened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "initial";
    }
  }, [isOpened]);

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
        <Link href="/posts">
          <span
            css={css`
              font-size: 2.5rem;
              color: skyblue;
              cursor: pointer;
            `}
          >
            Hinu
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

      <S.Drawer
        css={css`
          transform: ${isOpened ? `translateX(0%)` : `translateX(-100%)`};
        `}
      >
        <li onClick={() => router.push("/")}>블로그</li>

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
      </S.Drawer>
    </S.Navigation>
  );
}
