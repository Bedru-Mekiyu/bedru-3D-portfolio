/**
 * Reusable CTA: primary scrolls to #counter when `id` is set and no `href`;
 * secondary uses outline style for less prominent actions.
 */
const Button = ({
  text,
  className,
  id,
  href,
  download,
  target,
  rel,
  variant = "primary",
}) => {
  const shouldScrollToCounter = Boolean(id) && !href;
  const isSecondary = variant === "secondary";

  return (
    <a
      href={href ?? "#"}
      download={download}
      target={target}
      rel={rel ?? (target === "_blank" ? "noopener noreferrer" : undefined)}
      onClick={(e) => {
        if (!shouldScrollToCounter) return;

        e.preventDefault();

        const el = document.getElementById("counter");

        if (el && id) {
          const offset = window.innerHeight * 0.15;
          const top =
            el.getBoundingClientRect().top + window.pageYOffset - offset;

          window.scrollTo({ top, behavior: "smooth" });
        }
      }}
      className={`${className ?? ""} cta-wrapper`}
    >
      {isSecondary ? (
        <div className="cta-button-secondary group">
          <p className="text pl-1 pr-12">{text}</p>
          <div className="arrow-wrapper">
            <img src="/images/arrow-down.svg" alt="" />
          </div>
        </div>
      ) : (
        <div className="cta-button group">
          <div className="bg-circle" />
          <p className="text">{text}</p>
          <div className="arrow-wrapper">
            <img src="/images/arrow-down.svg" alt="" />
          </div>
        </div>
      )}
    </a>
  );
};

export default Button;
