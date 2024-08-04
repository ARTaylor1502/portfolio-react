import React from "react";

const Footer = () => {
  function getCurrentYear() {
    return new Date().getFullYear();
  }

  return (
    <footer className="p-6 pt-0 lg:py-6">
      <div className="mx-auto container">
        <div className="flex justify-center">
          <a
            href="http://uk.linkedin.com/in/artaylorwebdesign"
            target="_blank"
            rel="noreferrer"
          >
            <i
              className="m-6 text-4xl fa fa-linkedin text-primary-light hover:text-primary-dark"
              aria-hidden="true"
            ></i>
          </a>
          <a
            href="mailto:artaylor1502@gmail.com?Subject=ARTaylorWebDevelopment%20Query"
            target="_blank"
            rel="noreferrer"
          >
            <i
              className="m-6 text-4xl fa fa-envelope text-primary-light hover:text-primary-dark"
              aria-hidden="true"
            ></i>
          </a>
          <a
            href="https://github.com/ARTaylor1502"
            target="_blank"
            rel="noreferrer"
          >
            <i
              className="m-6 text-4xl fa fa-github text-primary-light hover:text-primary-dark"
              aria-hidden="true"
            ></i>
          </a>
        </div>
        <p className="mx-auto text-center">
          ARTaylor Web Development ©{getCurrentYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
