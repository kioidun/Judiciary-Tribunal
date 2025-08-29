import React, { useEffect, useState } from "react";
import "./navbartwo.css";
import { Link, useLocation } from "react-router-dom";
import { navItems, menuItems } from "../dropdowns/menuItems";
import Dropdowntwo from "../dropdowns/Dropdowntwo";      // About Us submenu
import Dropdownthree from "../dropdowns/Dropdownthree";  // Media submenu
import MenuItems from "../dropdowns/MenuItemss";         // Tribunals (nested)
import { MdOutlineClose } from "react-icons/md";
import logo from "../resources/images/logo.png";

function Navbartwo() {
  const [isNavShowing, setIsNavShowing] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mediaOpen, setMediaOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);
  const location = useLocation();

  // Close drawer on route change
  useEffect(() => {
    setIsNavShowing(false);
    document.body.classList.remove("nav-open");
  }, [location.pathname]);

  // Track desktop vs mobile (and reset open states on breakpoint changes)
  useEffect(() => {
    const onResize = () => setIsDesktop(window.innerWidth > 1024);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const toggleDrawer = () => {
    const next = !isNavShowing;
    setIsNavShowing(next);
    if (next) {
      document.body.classList.add("nav-open");
    } else {
      document.body.classList.remove("nav-open");
    }
  };

  const closeDrawer = () => {
    setIsNavShowing(false);
    document.body.classList.remove("nav-open");
  };

  // Desktop: hover controls About/Media. Mobile: click toggles.
  const aboutHandlers = isDesktop
    ? {
        onMouseEnter: () => setAboutOpen(true),
        onMouseLeave: () => setAboutOpen(false),
      }
    : {
        onClick: (e) => {
          e.preventDefault();
          setAboutOpen((p) => !p);
        },
      };

  const mediaHandlers = isDesktop
    ? {
        onMouseEnter: () => setMediaOpen(true),
        onMouseLeave: () => setMediaOpen(false),
      }
    : {
        onClick: (e) => {
          e.preventDefault();
          setMediaOpen((p) => !p);
        },
      };

  return (
    <nav className="nav">
      <div className="navbar">
        <Link to="/" className="logo" onClick={closeDrawer}>
          <img src={logo} alt="Tribunal Logo" />
        </Link>

        {/* Hamburger */}
        <button
          className="nav_toggle-btn"
          onClick={toggleDrawer}
          aria-label="Toggle navigation menu"
        >
          {isNavShowing ? (
            <MdOutlineClose />
          ) : (
            <span style={{ fontSize: "2rem", lineHeight: 1 }}>&#9776;</span>
          )}
        </button>

        {/* Drawer backdrop (mobile) */}
        <div
          className={`nav-backdrop ${isNavShowing ? "show" : ""}`}
          onClick={closeDrawer}
        />

        {/* Nav items */}
        <ul className={`nav-items ${isNavShowing ? "show_Nav" : "hide_Nav"}`}>
          {navItems.map((item) => {
            if (item.title === "About Us") {
              const open = isDesktop ? aboutOpen : aboutOpen;
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  style={{ position: "relative" }}
                  {...aboutHandlers}
                >
                  {/* For mobile, prevent navigation from parent; children navigate */}
                  <Link to={item.path || "#"}>{item.title}</Link>
                  {/* Submenu: pass closeDrawer to child links */}
                  {open && <Dropdowntwo closeMenu={closeDrawer} isDesktop={isDesktop} />}
                </li>
              );
            }

            if (item.title === "Media") {
              const open = isDesktop ? mediaOpen : mediaOpen;
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  style={{ position: "relative" }}
                  {...mediaHandlers}
                >
                  <Link to={item.path || "#"}>{item.title}</Link>
                  {open && <Dropdownthree closeMenu={closeDrawer} isDesktop={isDesktop} />}
                </li>
              );
            }

            if (item.title === "Tenders") {
              return (
                <li key={item.id} className={item.cName}>
                  <Link
                    to="https://judiciary.go.ke/download-category/tenders/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeDrawer}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            }

            if (item.title === "Tribunals") {
              return (
                <li key={item.title} className="nav-item tribunals-item">
                  {menuItems.map((menu, index) => (
                    <MenuItems
                      items={menu}
                      key={index}
                      depthLevel={0}
                      closeMenu={closeDrawer} // ✅ nested items will close hamburger too
                    />
                  ))}
                </li>
              );
            }

            // Normal links
            return (
              <li key={item.id} className={item.cName}>
                <Link to={item.path} onClick={closeDrawer}>
                  {item.title}
                </Link>
              </li>
            );
          })}

          <Link
            to="https://causelist.court.go.ke"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeDrawer}
          >
            <button className="btn_causelist">Causelist</button>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbartwo;
