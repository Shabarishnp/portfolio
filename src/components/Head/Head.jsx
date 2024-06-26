import React from "react";
import "./Head.css";
import reactlogo from "../assets/images/logo192.png";
import lap from "../assets/images/laptop.avif";
import jslogo from "../assets/images/javasciprt.jpg";
import csslogo from "../assets/images/css.png";
import nodelogo from "../assets/images/node.png";

const Head = () => {
  return (
    <section className="head-container">
      <div className="head-content">
        <h2>Hello...! This is Shabarish N P</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          neque omnis dolores necessitatibus! Distinctio a ea praesentium, vel
          aperiam animi odit alias magnam iusto earum pariatur numquam vitae,
          provident ducimus.
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
