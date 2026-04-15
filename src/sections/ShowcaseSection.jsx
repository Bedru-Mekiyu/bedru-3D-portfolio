import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import TitleHeader from "../components/TitleHeader";
import { showcaseProjects } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const ProjectChip = ({ label }) => (
  <span className="project-chip">{label}</span>
);

const FeaturedProject = ({ project }) => (
  <article className="first-project-wrapper showcase-reveal">
    <div className="showcase-featured-media">
      <div className="image-wrapper">
        <img
          src={project.imgPath}
          alt={project.alt}
          loading="lazy"
          decoding="async"
          className="showcase-img object-cover"
        />
        <div className="showcase-media-shine" aria-hidden />
      </div>
      <div className="showcase-floating-index" aria-hidden>
        {project.index}
      </div>
    </div>

    <div className="text-content showcase-featured-body">
      <div className="showcase-meta-row">
        <span className="showcase-kicker">{project.category}</span>
        <span className="showcase-index-inline">{project.index}</span>
      </div>
      <h2 className="showcase-title-featured">{project.title}</h2>
      <p className="showcase-headline">{project.headline}</p>

      <div className="showcase-narrative">
        <div className="showcase-narrative-block">
          <p className="showcase-narrative-label">Challenge</p>
          <p className="showcase-narrative-text">{project.context}</p>
        </div>
        <div className="showcase-narrative-block">
          <p className="showcase-narrative-label">What shipped</p>
          <p className="showcase-narrative-text">{project.outcome}</p>
        </div>
      </div>

      <div className="showcase-chips">
        {project.stack.map((tech) => (
          <ProjectChip key={tech} label={tech} />
        ))}
      </div>

      <a href={project.href} className="showcase-cta">
        <span>Discuss a similar build</span>
        <span className="showcase-cta-arrow" aria-hidden>
          →
        </span>
      </a>
    </div>
  </article>
);

const CompactProject = ({ project }) => (
  <article className="project showcase-reveal showcase-compact">
    <div className="showcase-compact-top">
      <div className="image-wrapper">
        <img
          src={project.imgPath}
          alt={project.alt}
          loading="lazy"
          decoding="async"
          className="showcase-img object-contain"
        />
        <div className="showcase-media-shine" aria-hidden />
      </div>
      <div className="showcase-compact-meta">
        <span className="showcase-index-compact">{project.index}</span>
        <span className="showcase-kicker-compact">{project.category}</span>
      </div>
    </div>

    <div className="showcase-compact-copy">
      <h2 className="showcase-title-compact">{project.title}</h2>
      <p className="showcase-headline-compact">{project.headline}</p>
      <p className="showcase-lede">{project.context}</p>
      <div className="showcase-chips">
        {project.stack.map((tech) => (
          <ProjectChip key={tech} label={tech} />
        ))}
      </div>
      <a href={project.href} className="showcase-cta showcase-cta--subtle">
        <span>Talk about this project</span>
        <span className="showcase-cta-arrow" aria-hidden>
          →
        </span>
      </a>
    </div>
  </article>
);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const [featured, ...rest] = showcaseProjects;

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.1, ease: "power2.out" }
    );

    gsap.utils.toArray(".showcase-reveal").forEach((el, index) => {
      gsap.fromTo(
        el,
        { y: 44, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          ease: "power3.out",
          delay: 0.08 * index,
          scrollTrigger: {
            trigger: el,
            start: "top bottom-=11%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full max-w-[1400px] mx-auto">
        <TitleHeader
          title="Work that ships — not just slides"
          sub="Case studies & shipped products"
        />

        <div className="showcaselayout mt-14 md:mt-20">
          <FeaturedProject project={featured} />

          <div className="project-list-wrapper overflow-hidden">
            {rest.map((project) => (
              <CompactProject key={project.title} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
