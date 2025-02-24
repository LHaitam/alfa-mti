import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { SectionHeader } from "../util/SectionHeader";
import Reveal from "../util/Reveal";
import { Map } from "./Map";
import Link from "next/link";


const MapMaroc = () => {
    return (
        <section id="about" className="section-wrapper text-black">
              <SectionHeader title="Notre&nbsp;Empreinte&nbsp;Géographique" dir="l" />
              <div className="grid grid grid-cols-2 gap-8">
                <div className="space-y-4">
                  <Reveal>
                    <p className="leading-relaxed text-black">
                      <span className="font-bold text-[#2591c2]">AMTI</span>, a mis en place une stratégie de développement 
                      ambitieuse visant à renforcer son empreinte géographique. Notre objectif est de couvrir de manière 
                      exhaustive l'ensemble du territoire national, en se concentrant en particulier sur les villes où 
                      les services de santé sont insuffisants, notamment 
                      <span className="font-bold text-[#2591c2]"> Tanger</span>,
                      <span className="font-bold text-[#2591c2]"> Tétouan</span>,
                      <span className="font-bold text-[#2591c2]"> Salé</span>,
                      <span className="font-bold text-[#2591c2]"> Kénitra</span>, 
                      <span className="font-bold text-[#2591c2]"> Meknès</span>, 
                      <span className="font-bold text-[#2591c2]"> Fès</span>, 
                      <span className="font-bold text-[#2591c2]"> Khouribga</span>, 
                      <span className="font-bold text-[#2591c2]"> Béni Mellal</span>, 
                      <span className="font-bold text-[#2591c2]"> Mohammedia</span>, 
                      <span className="font-bold text-[#2591c2]"> Casablanca</span>, 
                      <span className="font-bold text-[#2591c2]"> El Jadida</span>, 
                      <span className="font-bold text-[#2591c2]"> Safi</span>, 
                      <span className="font-bold text-[#2591c2]"> Essaouira</span>, 
                      <span className="font-bold text-[#2591c2]"> Agadir</span>, 
                      <span className="font-bold text-[#2591c2]"> Marrakech</span>  et 
                      <span className="font-bold text-[#2591c2]"> Errachidia</span>.
                    </p>
                  </Reveal>
                </div>
                <Map />
              </div>
            </section>
    );
};

export default MapMaroc;



