import React from "react";
import "./Cards.css";
import livroSVG from "/src/assets/img/livro.svg";
import marteloSVG from "/src/assets/img/martelinho.svg";
import pessoaSVG from "/src/assets/img/pessoaEPapel.svg";
import BoxAnimation from "../BoxAnimation/BoxAnimation";
import DataTime from "../DataTime/DataTime";
import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Cards = ({ animationText }) => {
  return (
    <>
      <div className="cards main-content">
        <div className="card">
          <img
            src={marteloSVG}
            alt="icone de um livro"
            width="50"
            height="50"
          />
          <h2>Direito Civil, Direito Empresarial e Direito Imobiliário</h2>
          {/* <p>Direito Cível, Direito Empresarial e Direito Imobiliário</p> */}
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
          <h2>Qual é o nosso objetivo?</h2>
        </BoxAnimation>

        <BoxAnimation animacao={animationText}>
          <p>
            Buscamos uma parceria entre nós, advogados e você, cliente, com o
            objetivo de criar um elo próximo, seguro e confiável durante todo o
            acompanhamento jurídico do seu caso. Simplificamos a linguagem
            jurídica tornando mais acessível ao seu entendimento, quebramos as
            barreiras das formalidades para de fato, personalizar o atendimento
            que você procura na resolução do seu problema.
          </p>
        </BoxAnimation>
      </div>
    </>
  );
};

export default Cards;
