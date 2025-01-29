import React, { useState } from "react";
import { SectionHeader } from "../util/SectionHeader";
import { Copy } from "./Copy";
import { Users } from "./Users";

export const ProductsSection = () => {
  const [selected, setSelected] = useState<number>(0); // État de l'option sélectionnée

  return (
    <section id="products" className="section-wrapper text-black">
      {/* Titre et introduction */}
      <SectionHeader title="Nos&nbsp;Produits" dir="r" />
      <div className="relative mx-auto max-w-6xl flex flex-col items-center gap-8 px-4 md:flex-row md:items-start">
        {/* Colonne gauche */}
        <div className="flex-1">
          <Copy selected={selected} setSelected={setSelected} />
        </div>
        {/* Colonne droite */}
        <div className="flex-1">
          <Users selected={selected} />
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
