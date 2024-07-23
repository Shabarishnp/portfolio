import React from "react";
import "./MobileNav.css";
import portlogo from "../../assets/images/snplogo.png";
import { Link } from "react-scroll";

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
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
        </div>
      </div>
    </>
  );
};

export default MobileNav;
