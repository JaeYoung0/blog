import React from "react";
import Navigation from "@components/Navigation";

import * as S from "./style";
import Link from "next/link";

interface Props {
  children: React.ReactNode;
}

function DefaultLayout({ children }: Props) {
  return (
    <S.Layout>
      <S.Header>
        <S.Logo>
          <Link href="/posts">
            <img style={{ width: "6rem" }} src="/blog-logo-2.png" />
            <span>제이영의 기술블로그</span>
          </Link>
        </S.Logo>

        {/* <Navigation /> */}
      </S.Header>
      <S.Main>{children}</S.Main>
      <S.Footer>
        <span>© 2023 제이영. All rights reserved.</span>
      </S.Footer>
    </S.Layout>
  );
}

export default DefaultLayout;
