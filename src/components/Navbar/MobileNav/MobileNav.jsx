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
          {/* <img
            className="logo"
            src="https://strapi.dhiwise.com/uploads/618fa90c201104b94458e1fb_64dcaa15a647704c049e47c4_mern_stack_OG_Image_6aa06011b5.jpg"
            alt="logo"
          /> */}
          <img src={portlogo} className="logo" alt="logo" />
          <ul>
            <li>
              <a className="menu-item" href="true">
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
        </div>
      </div>
    </>
  );
};

export default MobileNav;
