import React from "react";
import FlyoutNav from "./nav/Header"; // Si exporté par défaut
import Hero from "./hero/Hero";
import { About } from "./about/About";
import { Sectors } from "./sectors/sectors";
import { Strength } from "./strength/strength";
import { Contact } from "./contact/Contact";
import { Products } from "./products/products";
import Footer from "./footer/Footer";

export const HomPage = () => {
  return (
    <div className="grid bg-white min-h-screen">
      <FlyoutNav />
      <main>
        <div className="space-y-32 pb-24">
          {/* Hero section with full width */}
          <div className="w-full min-h-screen z-10 bg-black bg-opacity-10">
            <Hero
              title={
                "ALFA MAROC TECH INDUSTRIE"
              }
              subtitle={
                "Souverainetés Industrielle Marocaine"
              }
              buttonText="Découvrez notre catalogue"
              buttonLink="/catalogue.pdf"
              bgVideo="/bg.mp4"
            />          </div>
          {/* Rest of the content */}
          <div className="mx-auto max-w-5xl px-4 md:px-8 space-y-32">
            {/* <div className="w-full">
              <img
                src="/images/amti.jpg"
                alt="Présentation d'AMTI"
                className="w-full rounded-2xl shadow-lg"
              />
            </div> */}
            <About />
            <Strength />
            <Sectors />
            <Contact />
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
};
