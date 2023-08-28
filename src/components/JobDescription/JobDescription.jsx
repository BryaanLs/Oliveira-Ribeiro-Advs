/* eslint-disable react/prop-types */
import React from "react";
import "./JobDescription.css";
import BoxAnimation from "../BoxAnimation/BoxAnimation";

const JobDescription = ({
  span,
  title,
  paragraphs,
  mainClass,
  imgSrc,
  imgAlt,
  children,
  animationText,
  animationImg,
}) => {
  return (
    <>
      <div className={`${mainClass} main-content`}>
        <div className="textContent">
          <BoxAnimation animacao={animationText}>
            <span>{span}</span>
            <h2>{title}</h2>
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            {children}
          </BoxAnimation>
        </div>
        <BoxAnimation animacao={animationImg}>
          <img src={imgSrc} alt={imgAlt} loading="lazy" />
        </BoxAnimation>
      </div>
    </>
  );
};
export default JobDescription;
