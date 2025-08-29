import React from "react";
import { Link } from "react-router-dom";
import { menuItemsthree } from "./menuItems";
import "./dropdowns.css";

/**
 * Media submenu
 * - Parent (Media) controls open/close.
 * - Each click closes the drawer via closeMenu().
 */
function Dropdownthree({ closeMenu, isDesktop }) {
  return (
    <ul
      className={`media-submenu show`}
      style={{ width: isDesktop ? "12rem" : "100%" }}
    >
      {menuItemsthree.map((item) => (
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

export default Dropdownthree;
