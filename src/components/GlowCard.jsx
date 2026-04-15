import { useRef } from "react";

const GlowCard = ({ card, children }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const el = cardRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;

    el.style.setProperty("--start", angle + 60);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="card card-border timeline-card rounded-[var(--radius-lg)] p-8 md:p-10 mb-5 break-inside-avoid-column shadow-elevation transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5"
    >
      <div className="glow" aria-hidden />
      <div className="flex items-center gap-1 mb-5">
        {Array.from({ length: 5 }, (_, i) => (
          <img key={i} src="/images/star.png" alt="" className="size-5" />
        ))}
      </div>
      <div className="mb-5">
        <p className="text-white-50 text-base md:text-lg leading-relaxed">{card.review}</p>
      </div>
      {children}
    </div>
  );
};

export default GlowCard;
