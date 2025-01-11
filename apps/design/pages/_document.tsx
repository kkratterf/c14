import { Head, Html, Main, NextScript } from 'next/document';

import { fonts } from '@c14/design-system/lib/fonts';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className={fonts}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
