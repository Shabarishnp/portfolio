import React from "react";
import "./ContactMe.css";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import mail from "../assets/images/email.png";
import git from "../assets/images/github.jpg";
import ContactForm from "./ContactForm/ContactForm";

const ContactMe = () => {
  return (
    <section id="contactme" className="contact-container">
      <h5>Contact Me</h5>
      <div className="contact-content">
        <div style={{ flex: 1 }}>
          <ContactInfoCard iconUrl={mail} text="shabarishnp111@gmail.com" />
          <ContactInfoCard
            iconUrl={git}
            text="https://github.com/Shabarishnp"
          />
        </div>
        <div style={{ flex: 1 }}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
export default ContactMe;
