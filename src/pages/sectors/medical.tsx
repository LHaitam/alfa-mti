import React from "react";
import FlyoutNav from "../../components/nav/Header";
import { IntroductionSection } from "../../components/medical/IntroductionSection";
import { ServicesSection } from "../../components/medical/ServicesSection";
import { ProductsSection } from "../../components/medical/ProductsSection";
import { ProcessSection } from "../../components/medical/ProcessSection";
import { Projects } from "../../components/projects/Projects";



import Hero from "@/components/hero/Hero";
import Footer from "@/components/footer/Footer";


const MedicalPage: React.FC = () => {
    return (
        <div className="grid bg-white min-h-screen">
            <FlyoutNav />
            <main>
                <div className="space-y-32 pb-24">
                    {/* Hero section with full width */}
                    <div className="w-full min-h-screen z-10 bg-black bg-opacity-10">
                        <Hero
                            title="L&apos;Excellence au Service de la Santé"
                            subtitle="Des solutions innovantes pour transformer les infrastructures de santé au Maroc et à l'international."
                            buttonText="En savoir plus"
                            buttonLink="#about"
                            bgVideo="/bg.mp4"
                            overlayOpacity="bg-black/60"
                        />          </div>
                    {/* Rest of the content */}
                    <div className="mx-auto max-w-5xl px-4 md:px-8 space-y-32">
                        <IntroductionSection />
                        <ServicesSection />
                        <ProcessSection />
                        <ProductsSection />
                        <Projects />
                    </div>
                </div>
                <Footer />
            </main>
        </div>
    );
};

export default MedicalPage;
