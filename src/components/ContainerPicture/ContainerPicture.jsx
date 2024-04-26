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

// USE EXAMPLE:

{
  /* <ContainerPicture
  title="Gabriel Lara de Oliveira Ribeiro"
  p1="O advogado deve proceder de forma que o torne merecedor de respeito e que contribua para o prestígio da classe e da advocacia."
  p2="
          (Estatuto da OAB, art. 31)."
  srcImg={drgabrielbigscale}
  animacaoUm={fromLeftVariant}
  animacaoDois={fromRightVariant}
  addClass="socios"
>
  <ul>
    <li>
      <img
        src={casinha}
        alt="ícone de casa"
        width="34px"
        height="34px"
        loading="lazy"
      />
      Direito Imobiliário
    </li>
    <li>
      <img
        src={pessoas}
        alt="ícone de três pessoas juntas"
        width="34px"
        height="34px"
        loading="lazy"
      />
      Direito Civil
    </li>
    <li>
      <img
        src={caixa}
        alt="íconde de um caixa de dinheiro"
        width="34px"
        height="34px"
        loading="lazy"
      />
      Direito Empresarial
    </li>
  </ul>
</ContainerPicture>; */
}
