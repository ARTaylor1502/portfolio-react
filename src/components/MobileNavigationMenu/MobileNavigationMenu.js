import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-regular-svg-icons";

const MobileNavigationMenu = ({ menuItems, setMobileNavActive }) => {
  return (
    <div className="z-50 h-screen w-screen fixed left-0 top-0">
      <div className="h-screen w-screen fixed left-0 top-0 bg-primary-dark opacity-80"></div>
      <FontAwesomeIcon
        icon={faWindowClose}
        className="fixed top-5 right-5 text-4xl text-alternate-light cursor-pointer hover:text-primary-light"
        onClick={() => setMobileNavActive(false)}
      />
      <div className="h-screen w-6/12 fixed left-0 top-0 bg-alternate-light">
        <nav>
          <ul>
            {menuItems.map((menuItem) => (
              <NavLink
                to={`/categories/${menuItem.category}`}
                className={({ isActive }) =>
                  isActive
                    ? "text-2xl text-primary-dark hover:text-primary-light"
                    : "text-2xl text-primary-light hover:bg-primary-light hover:text-primary-dark"
                }
                key={`mobile-menu-item-${menuItem.category}`}
                onClick={() => setMobileNavActive(false)}
              >
                <li className="p-5 border-b-2 cursor-pointer">
                  {menuItem.category}
                </li>
              </NavLink>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileNavigationMenu;
