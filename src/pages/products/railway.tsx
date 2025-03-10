import React, { useEffect } from "react";
import FlyoutNav from "../../components/nav/Header";
import Hero from "@/components/hero/Hero";
import Footer from "@/components/footer/Footer";
import Image from "next/image"; // Pour une gestion optimale des images
import Head from "next/head"; // Pour le SEO

const RailwayPage: React.FC = () => {
  useEffect(() => {
    document.title = "Nos Produits Ferroviaires"; // Set the title of the page
  }, []);

  return (
    <>
      {/* Balises SEO */}
      <Head>
        <title>Nos Produits Ferroviaires</title>
        <meta
          name="description"
          content="Découvrez notre gamme de produits ferroviaires innovants, adaptés aux besoins du secteur ferroviaire."
        />
        <meta name="robots" content="index, follow" />
      </Head>

      <div className="grid bg-white min-h-screen">
        <FlyoutNav />
        <main>
          <div className="space-y-32 pb-24">
            {/* Hero section with full width */}
            <div className="w-full min-h-screen z-10 bg-black bg-opacity-10">
              <Hero
                title="Nos Produits Ferroviaires"
                bgVideo="/bg.webm"
                overlayOpacity="bg-black/60"
              />
            </div>

            {/* Coming Soon Section */}
            <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-[#2da8d2]">
                COMING SOON 🚆
              </h1>
              <Image
                src="/images/comingsoon.gif"
                alt="Animation indiquant que la page des produits ferroviaires arrive bientôt"
                width={400} // Ajustez la taille selon vos besoins
                height={400}
                className="w-72 h-auto md:w-96"
              />
            </div>
          </div>
          <Footer />
        </main>
      </div>
    </>
  );
};

export default RailwayPage;
