const TermsConditions = () => {
  const handleLogoClick = () => {
    sessionStorage.removeItem("home-scroll-y");
  };

  return (
    <>
      <header className="navbar scrolled">
        <div className="inner">
          <a href="#/" className="logo" onClick={handleLogoClick}>
            SE Bedru
          </a>
          <a href="#/" className="contact-btn group">
            <div className="inner">
              <span>Back to Home</span>
            </div>
          </a>
        </div>
      </header>

      <main className="min-h-screen w-full pt-36 pb-16 px-5 md:px-20 text-white-50">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-semibold text-white mb-8">
            Terms & Conditions
          </h1>

          <section className="card-border rounded-xl p-6 md:p-8 space-y-6">
            <p className="text-sm md:text-base">
              Effective Date: {new Date().toLocaleDateString()}
            </p>

          <div className="space-y-3">
            <h2 className="text-lg md:text-xl font-semibold text-white">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using this portfolio website, you agree to these
              Terms & Conditions. If you do not agree, please do not use this
              website.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg md:text-xl font-semibold text-white">
              2. Intellectual Property
            </h2>
            <p>
              All content on this site, including text, visuals, and project
              materials, is owned by the site owner unless otherwise stated.
              You may not copy, reproduce, or distribute content without prior
              permission.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg md:text-xl font-semibold text-white">
              3. Use of Website
            </h2>
            <p>
              You agree to use this website only for lawful purposes. Any
              activity that harms, disables, or interferes with website
              functionality is prohibited.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg md:text-xl font-semibold text-white">
              4. External Links
            </h2>
            <p>
              This website may include links to third-party services. The owner
              is not responsible for the content or policies of external sites.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg md:text-xl font-semibold text-white">
              5. Limitation of Liability
            </h2>
            <p>
              This website is provided on an “as is” basis. The owner is not
              liable for any direct or indirect damages resulting from use of
              the website.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg md:text-xl font-semibold text-white">
              6. Changes to Terms
            </h2>
            <p>
              These terms may be updated at any time. Continued use of the
              website after updates means you accept the revised terms.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg md:text-xl font-semibold text-white">
              7. Contact
            </h2>
            <p>
              For any questions related to these Terms & Conditions, please use
              the contact section on the homepage.
            </p>
          </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default TermsConditions;