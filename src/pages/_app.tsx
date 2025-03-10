// pages/_app.tsx

import Head from "next/head";
import "@/styles/globals.css";  // Inclure vos styles globaux
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* Balise meta pour définir le viewport (utile pour le responsive design) */}
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
        {/* Exemple de balises meta globales (SEO) */}
        <meta name="description" content="AMTI - Alfa Maroc Tech Industrie : équipements médicaux et ferroviaires innovants." />
        <meta name="keywords" content="AMTI, équipements médicaux, ferroviaires, chariots médicaux, dispositifs médicaux, Maroc" />
        <meta name="author" content="AMTI - Alfa Maroc Tech Industrie" />
        
        {/* Titre global pour l'application */}
        <title>ALFA MAROC TECH INDUSTRIE - Innovation et Excellence Industrielle</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
