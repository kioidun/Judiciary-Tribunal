import React from "react";
import { Link } from "react-router-dom";
import { menuItemstwo } from "./menuItems";
import "./dropdowns.css";

/**
 * About Us submenu
 * - Parent (About Us) controls open/close.
 * - Here we only render the list and make sure each click closes the drawer.
 */
function Dropdowntwo({ closeMenu, isDesktop }) {
  return (
    <ul
      className={`about-submenu show`}
      style={{ width: isDesktop ? "12rem" : "100%" }}
    >
      {menuItemstwo.map((item) => (
        <li key={item.id}>
          <Link
            to={item.path}
            className="submenu-item"
            onClick={() => closeMenu && closeMenu()}
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Dropdowntwo;
