import { AiOutlineArrowRight } from "react-icons/ai";
import { SectionHeader } from "../util/SectionHeader";
import Reveal from "../util/Reveal";
import { Strengths } from "./strengths";
import Link from "next/link";

export const Strength = () => {
  return (
    <section id="strengths" className="section-wrapper text-black">
      <SectionHeader title="Nos&nbsp;Forces" dir="r" />
      <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8">
        <div className="space-y-4">
          <Reveal>
            <p className="leading-relaxed text-black">
              <span className="font-bold text-[#2591c2]">AMTI </span>
              s&apos;est démarquée depuis sa création par sa capacité à innover et à fournir des solutions
              fiables pour le secteur médical. Nos forces ne résident pas seulement dans
              nos produits, mais aussi dans notre vision et notre engagement envers l&apos;excellence.
            </p>
          </Reveal>
          <Reveal>
            <p className="leading-relaxed text-black">
              Nos processus de fabrication utilisent des technologies de pointe,
              garantissant des équipements durables et conformes aux normes internationales.
              Mais ce n&apos;est qu&apos;une partie de ce qui fait d&apos;AMTI un leader de confiance.
            </p>
          </Reveal>
          <Reveal>
            <p className="leading-relaxed text-black">
              Découvrez comment l&apos;innovation, la qualité, la production locale et
              notre engagement envers nos clients définissent nos forces. Curieux d&apos;en savoir plus ?
            </p>
          </Reveal>
          <Reveal>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4 text-sm text-[#2591c2]">
                <Link href="/strengths">En savoir plus </Link>
                <AiOutlineArrowRight />
              </div>
            </div>
          </Reveal>
        </div>
        <Strengths />
      </div>
    </section>
  );
};
