import NextDocument, { Html, Head, Main, NextScript } from "next/document";

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head />
        <body className="bg-white dark:text-white dark:bg-black">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
