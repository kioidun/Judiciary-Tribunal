import React from "react";
import MenuItemss from "./MenuItemss";
import "./dropdowns.css";

/**
 * Recursive container for nested submenus
 * - Receives `closeMenu` and passes it to nested MenuItemss
 * - Applies `.show` class so CSS can animate/mobile-collapse
 */
const Dropdown = ({ submenus, dropdown, depthLevel, closeMenu }) => {
  const dropdownClass = depthLevel >= 1 ? "dropdown-submenu" : "dropdown";
  return (
    <ul className={`${dropdownClass} ${dropdown ? "show" : ""}`}>
      {submenus.map((submenu, idx) => (
        <MenuItemss
          items={submenu}
          key={`${submenu.title}-${idx}`}
          depthLevel={depthLevel + 1}
          closeMenu={closeMenu}  
        />
      ))}
    </ul>
  );
};

export default Dropdown;
