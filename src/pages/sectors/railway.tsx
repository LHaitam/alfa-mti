import React from "react";
import FlyoutNav from "../../components/nav/Header";
import Hero from "@/components/hero/Hero";
import Footer from "@/components/footer/Footer";

const RailwayPage: React.FC = () => {
  return (
    <div className="grid bg-white min-h-screen">
      <FlyoutNav />
      <main>
        <div className="space-y-32 pb-24">
          {/* Hero section with full width */}
          <div className="w-full min-h-screen z-10 bg-black bg-opacity-10">
            <Hero
              title="L&apos;Industrie Ferroviaire en Pleine Expansion"
              subtitle="Découvrez comment nous innovons pour transformer le secteur ferroviaire avec des solutions sur mesure et durables."
              bgVideo="/bg.mp4"
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
        <Footer />
      </main>
    </div>
  );
};

export default RailwayPage;
