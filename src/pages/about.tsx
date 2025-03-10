import React, { useEffect } from "react";
import { IntroductionSection } from "../components/about/IntroductionSection";
import FlyoutNav from "../components/nav/Header"; // Si exporté par défaut
import { HistoriqueSection } from "../components/about/HistoriqueSection";
import { ChiffresClesSection } from "../components/about/ChiffresClesSection";
import { NotreMissionSection } from "../components/about/NotreMissionSection";
import { NosValeursSection } from "../components/about/NosValeursSection";
import { NosReferencesSection } from "../components/about/NosReferencesSection";
import Hero from "@/components/hero/Hero";
import Footer from "@/components/footer/Footer";
import Head from "next/head";  // Importation de Head de Next.js

const AboutPage: React.FC = () => {
  return (
    <div className="grid bg-white min-h-screen">
      <Head>
        {/* Définir le titre de la page */}
        <title>À Propos de Notre Entreprise | Innovation et Qualité</title>

        {/* Description SEO */}
        <meta
          name="description"
          content="Découvrez notre entreprise, AMTI, leader dans l'innovation et la qualité dans le secteur des équipements médicaux et ferroviaires."
        />

        {/* Keywords SEO */}
        <meta
          name="keywords"
          content="AMTI, équipements médicaux, ferroviaire, innovation, qualité, Maroc, hospitalier, industrie ferroviaire"
        />

        {/* Open Graph (SEO pour Facebook, LinkedIn) */}
        <meta property="og:title" content="À Propos de Notre Entreprise | AMTI" />
        <meta
          property="og:description"
          content="Découvrez notre entreprise, AMTI, leader dans l'innovation et la qualité dans le secteur des équipements médicaux et ferroviaires."
        />
        <meta property="og:image" content="/images/og-about.jpg" />
        <meta property="og:url" content="https://www.alfa-mti.com/about" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="À Propos de Notre Entreprise | AMTI" />
        <meta
          name="twitter:description"
          content="Découvrez notre entreprise, AMTI, leader dans l'innovation et la qualité dans le secteur des équipements médicaux et ferroviaires."
        />
        <meta name="twitter:image" content="/images/twitter-about.jpg" />
      </Head>

      <FlyoutNav />
      <main>
        <div className="space-y-32 pb-24">
          {/* Hero section with full width */}
          <div className="w-full min-h-screen z-10 bg-black bg-opacity-10">
            <Hero
              title="À propos de notre entreprise"
              subtitle="Engagés Dans L'Innovation Et La Qualité Depuis 2020"
              buttonText="En savoir plus"
              buttonLink="#about"
              bgVideo="/bg.webm"
              overlayOpacity="bg-black/60"
            />
          </div>

          {/* Rest of the content */}
          <div className="mx-auto max-w-5xl px-4 md:px-8 space-y-32">
            <IntroductionSection />
            <HistoriqueSection />
            <ChiffresClesSection />
            <NotreMissionSection />
            <NosValeursSection />
            <NosReferencesSection />
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default AboutPage;
