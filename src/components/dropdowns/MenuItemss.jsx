import { useEffect, useRef, useState } from "react";
import Dropdown from "./Dropdown";
import { NavLink } from "react-router-dom";
import "./dropdowns.css";

/**
 * Handles:
 * - Desktop: hover to open nested.
 * - Mobile: click to toggle nested.
 * - Clicking any leaf link closes the drawer (closeMenu()).
 */
const MenuItemss = ({ items, depthLevel, closeMenu }) => {
  const [dropdown, setDropdown] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);
  const ref = useRef(null);

  // Click outside to close dropdown on desktop
  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  // Track breakpoint
  useEffect(() => {
    const onResize = () => setIsDesktop(window.innerWidth > 1024);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const onMouseEnter = () => {
    if (isDesktop && items.submenu) setDropdown(true);
  };

  const onMouseLeave = () => {
    if (isDesktop && items.submenu) setDropdown(false);
  };

  const onToggleClick = (e) => {
    // On mobile, toggle open instead of navigating
    if (!isDesktop && items.submenu) {
      e.preventDefault();
      setDropdown((prev) => !prev);
    }
  };

  const hasSubmenu = Boolean(items.submenu);
  const label = (
    <>
      {items.title}
      {hasSubmenu && (depthLevel > 0 ? <span> &raquo; </span> : <span className="arrow" />)}
    </>
  );

  return (
    <li
      className="menu-items"
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{ position: hasSubmenu ? "relative" : "static" }}
    >
      {hasSubmenu ? (
        <>
          {/* Use a button-like NavLink that doesn’t navigate on mobile */}
          <NavLink
            to={items.path || "#"}
            className="nav-link"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={onToggleClick}
          >
            {label}
          </NavLink>

          {/* Render nested dropdown */}
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
            closeMenu={closeMenu}  // ✅ pass down so leaf links close the drawer
          />
        </>
      ) : (
        <NavLink
          to={items.path}
          onClick={() => closeMenu && closeMenu()} // ✅ leaf link closes drawer
        >
          {items.title}
        </NavLink>
      )}
    </li>
  );
};

export default MenuItemss;
