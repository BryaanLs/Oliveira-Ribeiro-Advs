/* eslint-disable react/prop-types */
import React from "react";
import "./ContainerPicture.css";
import BoxAnimation from "../BoxAnimation/BoxAnimation";
import {
  fromLeftVariant,
  fromRightVariant,
} from "/src/assets/variablesJs/Animations.js";

const ContainerPicture = ({
  srcImg,
  addClass,
  title,
  p1,
  p2,
  p3,
  span,
  altImg,
  children,
  animacaoUm,
  animacaoDois,
}) => {
  return (
    <div className={`main-content containerPicture ${addClass}`}>
      <BoxAnimation animacao={animacaoUm}>
        <div className="descriptionPic">
          <h2>{title}</h2>
          {p1 && <p>{p1}</p>}
          {p2 && <p>{p2}</p>}
          {p3 && <p>{p3}</p>}
          {span && <span>{span}</span>}
          {children}
        </div>
      </BoxAnimation>
      <BoxAnimation animacao={animacaoDois}>
        <img
          src={srcImg}
          alt={altImg}
          width={300}
          height={450}
          loading="lazy"
        />
      </BoxAnimation>
    </div>
  );
};

export default ContainerPicture;
