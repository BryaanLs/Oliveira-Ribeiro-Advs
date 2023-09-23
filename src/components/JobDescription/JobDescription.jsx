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

        {imgSrc && (
          <BoxAnimation animacao={animationImg}>
            <div className="zoomImg">
              <img
                src={imgSrc}
                alt={imgAlt}
                loading="lazy"
                width="350"
                height="267"
              />
            </div>
          </BoxAnimation>
        )}
      </div>
    </>
  );
};
export default JobDescription;
