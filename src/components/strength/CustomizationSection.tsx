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

export const CustomizationSection: React.FC = () => {
  return (
    <section id="customization" className="section-wrapper text-black">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <SectionHeader title="Personnalisation&nbsp;&&nbsp;Adaptabilité" dir="r" />
        <motion.p
          className="leading-relaxed text-black mb-8"
          variants={fadeInVariants}
        >
          <span className="font-bold text-[#2591c2]">AMTI</span> se distingue par
          sa capacité à offrir des solutions personnalisées adaptées aux besoins
          spécifiques de ses clients. En collaboration avec nos partenaires, nous
          développons des équipements sur mesure pour répondre aux exigences
          techniques et opérationnelles de différents secteurs industriels.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8">
          {/* Image à gauche */}
          <div className="relative">
            <motion.div className="mb-12" variants={fadeInVariants}>
              <img
                src="/str4.jpg"
                alt="Personnalisation chez AMTI"
                className="w-full h-[300px] object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          </div>
          {/* Points clés à droite */}
          <div className="space-y-4">
            <motion.div variants={fadeInVariants}>
              <h3 className="text-xl font-bold text-[#154a77]">
                Conception sur mesure
              </h3>
            </motion.div>
            <motion.div variants={fadeInVariants}>
              <p className="leading-relaxed text-black">
                Que ce soit pour des équipements médicaux, des outils industriels,
                ou des supports techniques, nos produits sont personnalisés pour
                répondre à vos exigences spécifiques. Nous adaptons nos solutions
                à vos besoins uniques.
              </p>
            </motion.div>
            <motion.div variants={fadeInVariants}>
              <h3 className="text-xl font-bold text-[#154a77]">
                Flexibilité et Réactivité
              </h3>
            </motion.div>
            <motion.div variants={fadeInVariants}>
              <p className="leading-relaxed text-black">
                Notre approche agile nous permet de travailler en étroite collaboration
                avec nos clients, garantissant des solutions rapides, fiables et sur
                mesure. Nous veillons à respecter les délais tout en assurant une qualité
                exceptionnelle.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CustomizationSection;
