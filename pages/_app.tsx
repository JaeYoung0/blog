import type { AppProps } from "next/app";
import Head from "next/head";
import { css, Global } from "@emotion/react";
import resetStyle from "@styles/resetStyle";
import fontStyle from "@styles/fontStyle";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>제이영</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon-jay.ico" />
      </Head>
      <MyGlobalStyle />
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
}

function MyGlobalStyle() {
  return (
    <Global
      styles={css`
        ${resetStyle}
        ${fontStyle}
      `}
    />
  );
}

export default MyApp;
