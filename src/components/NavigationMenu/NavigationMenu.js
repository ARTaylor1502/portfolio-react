import React from "react";

function NavigationMenu({ menuItems }) {
  return (
    <>
      {menuItems.map((menuItem) => (
        <a
          className="px-4 text-2xl text-primary-light hover:text-black"
          href="/"
          key={`menu-item-${menuItem.category}`}
        >
          {menuItem.category}
        </a>
      ))}
    </>
  );
}

export default NavigationMenu;
