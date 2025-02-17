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

export const TrainingSection: React.FC = () => {
  return (
    <section id="training" className="section-wrapper text-black">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <SectionHeader title="Formation&nbsp;&&nbsp;Accompagnement" dir="r" />
        <motion.p
          className="leading-relaxed text-black mb-8"
          variants={fadeInVariants}
        >
          Chez <span className="font-bold text-[#2591c2]">AMTI</span>, nous
          croyons que la réussite de nos solutions repose sur une maîtrise
          complète de leur utilisation. C&apos;est pourquoi nous proposons des
          formations personnalisées et un accompagnement continu pour garantir
          une intégration fluide de nos équipements et services dans divers
          environnements industriels.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8">
          {/* Image à gauche */}
          <div className="relative">
            <motion.div className="mb-12" variants={fadeInVariants}>
              <img
                src="/str6.webp"
                alt="Formation chez AMTI"
                className="w-full h-[300px] object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          </div>
          {/* Points-clés à droite */}
          <div className="space-y-4">
            <motion.div variants={fadeInVariants}>
              <h3 className="text-xl font-bold text-[#154a77]">
                Formation des Équipes
              </h3>
            </motion.div>
            <motion.div variants={fadeInVariants}>
              <p className="leading-relaxed text-black">
                Nos formations sur mesure garantissent une prise en main rapide
                et efficace de nos solutions. Elles incluent des démonstrations
                pratiques et des modules adaptés aux besoins spécifiques de
                chaque organisation.
              </p>
            </motion.div>
            <motion.div variants={fadeInVariants}>
              <h3 className="text-xl font-bold text-[#154a77]">
                Intégration des Innovations
              </h3>
            </motion.div>
            <motion.div variants={fadeInVariants}>
              <p className="leading-relaxed text-black">
                Nos programmes d&apos;accompagnement incluent une formation à
                l&apos;utilisation des innovations technologiques intégrées
                dans nos produits. Nous veillons à ce que nos clients tirent
                pleinement parti des fonctionnalités avancées.
              </p>
            </motion.div>
            <motion.div variants={fadeInVariants}>
              <h3 className="text-xl font-bold text-[#154a77]">
                Support Technique et Fonctionnel
              </h3>
            </motion.div>
            <motion.div variants={fadeInVariants}>
              <p className="leading-relaxed text-black">
                Notre équipe d&apos;experts est disponible pour offrir un
                support continu, résoudre les problématiques et garantir une
                utilisation optimale de nos solutions. Votre satisfaction est
                au cœur de notre engagement.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default TrainingSection;
