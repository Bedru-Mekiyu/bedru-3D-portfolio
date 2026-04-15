import { socialImgs } from "../constants";

const Footer = () => {
  const handleTermsClick = () => {
    sessionStorage.setItem("home-scroll-y", String(window.scrollY));
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <a
            href="#/terms-and-conditions"
            onClick={handleTermsClick}
            className="footer-link"
          >
            Terms & Conditions
          </a>
        </div>
        <ul className="socials">
          {socialImgs.map((social) => (
            <li key={social.name}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="icon"
                aria-label={`${social.name}: opens in a new tab`}
              >
                <img
                  src={social.imgPath}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  width={24}
                  height={24}
                />
              </a>
            </li>
          ))}
        </ul>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end text-sm md:text-base">
            © {new Date().getFullYear()} bedru mekiyu. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
