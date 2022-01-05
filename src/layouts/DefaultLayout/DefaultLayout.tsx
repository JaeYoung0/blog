import React from "react";
import Navbar from "@components/Navbar";
import { css } from "@emotion/react";

interface Props {
  children: React.ReactNode;
  backgroud?: string;
}

function DefaultLayout({ children, backgroud = "#222222" }: Props) {
  return (
    <div
      css={css`
        background: ${backgroud};
        min-height: 100vh;
        overflow-x: hidden;
      `}
    >
      <Navbar />
      {children}
    </div>
  );
}

export default DefaultLayout;
