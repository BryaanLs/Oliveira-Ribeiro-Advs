/* eslint-disable react/prop-types */
import React from "react";
import "./ContatcButton.css";

const ContatcButton = ({ textButton, linkButton, ...props }) => {
  return <a {...props} className="contactButton" href={linkButton}>{textButton}</a>;
};

export default ContatcButton;
