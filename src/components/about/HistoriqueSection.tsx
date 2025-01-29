import React from "react";
import { SectionHeader } from "../util/SectionHeader";
import { motion } from "framer-motion";

const historiqueData = [
    {
        year: "2020",
        title: "Fondation",
        description:
            "Fondation de la société AMTI en réponse à la pandémie de COVID-19.",
    },
    {
        year: "2021",
        title: "Développement",
        description:
            "Développement des équipements médicaux innovants et de haute qualité.",
    },
    {
        year: "2022",
        title: "Élargissement",
        description: "Élargissement de sa gamme de produits.",
    },
    {
        year: "2023",
        title: "Investissement",
        description:
            "Investissement dans la recherche pour développer des produits innovants, tels que des lits d&apos;hôpitaux.",
    },
    {
        year: "2024",
        title: "Expansion Nationale",
        description:
            "Expansion à travers tout le territoire marocain avec un fort accroissement des activités.",
    },
    {
        year: "2025",
        title: "Diversification",
        description:
            "Diversification stratégique vers l&apos;industrie ferroviaire et d&apos;autres secteurs industriels.",
    },
];

export const HistoriqueSection: React.FC = () => {
    const timelineItemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (index: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: index * 0.2, // Décalage pour chaque élément
                duration: 0.6,
                ease: "easeOut",
            },
        }),
    };

    return (
        <section id="history" className="section-wrapper text-black">
            <SectionHeader title="Notre&nbsp;Historique" dir="l" />
            <ul className="relative border-l-4 border-[#2591c2] max-w-3xl mx-auto pl-4">
                {historiqueData.map((item, index) => (
                    <motion.li
                        key={index}
                        className="mb-12 ml-4 relative pl-8 flex flex-col md:flex-row items-start md:items-center"
                        custom={index}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={timelineItemVariants}
                    >
                        {/* Circle */}
                        <div className="absolute w-4 h-4 bg-[#2591c2] rounded-full top-0 left-[-10px]"></div>
                        {/* Year */}
                        <div className="md:absolute md:top-0 md:left-[-120px] text-sm text-[#6c6d6d] font-bold mb-2 md:mb-0 md:mr-4">
                            {item.year}
                        </div>
                        {/* Title and Description */}
                        <div>
                            <h3 className="text-lg font-bold text-black">{item.title}</h3>
                            <p className="text-[#6c6d6d] mt-1">{item.description}</p>
                        </div>
                    </motion.li>
                ))}
            </ul>
        </section>
    );
};
