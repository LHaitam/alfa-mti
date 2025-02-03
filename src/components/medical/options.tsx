import { MotionConfig, motion } from "framer-motion";

const Testimonial = ({
  imgSrc,
  name,
  title,
  company,
  content,
}: {
  imgSrc: string;
  name: string;
  title: string;
  company: string;
  content: string;
}) => (
  <MotionConfig
    transition={{
      duration: 0.2,
      ease: "easeInOut",
    }}
  >
    <motion.div
      initial={{
        y: 0,
      }}
      animate={{
        y: -8,
      }}
      exit={{
        y: 0,
      }}
      className="w-full overflow-hidden rounded-lg border-2 border-[#2591c2] bg-white p-8 md:p-12"
    >
      <div className="mb-6 flex items-center gap-6">
        <div className="rounded-lg bg-[#154a77]">
          <motion.img
            initial={{
              rotate: "0deg",
              opacity: 0,
            }}
            animate={{
              rotate: "3deg",
              opacity: 1,
            }}
            exit={{
              rotate: "0deg",
              opacity: 0,
            }}
            src={imgSrc}
            alt="product"
            className="size-24 rounded-lg border-2 border-[#154a77] bg-[#2591c2]"
          />
        </div>
        <motion.div
          initial={{
            y: 12,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          exit={{
            y: -12,
            opacity: 0,
          }}
        >
          <span className="mb-1.5 block text-xl font-medium text-[#154a77]">
            {name.toUpperCase()}
          </span>
          <span className="text-zinc-600">
            {title} – <span className="text-[#2591c2]">{company}</span>
          </span>
        </motion.div>
      </div>
      <motion.p
        initial={{
          y: 12,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        exit={{
          y: -12,
          opacity: 0,
        }}
        className=" leading-relaxed text-black"
      >
        {content} <br />
        <span className="text-[#2591c2] font-bold">
          Pour plus de détails sur nos produits, consultez notre catalogue.
        </span>
      </motion.p>
    </motion.div>
  </MotionConfig>
);

export const OPTIONS = [
  {
    title: "Chariots",
    Content: () => (
      <Testimonial
        imgSrc="/images/products/chariot.png"
        name="CHARIOTS"
        title="Ergonomiques et durables"
        company="AMTI"
        content="Découvrez nos chariots médicaux ergonomiques conçus pour optimiser le confort des professionnels de santé et répondre aux besoins logistiques des établissements."
      />
    ),
  },
  {
    title: "Tables",
    Content: () => (
      <Testimonial
        imgSrc="/images/products/ta-04.png"
        name="TABLES"
        title="Adaptables et robustes"
        company="AMTI"
        content="Nos tables opératoires et à instruments offrent robustesse et polyvalence pour des opérations médicales de précision."
      />
    ),
  },
  {
    title: "Potences",
    Content: () => (
      <Testimonial
        imgSrc="/images/products/potence.png"
        name="POTENCES"
        title="Fiables et mobiles"
        company="AMTI"
        content="Des potences mobiles ou fixes conçues pour une flexibilité maximale dans la prise en charge des patients."
      />
    ),
  },
  {
    title: "Supports",
    Content: () => (
      <Testimonial
        imgSrc="/images/products/support.png"
        name="SUPPORTS"
        title="Polyvalents et pratiques"
        company="AMTI"
        content="Supports blouse plombée, supports mobiles et bien plus : des solutions adaptées à chaque besoin médical ou industriel."
      />
    ),
  },
  {
    title: "Rayonnages",
    Content: () => (
      <Testimonial
        imgSrc="/images/products/rayonnage.png"
        name="RAYONNAGES"
        title="Optimisation d'espace"
        company="AMTI"
        content="Rayonnages en inox robustes pour une organisation optimale dans les environnements médicaux et industriels."
      />
    ),
  },
  {
    title: "Lits Médicaux",
    Content: () => (
      <Testimonial
        imgSrc="/images/products/lit.png"
        name="LITS MÉDICAUX"
        title="Confort et innovation"
        company="AMTI"
        content="Lits médicalisés alliant ergonomie, confort et durabilité pour garantir le bien-être des patients."
      />
    ),
  },
  {
    title: "Tabourets",
    Content: () => (
      <Testimonial
        imgSrc="/images/products/tabouret.png"
        name="TABOURETS"
        title="Pratiques et ergonomiques"
        company="AMTI"
        content="Tabourets avec ou sans dossier, offrant confort et mobilité pour le personnel soignant."
      />
    ),
  },
  {
    title: "Brancards",
    Content: () => (
      <Testimonial
        imgSrc="/images/products/brancard.png"
        name="BRANCARDS"
        title="Fiabilité et mobilité"
        company="AMTI"
        content="Brancards réglables pour une prise en charge optimale des patients en milieu médical."
      />
    ),
  },
  {
    title: "Paravents",
    Content: () => (
      <Testimonial
        imgSrc="/images/products/paravent.png"
        name="PARAVENTS"
        title="Discrétion et mobilité"
        company="AMTI"
        content="Paravents télescopiques et mobiles offrant confidentialité et flexibilité."
      />
    ),
  },
];
