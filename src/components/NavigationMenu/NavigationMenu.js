import React from "react";
import PropTypes from "prop-types";
import NavigationItem from "../NavigationItem/NavigationItem";

function NavigationMenu() {
  const menuData = [
    {
      title: "Software",
      url: "/",
      links: [
        { title: "Select (School Meal Ordering Service)", url: "/" },
        { title: "Ablesim Project Simulation", url: "/" },
      ],
    },
    {
      title: "Apps",
      url: "/",
      links: [
        { title: "FluidTrend (Android and ioS)", url: "/" },
        { title: "Guitar Teacher (Android App)", url: "/" },
        { title: "Guitar Teacher (Windows App)", url: "/" },
        { title: "One Day Wiser", url: "/" },
      ],
    },
    {
      title: "Websites",
      url: "/",
      links: [
        { title: "Forever Joma", url: "/" },
        { title: "Plantool", url: "/" },
        { title: "Pro Green MX", url: "/" },
        { title: "Toner Printer Copier", url: "/" },
        { title: "Navigating the Twilight Zone", url: "/" },
      ],
    },
  ];

  return (
    <>
      {menuData.map((menuItem) => (
        <NavigationItem
          key={`nav-{menuItem.title.lowerCase()}`}
          trigger={
            <span className="text-2xl text-primary-light">
              {menuItem.title} <i className="fa fa-angle-down"></i>
            </span>
          }
          menu={menuItem.links.map((item) => (
            <a className="hover:text-primary-light" href={item.url}>
              {item.title}
            </a>
          ))}
        />
      ))}
    </>
  );
}

NavigationMenu.propTypes = {};

NavigationMenu.defaultProps = {};

export default NavigationMenu;
