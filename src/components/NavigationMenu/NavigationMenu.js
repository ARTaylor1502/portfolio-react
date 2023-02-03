import React from "react";
import PropTypes from "prop-types";
import NavigationItem from "../NavigationItem/NavigationItem";

function NavigationMenu() {
  const menuData = [
    {
      title: "Home",
      url: "/",
      links: [
        { title: "Test", url: "/" },
        { title: "Test", url: "/" },
      ],
    },
    {
      title: "Software",
      url: "/",
      links: [
        { title: "Test", url: "/" },
        { title: "Test", url: "/" },
      ],
    },
    {
      title: "Apps",
      url: "/",
      links: [
        { title: "Test", url: "/" },
        { title: "Test", url: "/" },
      ],
    },
    {
      title: "Websites",
      url: "/",
      links: [
        { title: "Test", url: "/" },
        { title: "Test", url: "/" },
      ],
    },
  ];

  return (
    <>
      {menuData.map((menuItem) => (
        <NavigationItem
          key={`nav-{menuItem.title.lowerCase()}`}
          trigger={
            <span className="text-lg text-primary-light">
              {menuItem.title} <i className="fa fa-chevron-down"></i>
            </span>
          }
          menu={menuItem.links.map((item) => (
            <a href={item.url}>{item.title}</a>
          ))}
        />
      ))}
    </>
  );
}

NavigationMenu.propTypes = {};

NavigationMenu.defaultProps = {};

export default NavigationMenu;
