import { abilities } from "../constants";
import { useElementVisibility } from "../hooks/useScrollAnimation";

const featureRevealOpts = { rootMargin: "0px 0px -10% 0px" };

const FeatureCards = () => {
  const [ref] = useElementVisibility(featureRevealOpts);

  return (
    <div ref={ref} className="w-full padding-x-lg scroll-reveal">
      <div className="mx-auto grid-3-cols">
        {abilities.map(({ imgPath, title, desc }) => (
          <div
            key={title}
            className="card-border rounded-[var(--radius-lg)] p-8 flex flex-col gap-4 shadow-elevation transition-[transform,box-shadow] duration-300 hover:-translate-y-1"
          >
            <div className="size-14 flex items-center justify-center rounded-full bg-white/5 border border-white/10">
              <img src={imgPath} alt="" />
            </div>
            <h3 className="text-white text-xl md:text-2xl font-semibold mt-1 m-0">
              {title}
            </h3>
            <p className="text-white-50 text-base leading-relaxed m-0">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;
