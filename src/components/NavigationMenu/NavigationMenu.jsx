import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

function NavigationMenu({ menuItems }) {
  return (
    <div>
      {menuItems.map((menuItem) => (
        <NavLink
          to={`/categories/${menuItem.category}`}
          className={({ isActive }) =>
            isActive
              ? "px-4 text-2xl text-primary-dark hover:text-primary-light underline"
              : "px-4 text-2xl text-primary-light hover:text-primary-dark"
          }
          key={`menu-item-${menuItem.category}`}
        >
          {menuItem.category}
        </NavLink>
      ))}
    </div>
  );
}

NavigationMenu.propTypes = {
  menuItems: PropTypes.array,
};

export default NavigationMenu;
