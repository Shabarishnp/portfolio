import React from "react";
import "./Head.css";
import reactlogo from "../assets/images/logo192.png";
import lap from "../assets/images/laptop.avif";
import jslogo from "../assets/images/javasciprt.jpg";
import csslogo from "../assets/images/css.png";
import nodelogo from "../assets/images/node.png";

const Head = () => {
  return (
    <section id="home" className="head-container">
      <div className="head-content">
        <h2>Hello...! This is Shabarish N P</h2>
        <h4>MERN Stack Developer</h4>
        <p>
          "A Computer Science Engineering graduate" Seeking for a position in
          the field of Software Engineering or related position which offers key
          participation, team oriented tasks, immediate challenges and career
          opportunity.
        </p>
      </div>
      <div className="head-img">
        <div>
          <div className="tech-icon">
            <img src={reactlogo} alt="react" />
          </div>
          {/* <img src="../assets/images/logo192.png" alt="icon" /> */}
          <img src={lap} alt="logo" />
        </div>
        <div>
          <div className="tech-icon">
            <img src={jslogo} alt="" />
          </div>
          <div className="tech-icon">
            <img src={csslogo} alt="" />
          </div>
          <div className="tech-icon">
            <img src={nodelogo} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Head;
