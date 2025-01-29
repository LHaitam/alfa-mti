import React, { Dispatch, SetStateAction, useState } from "react";
import { FiMenu, FiArrowRight, FiX, FiChevronDown } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import {
  useMotionValueEvent,
  AnimatePresence,
  useScroll,
  motion,
} from "framer-motion";
import useMeasure from "react-use-measure";
import Link from "next/link";

const Example = () => {
  return (
    <>
      <FlyoutNav />
    </>
  );
};

const FlyoutNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 250 ? true : false);
  });

  return (
    <nav
      className={`fixed top-0 z-50 w-full px-6 text-white 
      transition-all duration-300 ease-out lg:px-12
      ${scrolled
          ? "bg-neutral-950 py-3 shadow-xl"
          : "bg-neutral-950/0 py-6 shadow-none"
        }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Logo />
        <div className="hidden gap-6 lg:flex">
          <Links />
          <CTAs />
        </div>
        <MobileMenu />
      </div>
    </nav>
  );
};

const Logo = ({ color = "white", size = 100 }: { color?: string; size?: number }) => {
  return (
    <div className="flex items-center gap-2">
      <img
        src="/logo.png"
        alt="Logo"
        className="block"
        style={{
          width: `${size}px`,
          fill: color,
        }}
      />
    </div>
  );
};



const Links = () => {
  return (
    <div className="flex items-center gap-6">
      {LINKS.map((l) => (
        <NavLink key={l.text} href={l.href} FlyoutContent={l.component}>
          {l.text}
        </NavLink>
      ))}
    </div>
  );
};

const NavLink = ({
  children,
  href,
  FlyoutContent,
}: {
  children: React.ReactNode;
  href: string;
  FlyoutContent?: React.ElementType;
}) => {
  const [open, setOpen] = useState(false);

  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative h-fit w-fit"
    >
      <a href={href} className="relative">
        {children}
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-[#007BFF] transition-transform duration-300 ease-out"
        />
      </a>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-12 bg-white text-black"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const CTAs = () => {
  return (
    <div className="flex items-center gap-3">
      <button onClick={() => window.open("/catalogue.pdf")} className="flex items-center gap-2 rounded-lg border-2 border-white px-4 py-2 font-semibold text-white transition-colors hover:bg-white hover:text-black">
        <span>Catalogue</span>
      </button>
    </div>
  );
};

const AboutUsContent = () => {
  return (
    <div className="grid h-fit w-full grid-cols-12 shadow-xl lg:h-72 lg:w-[600px] lg:shadow-none xl:w-[750px]">
      <div className="col-span-12 flex flex-col justify-between bg-neutral-950 p-6 lg:col-span-4">
        <div>
          <h2 className="mb-2 text-xl font-semibold text-white">À Propos de Nous</h2>
          <p className="mb-6 max-w-xs text-sm text-neutral-400">
            AMTI, entreprise marocaine d'excellence, révolutionne les secteurs médicaux et ferroviaires avec des équipements "Made in Morocco".
          </p>
        </div>
        <Link href="/#about" passHref>
          <a className="flex items-center gap-1 text-xs text-[#007BFF] hover:underline">
            En Savoir Plus <FiArrowRight />
          </a>
        </Link>
      </div>
      <div className="col-span-12 grid grid-cols-2 grid-rows-2 gap-3 bg-white p-6 lg:col-span-8">
        <Link href="/#strengths" passHref>
          <a className="rounded border-2 border-neutral-200 bg-white p-3 transition-colors hover:bg-neutral-100">
            <h3 className="mb-1 font-semibold">Nos Forces</h3>
            <p className="text-xs">
              Découvrez comment notre innovation et expertise redéfinissent les normes de qualité.
            </p>
          </a>
        </Link>
        <Link href="/#sectors" passHref>
          <a className="rounded border-2 border-neutral-200 bg-white p-3 transition-colors hover:bg-neutral-100">
            <h3 className="mb-1 font-semibold">Nos Secteurs D'Activités</h3>
            <p className="text-xs">
              Explorez nos solutions adaptées aux besoins des professionnels de santé.
            </p>
          </a>
        </Link>
      </div>
    </div>
  );
};


const SectorsContent = () => {
  return (
    <div className="w-full bg-white p-6 shadow-none lg:w-[250px] lg:shadow-xl">
      <div className="grid grid-cols-2 lg:grid-cols-1">
        <div className="mb-3 space-y-3 text-lg font-bold py-3">
          <Link href="/sectors/medical" passHref>
            <a className="block text-sm hover:underline">Médical</a>
          </Link>
          <Link href="/sectors/railway" passHref>
            <a className="block text-sm hover:underline">Ferroviaire</a>
          </Link>
        </div>
      </div>
    </div>
  );
};


const MobileMenuLink = ({
  children,
  href,
  FoldContent,
  setMenuOpen,
}: {
  children: React.ReactNode;
  href: string;
  FoldContent?: React.ElementType;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [ref, { height }] = useMeasure();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative text-neutral-950">
      {FoldContent ? (
        <div
          className="flex w-full cursor-pointer items-center justify-between border-b border-neutral-300 py-6 text-start text-2xl font-semibold"
          onClick={() => setOpen((pv) => !pv)}
        >
          <Link href={href}>
            <a onClick={() => setMenuOpen(false)}>{children}</a>
          </Link>
          <motion.div
            animate={{ rotate: open ? "180deg" : "0deg" }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
          >
            <FiChevronDown />
          </motion.div>
        </div>
      ) : (
        <Link href={href}>
          <a
            className="flex w-full cursor-pointer items-center justify-between border-b border-neutral-300 py-6 text-start text-2xl font-semibold"
            onClick={() => setMenuOpen(false)}
          >
            <span>{children}</span>
            <FiArrowRight />
          </a>
        </Link>
      )}
      {FoldContent && (
        <motion.div
          initial={false}
          animate={{
            height: open ? height : "0px",
            marginBottom: open ? "24px" : "0px",
            marginTop: open ? "12px" : "0px",
          }}
          className="overflow-hidden"
        >
          <div ref={ref}>
            <FoldContent />
          </div>
        </motion.div>
      )}
    </div>
  );
};


const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="block lg:hidden">
      <button onClick={() => setOpen(true)} className="block text-3xl">
        <FiMenu />
      </button>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            exit={{ x: "100vw" }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="fixed left-0 top-0 flex h-screen w-full flex-col bg-white"
          >
            <div className="flex items-center justify-between p-6">
              <Logo color="black" />
              <button onClick={() => setOpen(false)}>
                <FiX className="text-3xl text-neutral-950" />
              </button>
            </div>
            <div className="h-screen overflow-y-scroll bg-neutral-100 p-6">
              {LINKS.map((l) => (
                <MobileMenuLink
                  key={l.text}
                  href={l.href}
                  FoldContent={l.component}
                  setMenuOpen={setOpen}
                >
                  {l.text}
                </MobileMenuLink>
              ))}
            </div>
            <div className="flex justify-end bg-neutral-950 p-6">
              <CTAs />
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Example;

const LINKS = [
  {
    text: "Acceuil",
    href: "/",
    component: AboutUsContent,
  },
  {
    text: "À Propos",
    href: "/about",
  },
  {
    text: "Nos Secteurs",
    href: "",
    component: SectorsContent,
  },
  {
    text: "Contact",
    href: "/contact",
  },
];

