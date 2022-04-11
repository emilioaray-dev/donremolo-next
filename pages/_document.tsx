import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="application-name" content="Don Rémolo" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Don Rémolo" />
        <meta name="description" content="Generado por el Equipo 87 de IDeas" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#FFFFFF" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#FFFFFF" />

        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          href="/assets/appIcon/maskable_icon_x48.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link
          href="/assets/appIcon/maskable_icon_x512.png"
          rel="icon"
          type="image/png"
          sizes="512x512"
        />
        <link rel="apple-touch-icon" href="/assets/appIcon/maskable_icon.png"></link>
        <meta property="og:type" content="website" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
