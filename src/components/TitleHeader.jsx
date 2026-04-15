const TitleHeader = ({ title, sub }) => {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="hero-badge">
        <p className="text-sm md:text-base m-0">{sub}</p>
      </div>
      <h2 className="font-semibold md:text-3xl text-xl text-center text-white tracking-tight max-w-3xl leading-snug m-0">
        {title}
      </h2>
    </div>
  );
};

export default TitleHeader;
