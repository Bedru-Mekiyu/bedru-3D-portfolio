import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import { words } from "../constants";
import HeroExperience from "../components/models/hero_models/HeroExperience";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-eyebrow",
      { y: 16, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.65, ease: "power2.out" }
    );
    gsap.fromTo(
      ".hero-text .hero-line",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.12, duration: 0.85, ease: "power2.out" },
      "-=0.35"
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10 pointer-events-none opacity-40 md:opacity-100" aria-hidden>
        <img
          src="/images/bg.png"
          alt=""
          className="max-w-none w-full min-w-[800px] md:min-w-0 md:w-auto"
          decoding="async"
          fetchPriority="high"
        />
      </div>

      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/20 via-transparent to-black pointer-events-none" aria-hidden />

      <div className="hero-layout md:px-20 px-4">
        <header className="flex flex-col justify-center w-full max-w-2xl xl:max-w-none xl:pb-6">
          <div className="flex flex-col gap-8">
            <p className="hero-eyebrow m-0">
              <span className="hero-eyebrow-dot" aria-hidden />
              Ethiopia · Full-stack &amp; product interfaces
            </p>
            <div className="hero-text text-display">
              <h1 className="m-0 p-0">
                <span className="hero-line block">
                  Shaping
                  <span className="slide">
                    <span className="wrapper">
                      {words.map((word, index) => (
                        <span
                          key={index}
                          className="flex items-center md:gap-3 gap-1 pb-2"
                        >
                          <img
                            src={word.imgPath}
                            alt=""
                            className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white/90"
                          />
                          <span>{word.text}</span>
                        </span>
                      ))}
                    </span>
                  </span>
                </span>
                <span className="hero-line block">into Real Projects</span>
                <span className="hero-line block hero-gradient-text">
                  that Deliver Results
                </span>
              </h1>
            </div>

            <p className="text-white-50 md:text-lg text-base leading-relaxed relative z-10 max-w-xl pointer-events-none">
              Hi, I’m bedru, a developer based in Ethiopia with a passion for
              code.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 relative z-20 items-start">
              <Button
                text="See My Work"
                className="md:w-64 md:h-14 w-52 h-11"
                id="counter"
              />
              <Button
                text="Resume"
                variant="primary"
                className="md:w-52 md:h-14 w-44 h-11"
                href="/resume.pdf"
                download
              />
            </div>
          </div>
        </header>

        <figure className="min-w-0 w-full lg:justify-self-end">
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;
