import React from "react";
import { SectionHeader } from "../util/SectionHeader";
import { motion } from "framer-motion";

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.3 } },
};

export const InnovationSection: React.FC = () => {
  return (
    <section id="innovation" className="section-wrapper text-black">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <SectionHeader title="Innovation" dir="r" />
        <motion.p
          className="leading-relaxed text-black mb-8"
          variants={fadeInVariants}
        >
          <span className="font-bold text-[#2591c2]">AMTI</span> place
          l&apos;innovation au centre de ses activités industrielles. En
          investissant dans la recherche et le développement, nous concevons
          des solutions innovantes qui répondent aux besoins actuels et
          anticipent les défis de demain, tout en soutenant les ambitions
          nationales et internationales dans divers secteurs.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8">
          {/* Image à gauche */}
          <motion.div
            className="relative"
            variants={fadeInVariants}
          >
            <div className="mb-12">
              <img
                src="/str.webp"
                alt="Innovation chez AMTI"
                className="w-full h-[300px] object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
          </motion.div>

          {/* Texte à droite */}
          <div className="space-y-4">
            <motion.div variants={fadeInVariants}>
              <h3 className="text-xl font-bold text-[#154a77]">
                Solutions Innovantes
              </h3>
            </motion.div>
            <motion.ul
              className="list-disc pl-5 leading-relaxed text-black space-y-2"
              variants={fadeInVariants}
            >
              <li>
                <span className="font-bold text-[#2591c2]">Produits ergonomiques :</span>{" "}
                Conçus pour répondre aux besoins des professionnels, tout en
                améliorant leur efficacité et leur confort.
              </li>
              <li>
                <span className="font-bold text-[#2591c2]">Matériaux de haute qualité :</span>{" "}
                Incorporant des technologies modernes pour garantir des performances durables.
              </li>
              <li>
                <span className="font-bold text-[#2591c2]">Processus de production avancés :</span>{" "}
                Intégration de méthodes et de technologies innovantes pour répondre
                aux standards les plus exigeants.
              </li>
            </motion.ul>

            <motion.div variants={fadeInVariants}>
              <h3 className="text-xl font-bold text-[#154a77]">
                Recherche et Développement
              </h3>
            </motion.div>
            <motion.p
              className="leading-relaxed text-black"
              variants={fadeInVariants}
            >
              AMTI investit continuellement dans des technologies émergentes et
              des procédés industriels avancés pour repousser les limites de
              l&apos;excellence. Nos équipes s&apos;efforcent de développer des
              solutions polyvalentes et adaptées, renforçant ainsi notre impact
              industriel à l&apos;échelle nationale et mondiale.
            </motion.p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default InnovationSection;
