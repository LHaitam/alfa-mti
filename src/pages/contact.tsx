import React from "react";
import FlyoutNav from "../components/nav/Header";
import Hero from "@/components/hero/Hero";
import Footer from "@/components/footer/Footer";
import Head from "next/head"; // Import Head component

const ContactPage: React.FC = () => {
  return (
    <>
      {/* Head component for page title */}
      <Head>
        <title>Nous Contacter - AMTI</title> {/* Set the title here */}
        <meta name="description" content="Contactez-nous pour toute question ou demande." />
      </Head>

      <div className="grid bg-white min-h-screen">
        <FlyoutNav />
        <main>
          {/* Hero Section */}
          <div className="w-full min-h-screen z-10 bg-black bg-opacity-10">
            <Hero
              title="Nous Contacter"
              bgVideo="/bg.webm"
              overlayOpacity="bg-black/60"
            />
          </div>

          {/* Contact Form and Info Section */}
          <div className="container mx-auto max-w-5xl px-4 md:px-8 space-y-32 overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 md:px-8 py-12 space-y-16">
              <p className="text-center text-black my-4 text-lg">
                Nous sommes disponibles pour répondre à toutes vos questions et vous accompagner dans vos projets.
              </p>

              {/* Contact Form */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Form Section */}
                <div>
                  <h2 className="text-2xl font-bold text-[#154a77] mb-4">Envoyez-nous un message</h2>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <input
                        type="text"
                        name="name"
                        placeholder="Nom & Prénom*"
                        className="text-black w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2591c2] focus:outline-none"
                        required
                        aria-label="Nom et prénom"
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="E-mail*"
                        className="text-black w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2591c2] focus:outline-none"
                        required
                        aria-label="Email"
                      />
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Téléphone*"
                      className="text-black w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2591c2] focus:outline-none"
                      required
                      aria-label="Téléphone"
                    />
                    <select
                      name="subject"
                      className="text-black w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2591c2] focus:outline-none"
                      required
                      aria-label="Objet de la demande"
                    >
                      <option value="" disabled selected>
                        Objet de votre demande*
                      </option>
                      <option value="information">Demande d'information</option>
                      <option value="reclamation">Réclamation</option>
                      <option value="recruitment">Recrutement/Stage</option>
                      <option value="other">Autres</option>
                    </select>
                    <textarea
                      name="message"
                      rows={6}
                      placeholder="Votre message*"
                      className="text-black w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2591c2] focus:outline-none"
                      required
                      aria-label="Votre message"
                    ></textarea>

                    {/* Centering the button */}
                    <div className="flex justify-center">
                      <button
                        type="submit"
                        className="w-full md:w-auto px-8 py-4 bg-[#2591c2] text-zinc-100 border-[#2591c2] font-bold rounded-lg transition-all duration-300 transform hover:bg-[#1066af] hover:text-white hover:scale-105 focus:outline-none"
                      >
                        Envoyer
                      </button>
                    </div>
                  </form>
                </div>

                {/* Contact Information */}
                <div>
                  <h2 className="text-2xl font-bold text-[#154a77] mb-4">Informations de Contact</h2>
                  <ul className="space-y-4 text-lg text-gray-600">
                    <li>
                      <strong>Adresse : </strong>
                      Aéropôle de l'Aéroport Med V, 27000 Nouasseur, Maroc
                    </li>
                    <li>
                      <strong>Téléphone : </strong>
                      <a
                        href="tel:+212522539011"
                        className="text-[#2591c2] hover:underline"
                      >
                        +212 5 20 99 87 16
                      </a>{" "}
                      |{" "}
                      <a
                        href="tel:+212661311229"
                        className="text-[#2591c2] hover:underline"
                      >
                        +212 6 61 31 12 29
                      </a>
                    </li>
                    <li>
                      <strong>Email : </strong>
                      <a
                        href="mailto:contact@amti.ma"
                        className="text-[#2591c2] hover:underline"
                      >
                        contact@amti.ma
                      </a>
                    </li>
                  </ul>

                  {/* Google Map */}
                  <div className="mt-8">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.231701330598!2d-7.570195923630528!3d33.4557651746707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd3be8b7c03f%3A0xa5fb6fa544b5b13b!2sCF68%2BRJ7%2C%20N9%2C%20Deroua!5e0!3m2!1sen!2sma!4v1692725882023!5m2!1sen!2sma"
                      width="100%"
                      height="300"
                      allowFullScreen={false}
                      loading="lazy"
                      className="border border-gray-300 rounded-lg shadow-lg"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
