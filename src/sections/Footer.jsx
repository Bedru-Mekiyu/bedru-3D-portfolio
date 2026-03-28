import { socialImgs } from "../constants";

const Footer = () => {
  const handleTermsClick = () => {
    sessionStorage.setItem("home-scroll-y", String(window.scrollY));
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <a href="#/terms-and-conditions" onClick={handleTermsClick}>
            Terms & Conditions
          </a>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <div key={index} className="icon">
              <img src={socialImg.imgPath} alt="social icon" />
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} bedru mekiyu. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
