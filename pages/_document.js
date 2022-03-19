/* eslint-disable @next/next/no-title-in-document-head */
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <title>Portfolio</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        <meta name="description" content="Neil Alvarez Garcia Portfolio" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
