import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-900 text-zinc-200 py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
          {/* Logo and Contact */}
          <div className="space-y-4 text-center md:text-left md:w-1/3">
            <img
              src="/logo.webp"
              alt="AMTI Logo"
              className="h-20 mx-auto md:mx-0"
            />
            <p className="text-sm font-bold">
              Tel :{" "}
              <Link
                href="tel:+212522539011"
                className="text-zinc-200 font-bold hover:text-[#2591c2] transition"
              >
                +212 5 20 99 87 16
              </Link>{" "}
              /{" "}
              <Link
                href="tel:+212661311229"
                className="text-zinc-200 font-bold hover:text-[#2591c2] transition"
              >
                +212 6 61 31 12 29
              </Link>
            </p>
            <p className="text-sm font-bold ">
              E-mail :{" "}
              <Link
                href="mailto:i.zouhir@alfa-mti.ma"
                className="text-zinc-200 font-bold hover:text-[#2591c2] transition"
              >
                i.zouhir@alfa-mti.ma
              </Link>
            </p>
            <p className="text-sm font-bold">
              Adresse : <a href="https://maps.app.goo.gl/iyue4eZtEJ75BaxT6" target="_blank">
    Z.I. Bouzanine, R.N. 9 km 21 NOUASSEUR
  </a>
            </p>
          </div>

          {/* Links Section */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-8 text-sm text-center md:text-left">
            <div>
              <h4 className="font-bold text-lg mb-3 text-zinc-200">EN SAVOIR PLUS</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-[#2591c2] transition font-bold text-zinc-200"
                  >
                    Qui sommes-nous
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sectors"
                    className="hover:text-[#2591c2] transition font-bold text-zinc-200"
                  >
                    Nos secteurs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/strengths"
                    className="hover:text-[#2591c2] transition font-bold text-zinc-200"
                  >
                    Nos Forces
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sectors/medical"
                    className="hover:text-[#2591c2] transition font-bold text-zinc-200"
                  >
                    Secteur Médical
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sectors/railway"
                    className="hover:text-[#2591c2] transition font-bold text-zinc-200"
                  >
                    Secteur Férroviaire
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products/medical"
                    className="hover:text-[#2591c2] transition font-bold text-zinc-200"
                  >
                    Produits Médicaux
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products/railway"
                    className="hover:text-[#2591c2] transition font-bold text-zinc-200"
                  >
                    Produits Férroviaires
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-3 text-zinc-200">NOUS REJOINDRE</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-[#2591c2] transition font-bold text-zinc-200"
                  >
                    Formulaire de contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-3 text-zinc-200">
                INFORMATIONS LÉGALES
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="hover:text-[#2591c2] transition font-bold text-zinc-200"
                  >
                    Conditions générales
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 text-center text-sm">
          <p className="text-zinc-200">
            © {new Date().getFullYear()}{" "}
            <span className="bg-gradient-to-r from-[#2591c2] via-[#196587] to-[#003D79] bg-clip-text text-transparent font-bold">
              AMTI
            </span>
            . Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
