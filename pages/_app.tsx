import type { AppProps } from "next/app";
import Head from "next/head";
import { Global } from "@emotion/react";
import { resetStyle } from "@styles/resetStyle";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>하루하늘</title>
        <meta name="description" content="하루에 한 번은 하늘을" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Global styles={resetStyle} />
      <Component {...pageProps} />
    </div>
  );
}
export default MyApp;
