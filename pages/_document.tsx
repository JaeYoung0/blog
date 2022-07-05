import Document, { Html, Head, Main, NextScript } from "next/document";

// https://nextjs.org/docs/basic-features/font-optimization
// https://levelup.gitconnected.com/how-to-self-host-fonts-in-nextjs-5a9930d8c67a
// https://fonts.google.com/knowledge/using_type/using_web_fonts

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preload" href="/fonts/SUIT-Bold.woff2" as="font" />
          <link rel="preload" href="/fonts/SUIT-Regular.woff2" as="font" />
          <link href="/fonts.css" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
