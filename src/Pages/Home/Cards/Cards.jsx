import React from "react";
import "./Cards.css";
import livroSVG from "/src/assets/img/livro.svg";
import marteloSVG from "/src/assets/img/martelinho.svg";
import pessoaSVG from "/src/assets/img/pessoaEPapel.svg";
import BoxAnimation from "../../../components/BoxAnimation/BoxAnimation";
import DataTime from "../../../components/DataTime/DataTime";
import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Cards = ({ animationText }) => {
  return (
    <>
      <div className="cards main-content">
        <div className="card">
          <img src={livroSVG} alt="icone de um livro" width="50" height="50" />
          <h2>Dr. Gabriel Oliveira Ribeiro</h2>
          <p>OAB n° 449575/SP</p>
          <NavLink to="escritorio">Conheça mais</NavLink>
        </div>

        {/* <div className="card">
          <img
            src={marteloSVG}
            alt="icone de um martelo batendo"
            width="50"
            height="50"
          />
          <h2>Direito Cível, Direito Empresarial e Direito Imobiliário </h2>
        </div> */}
      </div>
      <div className="cards-description main-content">
        <BoxAnimation animacao={animationText}>
          <h2>Confira as áreas de atuação do nosso escritório</h2>
        </BoxAnimation>

        <BoxAnimation animacao={animationText}>
          <p>
            6 anos de experiência em Direito Cível, Empresarial e Imobiliario.
          </p>
        </BoxAnimation>
      </div>
    </>
  );
};

export default Cards;
