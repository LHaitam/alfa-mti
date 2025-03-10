import React, { useEffect } from "react";
import FlyoutNav from "../../components/nav/Header";
import Hero from "@/components/hero/Hero";
import Footer from "@/components/footer/Footer";
import Head from "next/head"; // Import Head for setting meta tags

const RailwayPage: React.FC = () => {
  
  useEffect(() => {
    document.title = "Industrie Ferroviaire - Solutions Innovantes et Durables"; // Dynamically set page title for SEO
  }, []);
  
  return (
    <>
      {/* Meta SEO for better optimization */}
      <Head>
        <title>Industrie Ferroviaire - Solutions Innovantes et Durables</title>
        <meta
          name="description"
          content="Explorez comment nous transformons l'industrie ferroviaire avec des solutions innovantes et durables, adaptées aux besoins du secteur."
        />
      </Head>

      <div className="grid bg-white min-h-screen">
        <FlyoutNav />
        <main>
          <div className="space-y-32 pb-24">
            {/* Hero section with full width */}
            <div className="w-full min-h-screen z-10 bg-black bg-opacity-10">
              <Hero
                title="L&apos;Industrie Ferroviaire en Pleine Expansion"
                subtitle="Découvrez comment nous innovons pour transformer le secteur ferroviaire avec des solutions sur mesure et durables."
                bgVideo="/bg.webm"
                overlayOpacity="bg-black/60"
              />
            </div>
            
            {/* Coming Soon Section */}
            <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-[#2da8d2]">
                COMING SOON 🚆
              </h1>
              <img
                src="/images/comingsoon.gif"
                alt="Coming Soon Animation"
                className="w-72 h-auto md:w-96"
              />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default RailwayPage;
