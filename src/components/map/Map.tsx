import Reveal from "../util/Reveal";

export const Map = () => {
  return (
    <div className="relative">
      <Reveal>
        <div className="mb-12">
          <img
            src="/map.png"
            alt="Photo de la carte du Maroc"
            className="w-full h-[300px] object-cover md:h-[400px]"
          />
        </div>
      </Reveal>
    </div>
  );
};
