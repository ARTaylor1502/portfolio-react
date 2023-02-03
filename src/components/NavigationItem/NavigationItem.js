import React from "react";
import PropTypes from "prop-types";

function NavigationItem({ trigger, menu }) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div
      className="p-4 relative cursor-pointer"
      onMouseEnter={() => handleOpen(true)}
      onMouseLeave={() => handleOpen(false)}
    >
      {trigger}
      {open ? (
        <ul className="pt-4 w-max absolute">
          {menu.map((menuItem, index) => (
            <li key={index} className="pb-4">
              {menuItem}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

NavigationItem.propTypes = {};

NavigationItem.defaultProps = {};

export default NavigationItem;
