import React from "react";
import { SectionHeader } from "../util/SectionHeader";
import Reveal from "../util/Reveal";

const services = [
  {
    title: "Fabrication sur mesure",
    description:
      "Spécialistes de la conception et fabrication d’équipements médicaux, nous créons des solutions sur mesure adaptées aux besoins spécifiques des établissements de santé.",
    icon: "/images/fabrication.png",
  },
  {
    title: "Conception personnalisée",
    description:
      "Collaborant étroitement avec nos partenaires, nous concevons des dispositifs uniques répondant aux exigences techniques et opérationnelles les plus strictes.",
    icon: "/images/design.png",
  },
  {
    title: "Maintenance et réparation",
    description:
      "Nous garantissons la longévité de vos équipements grâce à une maintenance préventive et des réparations rapides, incluant le remplacement des pièces, le soudage et le polissage.",
    icon: "/images/maintenance.png",
  },
  {
    title: "Accompagnement technique",
    description:
      "Nous vous assistons depuis l'installation des équipements jusqu'à leur mise en service, tout en formant vos équipes pour une utilisation optimale.",
    icon: "/images/support.png",
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="section-wrapper text-black">
      <Reveal>
        <div>
          <SectionHeader title="Nos&nbsp;Services" dir="r" />
          {/* Petite description */}
          <p className="mt-4 mb-8 text-black leading-relaxed">
            <span className="font-bold text-[#2591c2]">AMTI</span> propose une
            gamme complète de services industriels, alliant innovation et
            expertise. Nous nous engageons à fournir des solutions sur mesure et
            un accompagnement à chaque étape pour répondre aux besoins de nos
            clients.
          </p>
          {/* Liste des services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 bg-gray-100 rounded-lg shadow-lg hover:bg-[#f5f5f5] hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-16 h-16 mb-4"
                />
                <h3 className="text-xl font-bold text-[#154a77] mb-2">
                  {service.title}
                </h3>
                <p className="leading-relaxed text-black">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default ServicesSection;
