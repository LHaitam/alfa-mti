import React from "react";
import { SectionHeader } from "../util/SectionHeader";
import Reveal from "../util/Reveal";

const steps = [
  {
    title: "Stockage des matières premières",
    description:
      "Conserver les matières premières dans des conditions appropriées avant leur utilisation. Cela garantit leur qualité, leur intégrité et leur disponibilité pour la production.",
    icon: "/images/1.webp",
  },
  {
    title: "Détourage laser",
    description:
      "Utilisation de la machine de découpe laser AF 4000 E, capable de découper l'acier doux jusqu'à 12 mm et l'inox jusqu'à 6 mm avec une précision exceptionnelle.",
    icon: "/images/2.webp",
  },
  {
    title: "Débitage",
    description:
      "Découpe rapide et précise grâce à une tronçonneuse puissante fonctionnant à 3800 tours/minute, optimisant le temps et les coûts.",
    icon: "/images/3.webp",
  },
  {
    title: "Soudage",
    description:
      "Réalisation de soudures de haute qualité avec des postes TIG et MIG, opérées par des soudeurs qualifiés pour garantir des performances supérieures.",
    icon: "/images/4.webp",
  },
  {
    title: "Pliage",
    description:
      "Utilisation d'une presse plieuse puissante capable de traiter des pièces allant de 1 à 100 mm, avec une plage d'ouverture flexible de 6 à 630 mm.",
    icon: "/images/5.webp",
  },
  {
    title: "Ébavurage et polissage",
    description:
      "Amélioration esthétique et hygiénique grâce à l'ébavurage manuel ou mécanique et au polissage pour obtenir une surface lisse et brillante.",
    icon: "/images/6.webp",
  },
  {
    title: "Emballage",
    description:
      "Protection des produits contre les dommages et les variations environnementales grâce à un emballage soigné et personnalisé.",
    icon: "/images/7.webp",
  },
];

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="section-wrapper text-black">
      <Reveal>
        <>
          <SectionHeader title="Notre&nbsp;Processus" dir="l" />
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="w-full max-w-[90%] mx-auto flex flex-col items-center text-center p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300"
                >
                  <img
                    src={step.icon}
                    alt={step.title}
                    className="w-16 h-16 mb-4"
                  />
                  <h3 className="text-xl font-bold text-[#154a77] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-black leading-relaxed text-justify">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </>
      </Reveal>
    </section>
  );
};

export default ProcessSection;
