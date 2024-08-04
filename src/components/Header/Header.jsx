import React, { useState } from "react";
import PropTypes from "prop-types";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import MobileNavigationMenu from "../MobileNavigationMenu/MobileNavigationMenu";

const Header = ({ navItems }) => {
  const [mobileNavActive, setMobileNavActive] = useState(false);

  if (navItems.length < 1) {
    return null;
  }

  return (
    <header className="p-6 lg:py-12">
      <div className="mx-auto container md:flex justify-between">
        <i
          className="sm:hidden text-4xl fa fa-bars cursor-pointer"
          onClick={() => setMobileNavActive(true)}
        ></i>
        {mobileNavActive && (
          <MobileNavigationMenu
            menuItems={navItems}
            setMobileNavActive={setMobileNavActive}
          />
        )}
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
  );
};

Header.propTypes = {
  navItems: PropTypes.array,
};

export default Header;
