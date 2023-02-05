import React from "react";
import { Link } from "react-router-dom";

function NavigationMenu({ menuItems }) {
  return (
    <>
      {menuItems.map((menuItem) => (
        <Link
          to={`categories/${menuItem.category}`}
          className="px-4 text-2xl text-primary-light hover:text-black"
          key={`menu-item-${menuItem.category}`}
        >
          {menuItem.category}
        </Link>
      ))}
    </>
  );
}

export default NavigationMenu;
