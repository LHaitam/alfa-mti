import React from "react";
import { SectionHeader } from "../util/SectionHeader";
import Reveal from "../util/Reveal";
import { AiOutlineArrowDown } from "react-icons/ai";

interface Client {
    name: string;
    entities: string[];
    logo: string;
}

interface Secteur {
    secteur: string;
    clients?: Client[];
    comingSoon?: boolean;
}

const secteursData: Secteur[] = [
    {
        secteur: "Secteur Médical",
        clients: [
            {
                name: "AKDITAL",
                entities: [
                    "Hôpital Privé de Tanger",
                    "Hôpital Privé de Salé",
                    "Clinique Internationale de Mohammedia",
                    "Hôpital privé Casablanca Ain Sebaa",
                    "Clinique du Bien-Être Bouskoura",
                    "Clinique de Spécialités de Safi",
                ],
                logo: "/cli.jpg",
            },
            {
                name: "Cheikh Khalifa",
                entities: ["Hôpital Universitaire International Cheikh Khalifa"],
                logo: "/cli1.jpg",
            },
            {
                name: "Oncologie et Diagnostic du Maroc",
                entities: [
                    "Centre médical international de FES",
                    "Centre régional d'oncologie de Béni Mellal",
                ],
                logo: "/cli2.jpg",
            },
        ],
    },
    {
        secteur: "Secteur Ferroviaire",
        comingSoon: true,
    },
];

export const NosReferencesSection: React.FC = () => {
    return (
        <section id="references" className="section-wrapper text-black">
            <SectionHeader title="Nos&nbsp;Références" dir="l" />
            <Reveal>
                <div className="max-w-6xl mx-auto space-y-12">
                    {/* Description */}
                    <div className="space-y-6">
                        <p className="leading-relaxed text-lg text-black">
                            <span className="font-bold text-lg text-[#2591c2]">
                                Une présence nationale et sectorielle :
                            </span>
                        </p>
                        <p className="leading-relaxed text-black">
                            Depuis sa création, <span className="font-bold text-[#2591c2]">AMTI</span> a collaboré avec des organisations, institutions et entreprises de premier plan dans plusieurs secteurs clés, renforçant ainsi sa position d’acteur incontournable sur le territoire marocain. Grâce à son expertise et à son engagement, AMTI vise également à étendre sa portée à l&apos;échelle internationale.
                        </p>
                    </div>

                    {/* Liste des secteurs */}
                    {secteursData.map((secteurData: Secteur, index: number) => (
                        <div key={index} className="space-y-8">
                            {/* Secteur Title */}
                            <h3 className="text-lg font-bold text-[#2591c2]">
                                {secteurData.secteur}
                            </h3>

                            {/* Clients ou Coming Soon */}
                            {secteurData.comingSoon ? (
                                <p className="text-sm text-gray-700 italic">
                                    Références à venir prochainement...
                                </p>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {secteurData.clients?.map((client: Client, clientIndex: number) => (
                                        <div
                                            key={clientIndex}
                                            className="text-center flex flex-col items-center space-y-4"
                                        >
                                            <div className="relative group">
                                                <img
                                                    src={client.logo}
                                                    alt={client.name}
                                                    className="w-24 h-24 object-contain grayscale group-hover:grayscale-0 group-hover:scale-110 transition-transform duration-300 ease-in-out"
                                                />
                                            </div>
                                            <div className="text-center space-y-2">
                                                <p className="font-bold text-lg text-[#2591c2]">
                                                    {client.name}
                                                </p>
                                                <ul className="text-sm text-gray-700 leading-relaxed">
                                                    {client.entities.map(
                                                        (entity: string, entityIndex: number) => (
                                                            <li key={entityIndex}>{entity}</li>
                                                        )
                                                    )}
                                                </ul>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </Reveal>
        </section>
    );
};
