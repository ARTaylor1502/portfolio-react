import React from "react";
import { Outlet } from "react-router-dom";
import NavigationMenu from "../NavigationMenu/NavigationMenu";

function Layout({ navItems }) {
  function getCurrentYear() {
    return new Date().getFullYear();
  }

  return (
    <div className="flex flex-col h-screen">
      <header className="p-6 lg:py-12">
        <div className="mx-auto container md:flex justify-between">
          <a href="/">
            <img
              className="h-28 w-full md:w-48"
              src="/logo.svg"
              alt="ARTaylor Web Development"
            />
          </a>
          <nav className="hidden sm:flex sm:justify-center sm:items-center">
            <NavigationMenu menuItems={navItems} />
          </nav>
        </div>
      </header>
      <main className="mx-auto mb-auto px-6 sm:px-0 container grow">
        <Outlet />
      </main>
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
    </div>
  );
}

export default Layout;
