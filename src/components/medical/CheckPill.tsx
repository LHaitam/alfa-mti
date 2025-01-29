import React, { Dispatch, SetStateAction } from "react";
import { FiCheckCircle } from "react-icons/fi";

export const CheckPill = ({
  children,
  selected,
  setSelected,
  index,
}: {
  children: string;
  selected: boolean;
  setSelected: Dispatch<SetStateAction<number>>;
  index: number;
}) => (
  <div className="rounded-full bg-[#2591c2]">
    <button
      onClick={() => setSelected(index)}
      className={`flex origin-top-left items-center gap-1 rounded-full border bg-white px-1.5 py-0.5 text-sm transition-all ${
        selected
          ? "-rotate-3 border-[#2591c2] text-[#2591c2]"
          : "border-zinc-900 hover:bg-[#f5f8fa]"
      }`}
    >
      <FiCheckCircle className={selected ? "text-[#154a77]" : "text-zinc-900"} />{" "}
      {children}
    </button>
  </div>
);
