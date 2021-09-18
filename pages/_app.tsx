import type { AppProps } from "next/app";
import Head from "next/head";
import { Global } from "@emotion/react";
import { resetStyle } from "@styles/resetStyle";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>J.Young</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Global styles={resetStyle} />
      <Component {...pageProps} />
    </div>
  );
}
export default MyApp;
