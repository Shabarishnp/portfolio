import React, { useRef } from "react";
import "./Education.css";
import { EDUCATION } from "../../utils/data";
import EducationCard from "./EducationCard/EducationCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Education = () => {
  const sliderRef = useRef();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const sliderRight = () => {
    sliderRef.current.slickNext();
  };

  const sliderLeft = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <section className="education-container">
      <h5 className="edu">Education Details</h5>

      <div className="education-content">
        <div className="arrow-right" onClick={sliderRight}>
          <span className="material-icons-outlined">chevron_right</span>
        </div>
        <div className="arrow-left" onClick={sliderLeft}>
          <span className="material-icons-outlined">chevron_left</span>
        </div>

        <Slider ref={sliderRef} {...settings}>
          {EDUCATION.map((item) => (
            <EducationCard key={item.title} details={item} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Education;
