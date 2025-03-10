// pages/_document.tsx

import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        {/* Favicon et autres liens de base */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta charSet="UTF-8" />
        <meta name="author" content="AMTI - Alfa Maroc Tech Industrie" />

        {/* Préconnexion pour les polices */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Police Kodchasan */}
        <link
          href="https://fonts.googleapis.com/css2?family=Kodchasan:wght@200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body id="root" className="bg-white text-zinc-50">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
