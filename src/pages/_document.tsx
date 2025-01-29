import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Meta SEO */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
        <meta
          name="description"
          content="AMTI - Alfa Maroc Tech Industrie est un leader marocain dans la fabrication d'équipements médicaux et ferroviaires innovants. Découvrez nos solutions sur mesure pour le secteur hospitalier et l'industrie ferroviaire."
        />
        <meta
          name="keywords"
          content="AMTI, Alfa Maroc Tech Industrie, équipements médicaux, ferroviaire, dispositifs médicaux, Maroc, fabrication, hôpitaux, innovation, santé, matériel ferroviaire,
          guéridons inox, chariots médicaux, chariot de soin, chariot oxygène, chariot CO2, chariot d’habillage, chariot défibrillateur, chariot à linge, table à instruments, 
          table mayo inox, table radiothérapie, pieds à perfusion, support écran médical, support tablette, support blouse plombée, divan d'examen, escabeau médical, rayonnage inox, 
          accessoires de table opératoire, fauteuil ambulatoire, table à manger hôpital, rideau télescopique inox"
        />
        <meta name="author" content="AMTI - Alfa Maroc Tech Industrie" />

        {/* Open Graph (SEO pour Facebook, LinkedIn) */}
        <meta property="og:title" content="AMTI - Alfa Maroc Tech Industrie" />
        <meta property="og:description" content="Fabricant marocain d'équipements médicaux et ferroviaires de haute qualité." />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content="https://www.alfa-mti.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card (SEO pour Twitter) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AMTI - Alfa Maroc Tech Industrie" />
        <meta name="twitter:description" content="Fabricant marocain d'équipements médicaux et ferroviaires de haute qualité." />
        <meta name="twitter:image" content="/twitter-image.jpg" />
        <meta name="twitter:site" content="@amti" />

        {/* Preconnect for Google Fonts */}
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
