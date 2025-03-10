import React, { useEffect } from "react";
import FlyoutNav from "../../components/nav/Header";
import { IntroductionSection } from "../../components/medical/IntroductionSection";
import { ServicesSection } from "../../components/medical/ServicesSection";
import { ProductsSection } from "../../components/medical/ProductsSection";
import { ProcessSection } from "../../components/medical/ProcessSection";
import { Projects } from "../../components/projects/Projects";
import Map from "@/components/map/MapMaroc";
import Hero from "@/components/hero/Hero";
import Footer from "@/components/footer/Footer";
import Head from "next/head"; // Import Head for setting meta tags

const MedicalPage: React.FC = () => {

  useEffect(() => {
    // Dynamically setting the document title for better SEO
    document.title = "L'Excellence au Service de la Santé - Solutions innovantes pour les infrastructures de santé";
  }, []);

  return (
    <>
      {/* Meta SEO */}
      <Head>
        <title>L'Excellence au Service de la Santé - Solutions innovantes pour les infrastructures de santé</title>
        <meta
          name="description"
          content="Découvrez nos solutions innovantes et de haute qualité pour la transformation des infrastructures de santé au Maroc et à l'international."
        />
        {/* You can add more meta tags like keywords, Open Graph for social media, etc. */}
      </Head>

      <div className="grid bg-white min-h-screen overflow-x-hidden">
        <FlyoutNav />
        <main className="max-w-screen overflow-hidden">
          <div className="space-y-32 pb-24">
            {/* Hero Section */}
            <div className="w-full max-w-full min-h-screen z-10 bg-black bg-opacity-10">
              <Hero
                title="L'Excellence au Service de la Santé"
                subtitle="Des solutions innovantes pour transformer les infrastructures de santé au Maroc et à l'international."
                buttonText="En savoir plus"
                buttonLink="#about"
                bgVideo="/bg.webm"
                overlayOpacity="bg-black/60"
              />
            </div>

            {/* Main Content */}
            <div className="container mx-auto max-w-5xl px-4 md:px-8 space-y-32 overflow-hidden">
              <IntroductionSection />
              <ServicesSection />
              <ProcessSection />
              <ProductsSection />
              <Map />
              <Projects />
            </div>
          </div>
          <Footer />
        </main>
      </div>
    </>
  );
};

export default MedicalPage;
