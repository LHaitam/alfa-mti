import React from "react";
import { CheckPill } from "./CheckPill";
import { OPTIONS } from "./options";

interface CopyProps {
  selected: number;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
}

export const Copy: React.FC<CopyProps> = ({ selected, setSelected }) => {
  return (
    <div className="space-y-8">
      {/* Description */}
      <p className="mb-6 text-black  leading-relaxed ">
        <span className="font-bold text-[#2591c2]">AMTI</span> propose une large
        gamme de produits industriels et médicaux, conçus pour répondre aux
        besoins spécifiques des professionnels. Découvrez notre catalogue et
        trouvez des solutions adaptées à vos besoins.
      </p>

      {/* Options */}
      <div className="mb-6 flex flex-wrap justify-center gap-3 md:justify-start">
        {OPTIONS.map((o, i) => (
          <CheckPill
            key={o.title}
            index={i}
            selected={i === selected}
            setSelected={setSelected}
          >
            {o.title}
          </CheckPill>
        ))}
      </div>
    </div>
  );
};

export default Copy;
