import React from "react";
import { NavLink } from "react-router-dom";

function NavigationMenu({ menuItems }) {
  return (
    <div>
      {menuItems.map((menuItem) => (
        <NavLink
          to={`/categories/${menuItem.category}`}
          className={({ isActive }) =>
            isActive
              ? "px-4 text-2xl text-black hover:text-primary-light underline"
              : "px-4 text-2xl text-primary-light hover:text-black"
          }
          key={`menu-item-${menuItem.category}`}
        >
          {menuItem.category}
        </NavLink>
      ))}
    </div>
  );
}

export default NavigationMenu;
