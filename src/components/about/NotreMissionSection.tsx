import React from "react";
import { SectionHeader } from "../util/SectionHeader";
import Reveal from "../util/Reveal";

export const NotreMissionSection: React.FC = () => {
  return (
    <section id="mission" className="section-wrapper text-black">
      <SectionHeader title="Notre&nbsp;Mission" dir="l" />
      <Reveal>
        <div className="max-w-5xl mx-auto">
          <p className="leading-relaxed text-black">
            <span className="font-bold text-[#2591c2]">AMTI</span> se donne pour mission d&apos;aller toujours de l&apos;avant et de renforcer la souveraineté industrielle du Maroc à l&apos;échelle mondiale. Nous nous engageons à faire du Royaume un acteur incontournable de l&apos;industrie, à travers des solutions innovantes et une vision audacieuse.
          </p>
          <p className="mt-3 leading-relaxed text-black">
            Que ce soit dans le secteur médical, où nous garantissons des dispositifs de pointe pour améliorer les infrastructures de santé, ou dans le secteur ferroviaire, où nous apportons des solutions stratégiques, notre ambition est de laisser une empreinte durable. Nous nous efforçons d&apos;élever les standards industriels, en plaçant l&apos;innovation et la qualité au cœur de nos actions.
          </p>
          <p className="mt-3 leading-relaxed text-black">
            À travers notre expertise, notre engagement et nos infrastructures modernes, <span className="font-bold text-[#2591c2]">AMTI</span> aspire à positionner le Maroc comme un leader industriel sur la scène internationale, tout en construisant un avenir marqué par l&apos;indépendance et l&apos;excellence.
          </p>
        </div>
      </Reveal>
    </section>
  );
};
