import useNavbar from "@hooks/useNavbar";
import * as S from "./Navigation.style";
import { useEffect, useState } from "react";
import { css } from "@emotion/react";
import { useRouter } from "next/router";

export default function Navigation() {
  const { hideNavbar } = useNavbar();
  const [isOpened] = useState(false);
  // const handleHamburgerClick = () => {
  //   setIsOpened(!isOpened);
  // };

  useEffect(() => {
    if (isOpened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "initial";
    }
  }, [isOpened]);

  const router = useRouter();
  // const handleClickDrawerMenu = (page: string) => {
  //   setIsOpened(false);
  //   router.push(`/${page}`);
  // };

  return (
    <S.Navigation hideNavbar={hideNavbar}>
      {/* <Hamburger open={isOpened} onClick={handleHamburgerClick} /> */}

      <S.Drawer
        css={css`
          transform: ${isOpened ? `translateX(0%)` : `translateX(100%)`};
        `}
      >
        <li onClick={() => router.push("/")}>블로그</li>
      </S.Drawer>
    </S.Navigation>
  );
}
