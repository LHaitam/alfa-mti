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

export const GlobalVisionSection: React.FC = () => {
  return (
    <section id="global-vision" className="section-wrapper text-black">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <SectionHeader title="Une&nbsp;Vision&nbsp;Internationale" dir="l" />
        <motion.p
          className="leading-relaxed text-black mb-8"
          variants={fadeInVariants}
        >
          <span className="font-bold text-[#2591c2]">AMTI</span> ne se limite
          pas au marché national. Avec une expertise reconnue et des solutions
          adaptées, nous visons à renforcer notre impact à l&apos;échelle
          internationale. L&apos;Afrique, grâce à notre proximité culturelle et
          géographique, demeure une priorité, tout en explorant des opportunités
          dans d&apos;autres régions stratégiques du monde.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8">
          {/* Points-clés à gauche */}
          <div className="space-y-4">
            <motion.div variants={fadeInVariants}>
              <h3 className="text-xl font-bold text-[#154a77]">
                Une Priorité : l&apos;Afrique
              </h3>
            </motion.div>
            <motion.div variants={fadeInVariants}>
              <p className="leading-relaxed text-black">
                Grâce à notre proximité culturelle et géographique, nous
                collaborons étroitement avec les organisations et institutions
                africaines. Nos solutions innovantes visent à répondre aux
                besoins spécifiques des infrastructures locales, en soutenant
                des secteurs clés comme la santé, l&apos;industrie et la logistique.
              </p>
            </motion.div>
            <motion.div variants={fadeInVariants}>
              <h3 className="text-xl font-bold text-[#154a77]">
                Une Ambition Globale
              </h3>
            </motion.div>
            <motion.div variants={fadeInVariants}>
              <p className="leading-relaxed text-black">
                Notre vision dépasse les frontières. En collaborant avec des
                partenaires internationaux, nous aspirons à jouer un rôle clé
                dans le développement des infrastructures mondiales, en
                proposant des solutions adaptées aux besoins variés des
                industries et des communautés à travers le monde.
              </p>
            </motion.div>
          </div>
          {/* Image à droite */}
          <div className="relative">
            <motion.div className="mb-12" variants={fadeInVariants}>
              <img
                src="/str7.jpg"
                alt="Vision internationale d'AMTI"
                className="w-full h-[300px] object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
              <p className="text-sm text-gray-600 mt-2 text-center">
                Illustration : Engagement global d&apos;AMTI.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default GlobalVisionSection;
