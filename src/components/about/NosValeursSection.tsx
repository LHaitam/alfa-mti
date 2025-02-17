import React, { useState } from "react";
import { SectionHeader } from "../util/SectionHeader";
import Reveal from "../util/Reveal";

const valeursData = [
  {
    title: "Engagement envers l'innovation",
    description:
      "AMTI se distingue par son effort constant pour développer des équipements médicaux et industriels innovants, adaptés aux besoins des professionnels et à la souveraineté nationale.",
    icon: "/str.webp",
  },
  {
    title: "Qualité et Fiabilité",
    description:
      "La qualité est au cœur de nos activités, avec des standards élevés tels que 98 % de fiabilité des prestataires et un taux de satisfaction client de 99 %.",
    icon: "/str1.webp",
  },
  {
    title: "Production locale et Souveraineté industrielle",
    description:
      "AMTI valorise la production locale pour renforcer l’économie marocaine et positionner le Royaume comme un leader dans l’industrie mondiale.",
    icon: "/str2.webp",
  },
  {
    title: "Orientation client",
    description:
      "AMTI place les besoins de ses clients au centre de ses priorités, offrant des solutions fiables et adaptées, tout en assurant un taux de conversion des leads en clients de 90 %.",
    icon: "/str3.webp",
  },
];

export const NosValeursSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section id="values" className="section-wrapper text-black">
      <SectionHeader title="Nos&nbsp;Valeurs" dir="l" />
      <Reveal>
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between max-w-6xl mx-auto mt-8 gap-8">
          {/* Partie Gauche */}
          <div className="flex-1 space-y-4">
            <p className="leading-relaxed text-black text-lg">
              <span className="font-bold text-2xl text-[#2591c2]">
                Des valeurs au cœur de notre mission :
              </span>
            </p>
            <p className="leading-relaxed text-black">
              <span className="font-bold text-[#2591c2]">AMTI </span>
              fonde ses actions sur des valeurs fortes, véritables piliers de
              notre engagement. Ces valeurs reflètent notre quête constante
              d&apos;excellence, de qualité et d&apos;innovation, tout en mettant
              en avant la production locale et l&apos;ambition de faire du Maroc un
              acteur majeur de l&apos;industrie mondiale. Notre priorité est
              d&apos;apporter des solutions fiables et adaptées, laissant une
              empreinte durable dans chaque secteur que nous touchons.
            </p>
          </div>

          {/* Partie Droite */}
          <div className="flex-1 grid grid-cols-2 gap-6 relative">
  {valeursData.map((valeur, index) => (
    <div
      key={index}
      className={`relative ${
        index % 2 === 0 ? "md:translate-y-4" : "md:-translate-y-4"
      }`}
    >
      <div className="overflow-hidden rounded-lg shadow-md">
        <img
          src={valeur.icon}
          alt={valeur.title}
          className="object-cover h-48 w-full cursor-pointer transform transition-transform duration-300 hover:scale-105"
          onClick={() => toggleAccordion(index)}
        />
      </div>
      <div
        className={`mt-2 p-4 bg-gray-100 text-black transition-all duration-300 overflow-visible rounded-md ${
          activeIndex === index ? "max-h-auto opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <h3 className="text-lg font-bold text-[#2591c2]">{valeur.title}</h3>
        <p className="text-sm leading-relaxed text-gray-700 mt-2">
          {valeur.description}
        </p>
      </div>
    </div>
  ))}
</div>

        </div>
      </Reveal>
    </section>
  );
};
