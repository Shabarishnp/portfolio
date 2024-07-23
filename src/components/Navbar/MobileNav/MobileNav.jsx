import React from "react";
import "./MobileNav.css";
import portlogo from "../../assets/images/snplogo.png";

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
              <a className="menu-item" href="#Home">
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
            <li>
              <a className="menu-item" href="true">
                Projects
              </a>
            </li>
            <li>
              <a className="menu-item" href="true">
                Contact Me
              </a>
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
