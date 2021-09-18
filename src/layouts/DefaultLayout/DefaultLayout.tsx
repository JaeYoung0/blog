import React from "react";
import Navbar from "@components/Navbar";
import { css } from "@emotion/react";

function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      css={css`
        background: #222222;
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
