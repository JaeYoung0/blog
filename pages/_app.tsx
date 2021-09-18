import type { AppProps } from "next/app";
import Head from "next/head";
import { Global } from "@emotion/react";
import { resetStyle } from "@styles/resetStyle";
import MediaQuery from "@styles/MediaQuery";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>J.Young</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Global styles={resetStyle} />
      <MediaQuery />
      <Component {...pageProps} />
    </div>
  );
}
export default MyApp;
