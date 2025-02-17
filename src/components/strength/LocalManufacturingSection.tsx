import React from "react";
import { SectionHeader } from "../util/SectionHeader";
import { motion } from "framer-motion";

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.4 } },
};

export const LocalManufacturingSection: React.FC = () => {
  return (
    <section id="local-manufacturing" className="section-wrapper text-black">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        {/* Section Header */}
        <SectionHeader title="Souveraineté&nbsp;Marocaine" dir="l" />

        {/* Introduction */}
        <motion.p
          className="leading-relaxed text-black mb-8"
          variants={fadeInVariants}
        >
          <span className="font-bold text-[#2591c2]">AMTI </span>
          s&apos;engage à promouvoir la souveraineté industrielle marocaine grâce à une fabrication
          locale de qualité. En combinant technologies de pointe et savoir-faire local, notre mission
          est de contribuer significativement à l&apos;économie nationale tout en répondant aux besoins
          spécifiques de différents secteurs. Chaque étape de notre production reflète notre détermination
          à offrir des solutions fiables et adaptées.
        </motion.p>

        {/* Contenu principal */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8">
          {/* Texte */}
          <div className="space-y-4">
            <motion.div variants={fadeInVariants}>
              <h3 className="text-xl font-bold text-[#154a77]">Impact Économique</h3>
            </motion.div>
            <motion.p
              className="leading-relaxed text-black"
              variants={fadeInVariants}
            >
              En favorisant la production locale, <span className="font-bold text-[#2591c2]">AMTI</span>{" "}
              crée des opportunités d&apos;emploi et stimule le développement économique du Maroc. Nos
              produits, conçus pour le marché national tout en respectant les normes internationales,
              jouent un rôle clé dans le soutien des infrastructures locales et des initiatives
              stratégiques.
            </motion.p>

            <motion.div variants={fadeInVariants}>
              <h3 className="text-xl font-bold text-[#154a77]">Qualité et Fiabilité</h3>
            </motion.div>
            <motion.p
              className="leading-relaxed text-black"
              variants={fadeInVariants}
            >
              Chaque produit issu de nos installations fait l&apos;objet de contrôles rigoureux pour garantir
              une qualité supérieure. Grâce à nos technologies avancées et à notre expertise industrielle,
              nous proposons des solutions durables qui répondent aux attentes des professionnels, tout
              en renforçant la souveraineté industrielle marocaine.
            </motion.p>
          </div>

          {/* Image */}
          <motion.div
            className="relative"
            variants={fadeInVariants}
          >
            <div className="mb-12">
              <img
                src="/str2.webp"
                alt="Made in Morocco"
                className="w-full h-[300px] object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default LocalManufacturingSection;
