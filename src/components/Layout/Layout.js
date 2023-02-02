import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => (
  <div className="flex flex-col h-screen leading-8">
    <header className="p-6 lg:py-12">
      <div className="mx-auto container flex">
        <a href="/">
          <img
            className="w-100 h-28 lg:w-80"
            src="logo.svg"
            alt="ARTaylor Web Development"
          />
        </a>
      </div>
    </header>
    <main className="mx-auto mb-auto px-6 lg:py-12 lg:px-6 container grow">
      <Outlet />
    </main>
    <footer className="p-6 pt-0 lg:py-6">
      <div className="mx-auto container">
        <div className="flex justify-center">
          <a href="http://uk.linkedin.com/in/artaylorwebdesign" target="_blank">
            <i
              className="m-6 text-4xl fa fa-linkedin text-primary-light"
              aria-hidden="true"
            ></i>
          </a>
          <a
            href="mailto:artaylor1502@gmail.com?Subject=ARTaylorWebDevelopment%20Query"
            target="_blank"
          >
            <i
              className="m-6 text-4xl fa fa-envelope text-primary-light"
              aria-hidden="true"
            ></i>
          </a>
          <a href="https://github.com/ARTaylor1502" target="_blank">
            <i
              className="m-6 text-4xl fa fa-github text-primary-light"
              aria-hidden="true"
            ></i>
          </a>
        </div>
        <p className="mx-auto text-center">
          ARTaylor Web Development ©
          <script type="text/javascript">
            document.write(new Date().getFullYear());
          </script>
          2023
        </p>
      </div>
    </footer>
  </div>
);

export default Layout;
