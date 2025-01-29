import React from "react";
import { SectionHeader } from "../util/SectionHeader";
import Reveal from "../util/Reveal";

export const IntroductionSection: React.FC = () => {
  return (
    <section id="about" className="section-wrapper text-black">
      <SectionHeader title="À&nbsp;Propos" dir="l" />
      <div className="space-y-8">
        <Reveal>
          <p className="leading-relaxed text-black">
            <span className="font-bold text-[#2591c2]">AMTI</span>, ou Alfa Maroc Tech Industrie, est une entreprise industrielle marocaine de référence, fondée en 2020 en réponse à la pandémie de COVID-19. Notre vision va bien au-delà de la simple fabrication : nous innovons pour transformer le paysage industriel local et international.
          </p>
        </Reveal>
        <Reveal>
          <p className="leading-relaxed text-black">
            Forte de ses infrastructures modernes et de son expertise technique, <span className="font-bold text-[#2591c2]">AMTI</span> s’est imposée comme un acteur clé dans la conception et la fabrication de solutions sur mesure pour les secteurs médicaux et industriels. Nos installations intègrent des procédés avancés, garantissant une qualité et une durabilité qui répondent aux exigences les plus strictes.
          </p>
        </Reveal>
        <Reveal>
          <p className="leading-relaxed text-black">
            En 2024, nous intensifions notre développement à l’échelle nationale, visant une présence accrue sur tout le territoire marocain. Mais notre ambition ne s’arrête pas là : en 2025, nous amorçons une diversification stratégique en nous tournant vers le secteur ferroviaire et d’autres industries de pointe, dans une démarche résolument tournée vers l&apos;innovation et l&apos;expansion internationale.
          </p>
        </Reveal>
        <Reveal>
          <p className="leading-relaxed text-black">
            <span className="font-bold text-[#2591c2]">AMTI</span> ne se contente pas de produire : nous façonnons l&apos;avenir de l&apos;industrie avec passion et expertise. Que ce soit dans la conception, la maintenance ou le développement de nouvelles solutions, notre engagement reste le même : repousser les limites de l&apos;excellence et inspirer la confiance de nos partenaires et clients, au Maroc et au-delà.
          </p>
        </Reveal>
      </div>
    </section>
  );
};
