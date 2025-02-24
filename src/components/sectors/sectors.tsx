import Reveal from "../util/Reveal";
import { SectionHeader } from "../util/SectionHeader";
import Link from "next/link";

export const Sectors = () => {
    return (
        <section id="sectors" className="text-black">
            <SectionHeader title="Nos&nbsp;Secteurs" dir="l" />
            <div className="container mx-auto px-4">
                <Reveal>
                    <p className="text-center text-justify text-black mb-12 leading-relaxed">
                        Chez <span className="font-bold text-[#2591c2]">AMTI</span>, nous opérons dans des secteurs clés pour contribuer à l&apos;essor
                        industriel du Maroc. Nous innovons dans le secteur médical et nous étendons notre savoir-faire vers l&apos;industrie ferroviaire.
                        Découvrez comment nous façonnons l&apos;avenir dans ces domaines.
                    </p>
                </Reveal>
            </div>
            <div className="flex flex-col items-center justify-center">
                <Reveal>
                    {/* Teasers for sectors */}
                    <div className="flex flex-wrap justify-center gap-8">
                        {/* Medical Sector */}
                        <Reveal>
                            <div className="relative group">
                                <Link href="/sectors/medical">
                                    <img
                                        src="/images/medical.png"
                                        alt="Secteur Médical"
                                        className="w-full h-64 object-cover rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <h3 className="text-white text-2xl font-bold">Secteur Médical</h3>
                                    </div>
                                </Link>
                            </div>
                        </Reveal>

                        {/* Railway Sector */}
                        <Reveal>
                            <div className="relative group">
                                <Link href="/sectors/railway">
                                    <img
                                        src="/images/railway.webp"
                                        alt="Secteur Ferroviaire"
                                        className="w-full h-64 object-cover rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <h3 className="text-white text-2xl font-bold">Secteur Ferroviaire</h3>
                                    </div>
                                </Link>
                            </div>
                        </Reveal>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default Sectors;
