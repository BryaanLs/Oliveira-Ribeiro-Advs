/* eslint-disable react/prop-types */
import React from "react";
import "./JobDescription.css";

const JobDescription = ({
  span,
  title,
  paragraphs,
  mainClass,
  imgSrc,
  imgAlt,
  reverse,
  children,
}) => {
  return (
    <>
      <div className={`${mainClass} main-content`}>
        <div className="textContent">
          <span>{span}</span>
          <h2>{title}</h2>
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          {children}
        </div>
        <img src={imgSrc} alt={imgAlt} />
      </div>
    </>
  );
};
export default JobDescription;
