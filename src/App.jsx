// import logo from './logo.svg';
import "./App.css";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Head from "./components/Head/Head";
import Skills from "./components/Skills/Skills";
import Education from "./components/Education/Education";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";
const App = () => {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    // >
    <>
      <Navbar />
      <div className="container">
        <Head />
        <Skills />
        <Education />
        <ContactMe />
      </div>
      <Footer />
    </>

    // Learn React
    //     </a>
    //   </header>
    // </div>
  );
};

export default App;
