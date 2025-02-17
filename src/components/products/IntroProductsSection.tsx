import React from "react";
import { SectionHeader } from "../util/SectionHeader";
import Reveal from "../util/Reveal";

export const IntroductionSection: React.FC = () => {
  return (
    <section id="products" className="section-wrapper text-black">
      <div className="space-y-8">
        <Reveal>
          <p className="leading-relaxed text-black">
            <span className="font-bold text-[#2591c2]">AMTI</span> est une entreprise industrielle 
            spécialisée dans la conception et la fabrication d&apos;équipements médicaux. 
            Contrairement aux entreprises commerciales, nous innovons constamment pour créer de 
            nouveaux produits et améliorer ceux existants afin de répondre aux exigences du secteur 
            médical.
          </p>
        </Reveal>
        <Reveal>
          <p className="leading-relaxed text-black">
            Découvrez notre gamme de produits médicaux adaptés aux cabinets médicaux, hôpitaux et 
            autres établissements de santé.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default IntroductionSection;
