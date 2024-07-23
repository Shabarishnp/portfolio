import React from "react";
import ICEBPGS from "../assets/images/gram.png";
import Intern from "../assets/images/mouse.png";
import Transaction from "../assets/images/transaction.png";
import { TbBrandGithub } from "react-icons/tb";
import "./Projects.css";

const Projects = () => {
  return (
    <section id="projects" className="projects-container">
      <div className="section-title">
        <h1>Projects :</h1>
        <h2>Some Things I have Built</h2>
      </div>
      <div className="projects-content">
        {/* ============ Project One Start ================ */}
        <div className="project">
          <div className="project-image">
            <img src={ICEBPGS} alt="Final_year_project" />
            <div className="overlay"></div>
          </div>

          <div className="project-details">
            <div>
              <p className="project-category">01. Final Year Project</p>
              <h3 className="project-title">ICEBPGS</h3>
            </div>
            <p className="project-description">
              <span className="highlight">ICEBPGS</span> - (Identifiying and
              Classifying Eligible Benificiars for Gram Panchayat Government
              Schemes). A Gram Panchayat’s Government Schemes Web Application,{" "}
              <span className="highlight">Backend:</span> Python Language using
              Django Framework with MongoDB.
            </p>
            <ul className="project-tech-one">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Python</li>
              <li>Django</li>
              <li>MongoDB</li>
              <div className="project-links">
                <a href="#true" target="_blank" rel="noopener noreferrer">
                  <TbBrandGithub />
                </a>
              </div>
            </ul>
          </div>
        </div>
        {/* ============ Project One End ================ */}
        {/* ============ Project Two Start ================ */}
        <div className="project">
          <div className="project reverse">
            <div className="project-image">
              <img src={Intern} alt="Intern-project" />
              <div className="overlay"></div>
            </div>
          </div>

          <div className="project-details">
            <div>
              <p className="project-category">02. Intership Project</p>
              <h3 className="project-title">Board_Game</h3>
            </div>
            <p className="project-description">
              A simple Mouse and Cheese Board Game in{" "}
              <span className="highlight">Vanilla JS</span>. This is{" "}
              <span className="highlight">DOM</span> based board game, where
              mouse will catch the cheese.
            </p>
            <ul className="project-tech">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>NodeJS</li>
              <div className="project-links">
                <a href="#true" target="_blank" rel="noopener noreferrer">
                  <TbBrandGithub />
                </a>
              </div>
            </ul>
          </div>
        </div>
        {/* ============ Project Two End ================ */}
        {/* ============ Project Three Start ================ */}
        <div className="project">
          <div className="project-image-three">
            <img src={Transaction} alt="Transaction_app" />
            <div className="overlay"></div>
          </div>
          <div className="project-details">
            <div>
              <p className="project-category">03. Course Project</p>
              <h3 className="project-title">Transaction Dashboard</h3>
            </div>
            <p className="project-description">
              Developed a responsive Transaction Dashboard using{" "}
              <span className="highlight">React</span> and{" "}
              <span className="highlight">Material-UI</span>, integrated with a
              backend API. <span className="highlight">Features :</span>{" "}
              Implemented a search bar and month selection to filter
              transactions. Displayed transaction data in a table with
              pagination controls. Visualized transaction statistics using
              dynamic bar charts. Styled components with custom CSS for a
              polished user interface.{" "}
            </p>
            <ul className="project-tech">
              <li>MongoDB</li>
              <li>Express</li>
              <li>React</li>
              <li>NodeJs</li>
              <div className="project-links">
                <a href="#true" target="_blank" rel="noopener noreferrer">
                  <TbBrandGithub />
                </a>
              </div>
            </ul>
          </div>
        </div>
        {/* ============ Project Three End ================ */}
      </div>
    </section>
  );
};

export default Projects;
