import useNavbar from "@hooks/useNavbar";
import Link from "next/link";
import * as S from "./Navbar.style";
import Hamburger from "@components/Hamburger";
import { useEffect, useState } from "react";
import { css } from "@emotion/react";
import { useRouter } from "next/router";

import useUser from "@hooks/useUser";

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
    <S.Navigation hideNavbar={hideNavbar}>
      {/* <Hamburger open={isOpened} onClick={handleHamburgerClick} /> */}

      <S.TopMenuWrapper>
        <Link href="/posts">
          <S.Logo>Jay Young</S.Logo>
        </Link>
      </S.TopMenuWrapper>

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
