/* eslint-disable react/prop-types */
import React from "react";
import "./CvContent.css";
import BoxAnimation from "../BoxAnimation/BoxAnimation";
import {
  fromRightVariant,
  fromLeftVariant,
  fromBottomWithBlurVariant,
} from "/src/assets/variablesJs/Animations.js";

const CvContent = ({
  professionalName,
  oab,
  professionalProfile,
  activity,
  addClass,
}) => {
  return (
    <div className={`cv-main-content main-content ${addClass}`}>
      <h2 className="cv-professional-name">
        {professionalName} <span>{oab}</span>
      </h2>
      <h3 className="professional-profile-title sub-title-h3">
        Perfil Profissional
      </h3>
      <ul className="professional-profile-list cv-list-style">
        {professionalProfile.map((text, i) => (
          <BoxAnimation key={i} animacao={fromRightVariant}>
            <li key={i}>{text}</li>
          </BoxAnimation>
        ))}
      </ul>
      <h3 className="sub-title-h3 activity-title">Áreas Atuantes</h3>
      <ul className="cv-list-style activity">
        {activity.map((text, i) => (
          <BoxAnimation key={i} animacao={fromRightVariant}>
            <li key={i}>{text}</li>
          </BoxAnimation>
        ))}
      </ul>
    </div>
  );
};

export default CvContent;
