import React from "react";
import "./Cards.css";
import livroSVG from "/src/assets/img/livro.svg";
import marteloSVG from "/src/assets/img/martelinho.svg";
import pessoaSVG from "/src/assets/img/pessoaEPapel.svg";

const Cards = () => {
  return (
    <>
      <div className="cards main-content">
        <div className="card">
          <img src={pessoaSVG} alt="" />
          <h2>Atendimento presencial</h2>
          <p>OAB n° 12.345/SP</p>
        </div>

        <div className="card">
          <img src={livroSVG} alt="" />
          <h2>Dr. Gabriel Oliveira</h2>
          <p>OAB n° 12.345/SP</p>
        </div>

        <div className="card">
          <img src={marteloSVG} alt="" />
          <h2>Direito da Família</h2>
          <p>Há 10 anos atuando em casos de Direito da Família</p>
        </div>
      </div>
      <div className="cards-description main-content">
        <h2>Confira as áreas de atuação do nosso escritório</h2>
        <p>
          10 anos de atuação no ramo de Direito da Família. Advogado
          especializado em inventário.
        </p>
      </div>
    </>
  );
};

export default Cards;
