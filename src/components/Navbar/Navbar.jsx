import React, { useState } from "react";
import "./Navbar.css";
import MobileNav from "./MobileNav/MobileNav";
import portlogo from "../assets/images/snplogo.png";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className="nav-wrapper">
        <div className="nav-content">
          {/* <img
            className="logo"
            src="https://strapi.dhiwise.com/uploads/618fa90c201104b94458e1fb_64dcaa15a647704c049e47c4_mern_stack_OG_Image_6aa06011b5.jpg"
            alt="logo"
          /> */}
          <img src={portlogo} className="logo" alt="logo" />
          <ul>
            <li>
              <a className="menu-item" href="#t">
                Home
              </a>
            </li>
            <li>
              <a className="menu-item" href="true">
                Skills
              </a>
            </li>
            <li>
              <a className="menu-item" href="true">
                Education
              </a>
            </li>
            {/* <li>
              <a className="menu-item" href="true">
                Projects
              </a>
            </li> */}
            <li>
              <a className="menu-item" href="true">
                Contact Me
              </a>
            </li>
            <button className="contact-btn" onClick={() => {}}>
              Hire Me
            </button>
          </ul>

          {/* This is i updated button using matrial-icons */}
          <button className="menu-btn" onClick={toggleMenu}>
            <span className="material-icons" style={{ fontSize: "1.8rem" }}>
              {openMenu ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
