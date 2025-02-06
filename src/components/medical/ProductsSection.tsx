import React, { useState } from "react";
import { SectionHeader } from "../util/SectionHeader";
import Reveal from "../util/Reveal";
import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";

const products = [
  { name: "Chariots", image: "/images/products/chariot.png", link: "#" },
  { name: "Tables", image: "/images/products/TA-04.png", link: "#" },
  { name: "Potences", image: "/images/products/potence.png", link: "#" }, // ✅ Ajouté ici
  { name: "Supports", image: "/images/products/support.png", link: "#" },
  { name: "Rayonnages", image: "/images/products/rayonnage.png", link: "#" },
  { name: "Lits Médicaux", image: "/images/products/lit.png", link: "#" },
  { name: "Tabourets", image: "/images/products/tabouret.png", link: "#" },
  { name: "Brancards", image: "/images/products/brancard.png", link: "#" },
  { name: "Paravents", image: "/images/products/paravent.png", link: "#" },
];


export const ProductsSection = () => {
  return (
    <section id="products" className="section-wrapper text-black">
      {/* Titre */}
      <SectionHeader title="Nos&nbsp;Produits" dir="r" />

      {/* Grille des produits */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {products.map((product, index) => (
            <a
              key={index}
              href={product.link}
              className="relative group cursor-pointer block overflow-hidden rounded-lg"
            >
              {/* Image avec effet zoom */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover transform transition duration-300 group-hover:scale-105"
              />

              {/* Overlay avec nom du produit */}
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-lg group-hover:bg-opacity-60 transition duration-300">
                <span className="text-white text-lg font-bold">{product.name}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
      <Reveal>
        <div className="flex items-center mt-8 gap-6">
          <div className="flex items-center gap-4 text-sm text-[#2591c2]">
            <Link href="/products/medical">En savoir plus </Link>
            <AiOutlineArrowRight />
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default ProductsSection;
