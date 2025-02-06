import { AiFillMail, AiFillPhone } from "react-icons/ai";
import Link from "next/link";
import Reveal from "../util/Reveal";

export const Contact = () => {
  return (
    <section className="section-wrapper" id="contact">
      <div className="max-w-xl mx-auto bg-zinc-800 px-8 py-12 rounded-xl">
        <Reveal width="w-full">
          <h4 className="text-4xl md:text-5xl text-center font-black">
            Contactez<span className="text-[#2591c2]">-Nous</span>
          </h4>
        </Reveal>
        <Reveal width="w-full">
          <p className="text-center my-8 text-zinc-300 leading-relaxed">
            Vous avez des questions ou souhaitez collaborer avec nous ? N’hésitez
            pas à nous envoyer un email ou à nous appeler directement. Vous pouvez
            également nous suivre sur{" "}
            <Link
              href="https://www.linkedin.com"
              target="_blank"
              className="text-[#2591c2] hover:underline"
            >
              LinkedIn
            </Link>{" "}
            pour rester informé de nos actualités et opportunités.
          </p>
        </Reveal>
        <Reveal width="w-full">
          {/* Email */}
          <Link href="mailto:i.zouhir@alfa-mti.ma">
            <div className="flex items-center justify-center gap-2 w-fit text-lg md:text-2xl whitespace-normal mx-auto hover:text-[#2591c2] transition-colors">
              <AiFillMail />
              <span>i.zouhir@alfa-mti.ma</span>
            </div>
          </Link>
        </Reveal>
        <Reveal width="w-full">
          {/* Phone Numbers */}
          <div className="mt-6 space-y-2">
            <Link href="tel:+212522539011">
              <div className="flex items-center justify-center gap-2 w-fit text-lg md:text-2xl whitespace-normal mx-auto hover:text-[#2591c2] transition-colors">
                <AiFillPhone />
                <span>+212 5 20 99 87 16</span>
              </div>
            </Link>
            <Link href="tel:+212661311229">
              <div className="flex items-center justify-center gap-2 w-fit text-lg md:text-2xl whitespace-normal mx-auto hover:text-[#2591c2] transition-colors">
                <AiFillPhone />
                <span>+212 6 61 31 12 29</span>
              </div>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
