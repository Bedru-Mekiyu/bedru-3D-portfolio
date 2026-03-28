import { useEffect, useState } from "react";

import Testimonials from "./sections/Testimonials";
import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import TechStack from "./sections/TechStack";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import LogoShowcase from "./sections/LogoShowcase";
import FeatureCards from "./sections/FeatureCards";
import Navbar from "./components/NavBar";
import TermsConditions from "./pages/TermsConditions";

const getCurrentRoute = () => {
  const hash = window.location.hash || "";

  if (hash.startsWith("#/")) {
    return hash.slice(1).replace(/\/+$/, "") || "/";
  }

  return window.location.pathname.replace(/\/+$/, "") || "/";
};

const App = () => {
  const [route, setRoute] = useState(getCurrentRoute);

  useEffect(() => {
    const handleRouteChange = () => {
      setRoute(getCurrentRoute());
    };

    window.addEventListener("hashchange", handleRouteChange);
    window.addEventListener("popstate", handleRouteChange);

    return () => {
      window.removeEventListener("hashchange", handleRouteChange);
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  useEffect(() => {
    if (route !== "/terms-and-conditions") {
      const savedScrollY = sessionStorage.getItem("home-scroll-y");

      if (savedScrollY) {
        sessionStorage.removeItem("home-scroll-y");
        window.requestAnimationFrame(() => {
          window.scrollTo({ top: Number(savedScrollY), behavior: "auto" });
        });
      }
    }
  }, [route]);

  const isTermsPage = route === "/terms-and-conditions";

  if (isTermsPage) {
    return <TermsConditions />;
  }

  return (
    <>
      <Navbar />
      <Hero />
      <ShowcaseSection />
      <LogoShowcase />
      <FeatureCards />
      <Experience />
      <TechStack />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
