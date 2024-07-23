import React, { useState } from "react";
import "./Navbar.css";
import MobileNav from "./MobileNav/MobileNav";
import portlogo from "../assets/images/snplogo.png";
import { Link } from "react-scroll";

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
          <img src={portlogo} className="logo" alt="logo" />
          <ul>
            <li>
              <Link
                className="menu-item"
                to="home"
                smooth={true}
                duration={500}
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              {/* <a className="menu-item" href="true">
                Skills
              </a> */}
              <Link
                className="menu-item"
                to="skills"
                smooth={true}
                duration={500}
                onClick={toggleMenu}
              >
                Skills
              </Link>
            </li>
            <li>
              {/* <a className="menu-item" href="true">
                Education
              </a> */}
              <Link
                className="menu-item"
                to="education"
                smooth={true}
                duration={500}
                onClick={toggleMenu}
              >
                Education
              </Link>
            </li>
            <li>
              <Link
                className="menu-item"
                to="projects"
                smooth={true}
                duration={500}
                onClick={toggleMenu}
              >
                Projects
              </Link>
            </li>
            <li>
              {/* <a className="menu-item" href="true">
                Contact Me
              </a> */}
              <Link
                className="menu-item"
                to="contactme"
                smooth={true}
                duration={500}
                onClick={toggleMenu}
              >
                Contact Me
              </Link>
            </li>
            <button
              className="contact-btn"
              onClick={() => window.open("/Shabarish_N_P.pdf", "_blank")}
            >
              Resume
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
