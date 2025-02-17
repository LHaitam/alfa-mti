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

export const SustainabilitySection: React.FC = () => {
  return (
    <section id="sustainability" className="section-wrapper text-black">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <SectionHeader title="Développement&nbsp;Durable" dir="l" />
        <motion.p
          className="leading-relaxed text-black mb-8"
          variants={fadeInVariants}
        >
          Chez <span className="font-bold text-[#2591c2]">AMTI</span>, nous
          intégrons le développement durable dans chaque aspect de nos
          activités. En combinant innovation, responsabilité environnementale et
          impact social, nous construisons un avenir plus respectueux pour les
          générations futures.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8">
          {/* Points clés à gauche */}
          <div className="space-y-6">
            <motion.div variants={fadeInVariants}>
              <h3 className="text-xl font-bold text-[#154a77]">
                Matériaux Écologiques
              </h3>
            </motion.div>
            <motion.div variants={fadeInVariants}>
              <p className="leading-relaxed text-black">
                Nous favorisons l&apos;utilisation de matériaux recyclables, tels que
                l&apos;inox, pour garantir une production durable tout en
                réduisant notre impact environnemental.
              </p>
            </motion.div>
            <motion.div variants={fadeInVariants}>
              <h3 className="text-xl font-bold text-[#154a77]">
                Processus de Fabrication Responsable
              </h3>
            </motion.div>
            <motion.div variants={fadeInVariants}>
              <p className="leading-relaxed text-black">
                Nos installations sont conçues pour optimiser l&apos;utilisation
                des ressources, réduire les émissions de carbone, et minimiser
                les déchets. Tout cela tout en maintenant des normes de qualité
                élevées et constantes.
              </p>
            </motion.div>
            <motion.div variants={fadeInVariants}>
              <h3 className="text-xl font-bold text-[#154a77]">
                Impact Social Positif
              </h3>
            </motion.div>
            <motion.div variants={fadeInVariants}>
              <p className="leading-relaxed text-black">
                En plus de notre engagement environnemental, nous nous engageons
                à créer des opportunités d&apos;emploi local et à soutenir les
                initiatives communautaires qui favorisent le bien-être social et
                économique.
              </p>
            </motion.div>
          </div>
          {/* Image à droite */}
          <div className="relative">
            <motion.div className="mb-12" variants={fadeInVariants}>
              <img
                src="/str5.webp"
                alt="Développement durable chez AMTI"
                className="w-full h-[300px] object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default SustainabilitySection;
