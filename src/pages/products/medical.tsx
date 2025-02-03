import React, { useEffect } from 'react';
import { SectionHeader } from "@/components/util/SectionHeader";
import FlyoutNav from "../../components/nav/Header";
import Hero from "@/components/hero/Hero"; // Importation de Hero
import Footer from "@/components/footer/Footer"; // Importation du Footer

const products = [
    {
        category: "CHARIOTS :", items: [
            { name: "CH-02 Chariot Guéridon", image: "/images/products/CH-02.png" },
            { name: "CH-05 Chariot de Soins", image: "/images/products/CH-05.png" },
            { name: "CH-06 Chariot à Bocal d'Aspiration", image: "/images/products/CH-06.png" },
            { name: "CH-08 Chariot à Bouteille d'Oxygène", image: "/images/products/CH-08.png" },
            { name: "CH-09 Chariot d'Habillage", image: "/images/products/CH-09.png" },
            { name: "CH-10 Chariot Pèse-Bébé", image: "/images/products/CH-10.png" },
            { name: "CH-13 Chariot de Manutention", image: "/images/products/CH-13.png" },
            { name: "CH-14 Chariot à Linge", image: "/images/products/CH-14.png" },
            { name: "CH-12 Chariot Défibrillateur", image: "/images/products/CH-12.png" },
            { name: "CH-28 Chariot Toilette", image: "/images/products/CH-28.png" },
        ]
    },
    {
        category: "TABLES :", items: [
            { name: "TA-01 Table à Instruments", image: "/images/products/TA-01.png" },
            { name: "TA-04 Table Pont", image: "/images/products/TA-04.png" },
            { name: "TA-02 Table Paillasse", image: "/images/products/TA-02.png" },
            { name: "TA-17 Table Mayo Mobile", image: "/images/products/TA-17.png" },
            { name: "TA-18 Table Mayo Fixe", image: "/images/products/TA-18.png" },
            { name: "TA-22 Table avec Tiroir", image: "/images/products/TA-22.png" },
            { name: "TA-21 Table de Chevet", image: "/images/products/TA-21.png" },
            { name: "TA-50 Table à Manger", image: "/images/products/TA-50.png" },
        ]
    },
    {
        category: "POTENCES :", items: [
            { name: "PO-01 Potence Mobile Standard", image: "/images/products/PO-01.png" },
            { name: "PO-04 Potence Mobile avec Piège à Eau", image: "/images/products/PO-04.png" },
            { name: "PO-02 Potence Mobile avec Plateaux", image: "/images/products/PO-02.png" },
        ]
    },
    {
        category: "ESCABEAUX :", items: [
            { name: "ES-02 Escabeau à Deux Marches", image: "/images/products/ES-02.png" },
        ]
    },
    {
        category: "TABOURETS :", items: [
            { name: "TB-01 Tabouret avec Dossier", image: "/images/products/TB-01.png" },
            { name: "TB-02 Tabouret sans Dossier", image: "/images/products/TB-02.png" },
        ]
    },
    {
        category: "PARAVENTS :", items: [
            { name: "PT-01 Paravent Télescopique Mural", image: "/images/products/PT-01.png" },
            { name: "PT-02 Paravent Volet", image: "/images/products/PT-02.png" },
        ]
    },
    {
        category: "SUPPORTS :", items: [
            { name: "ST-02 Support Mobile pour Tablette", image: "/images/products/ST-02.png" },
            { name: "ST-03 Support Mobile pour Écran avec Panier Inox", image: "/images/products/ST-03.png" },
            { name: "SB-02 Support de Blouse Plombée Fixe en Inox", image: "/images/products/SB-02.png" },
            { name: "SB-01 Support de Blouse Plombée Mobile en Inox", image: "/images/products/SB-01.png" },
            { name: "SM-01 Support pour Masques en Inox", image: "/images/products/SM-01.png" },
            { name: "SS-01 Support pour Sabots", image: "/images/products/SS-01.png" },
            { name: "SP-01 Support pour Sac Poubelle", image: "/images/products/SP-01.png" },
        ]
    },
    {
        category: "RAYONNAGES :", items: [
            { name: "BQ-01 Baquet Roulant", image: "/images/products/BQ-01.png" },
        ]
    },
    {
        category: "ACCESSOIRES DE TABLE OPÉRATOIRE :", items: [
            { name: "CC-01 Cadre Compas en Inox", image: "/images/products/CC-01.png" },
            { name: "TO-01 Autocurseur", image: "/images/products/TO-01.png" },
            { name: "TO-03 Anneau de Tête", image: "/images/products/TO-03.png" },
            { name: "TO-04 Coussin Semi-Circulaire", image: "/images/products/TO-04.png" },
            { name: "TO-05 Plateau d'Instruments Démontable", image: "/images/products/TO-05.png" },
            { name: "TO-07 Rouleau Cale-Jambes", image: "/images/products/TO-07.png" },
            { name: "TO-06 Arceau Flexible", image: "/images/products/TO-06.png" },
        ]
    },
    {
        category: "BRANCARDS :", items: [
            { name: "BR-02 Brancard Réglable pour Chambre Mortuaire", image: "/images/products/BR-02.png" },
            { name: "BR-01 Brancard de Transport", image: "/images/products/BR-01.png" },
        ]
    },
    {
        category: "LITS :", items: [
            { name: "Fauteuil Électrique", image: "/images/products/fauteuil.png" },
            { name: "Divan", image: "/images/products/divan.png" },
        ]
    },
];

const MedicalSection = () => {
    useEffect(() => {
        document.title = "Nos Produits Médicaux"; // Set the title of the page
    }, [])
    return (
        <div className="grid bg-white min-h-screen overflow-x-hidden">
            <FlyoutNav />
            <main className="max-w-screen overflow-hidden">
                <div className="space-y-32 pb-24">
                    {/* Section Hero */}
                    <div className="w-full max-w-full min-h-screen z-10 bg-black bg-opacity-10">
                        <Hero
                            title="Nos Produits Médicaux"
                            bgVideo="/bg.mp4"
                            overlayOpacity="bg-black/60"
                        />
                    </div>
                    <div className="container mx-auto max-w-5xl px-4 md:px-8 space-y-32 overflow-hidden">
                    {/* Section des Produits Médicaux */}
                    <section id="medical-products" className="section-wrapper text-black">
                        <p className="text-center my-4 text-lg">
                            Découvrez notre large gamme de produits médicaux, adaptés à vos besoins pour les cabinets médicaux, les hôpitaux et autres établissements de santé.
                        </p>
                        <div className="container mx-auto px-4">
                            {products.map((category, categoryIndex) => (
                                <div key={categoryIndex} className="mt-10">
                                    <h2 className="text-2xl font-bold mb-6">{category.category}</h2>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                        {category.items.map((item, itemIndex) => (
                                            <div key={itemIndex} className="relative group cursor-pointer">
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="w-full h-48 object-cover rounded-lg transform transition duration-300 group-hover:scale-105"
                                                />
                                                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-lg opacity-100 group-hover:bg-opacity-60 transition duration-300">
                                                    <span className="text-white text-lg font-bold text-center">{item.name}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Footer Section */}
                </div>
                </div>
                <Footer />
            </main>
        </div>
    );
};

export default MedicalSection;
