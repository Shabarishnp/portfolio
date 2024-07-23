import React from "react";
import "./ContactInfoCard.css";

const ContactInfoCard = ({ iconUrl, text }) => {
  const isEmail = text.includes("@");
  const isUrl = text.startsWith("http");
  return (
    <div className="contact-details-card">
      <div className="icon">
        <img src={iconUrl} alt={text} />
      </div>
      {isEmail ? (
        <a href={`mailto:${text}`} className="contact-text">
          {text}
        </a>
      ) : isUrl ? (
        <a
          href={text}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-text"
        >
          {text}
        </a>
      ) : (
        <p className="contact-text">{text}</p>
      )}
    </div>
  );
};

export default ContactInfoCard;
