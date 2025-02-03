import React from "react";
import { SectionHeader } from "../util/SectionHeader";
import Reveal from "../util/Reveal";

export const IntroductionSection: React.FC = () => {
  return (
    <section id="about" className="section-wrapper text-black">
      <SectionHeader title="Secteur&nbsp;Médical" dir="l" />
      <div className="space-y-8">
        <Reveal>
          <p className="leading-relaxed text-black">
            <span className="font-bold text-[#2591c2]">AMTI</span> est un acteur
            clé du secteur médical, reconnu pour son expertise dans la
            fabrication, l&apos;importation, l&apos;exportation, la maintenance et la
            distribution d&apos;équipements médicaux de haute qualité. Nos produits
            sont conçus pour répondre aux besoins spécifiques des professionnels
            de santé et contribuer à moderniser les infrastructures médicales.
          </p>
        </Reveal>
        <Reveal>
          <p className="leading-relaxed text-black">
            Notre catalogue comprend une large gamme d&apos;équipements tels que des
            chariots polyvalents, des tables médicales spécialisées, des lits
            ergonomiques, des supports et accessoires en inox, ainsi que des
            dispositifs de transport pour les patients et le matériel médical.
            Chaque produit est conçu pour garantir durabilité, ergonomie et
            praticité.
          </p>
        </Reveal>
        <Reveal>
          <p className="leading-relaxed text-black">
            En plus de la fabrication et de la distribution, nous offrons une
            gamme complète de services tels que la maintenance, la réparation de mobilier médical, et l&apos;accompagnement
            technique. Ces services nous permettent de garantir une utilisation
            optimale de nos équipements, tout en assurant la satisfaction de
            nos partenaires.
          </p>
        </Reveal>
        <Reveal>
          <p className="leading-relaxed text-black">
            <span className="font-bold text-[#2591c2]">AMTI</span> travaille en
            collaboration avec des institutions publiques et privées pour
            équiper des établissements de santé modernes et adaptés aux besoins
            actuels. Grâce à nos projets stratégiques, nous contribuons
            activement à l&apos;amélioration du système de santé au Maroc et à
            l&apos;échelle internationale.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default IntroductionSection;
