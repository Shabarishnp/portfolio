import React from "react";
import "./EducationCard.css";

const EducationCard = ({ details }) => {
  return (
    <div className="study-education-card">
      <h5>{details.title}</h5>
      <h6>{details.subtitle}</h6>
      <div className="study-time">{details.year}</div>
      <ul>
        {details.description.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default EducationCard;
