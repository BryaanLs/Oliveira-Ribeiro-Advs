import React from "react";
import "./Socios.css";
import Container from "../../components/Container/Container";
import ContainerPicture from "../../components/ContainerPicture/ContainerPicture";
import imgUm from "../../assets/img/nossoEscritorioHomi.png";
import {
  fromLeftVariant,
  fromRightVariant,
} from "/src/assets/variablesJs/Animations.js";
import casinha from "../../assets/img/casinhaIcone.svg";
import pessoas from "../../assets/img/pessoasIcone.svg";
import caixa from "../../assets/img/caixaIcone.svg";

const Socios = () => {
  return (
    <>
      <div className="container bgHeroSocios ourOffice">
        <div className="main-content">
          <h1>Conheça os advogados do escritório</h1>
          <h2>Oliveira Ribeiro Advogados Associados</h2>
        </div>
      </div>

      <Container classContainer="socios">
        <ContainerPicture
          title="Ética, transparência e respeito."
          p1="O advogado deve proceder de forma que o torne merecedor de respeito e que contribua para o prestígio da classe e da advocacia."
          p2="
          (Estatuto da OAB, art. 31)."
          srcImg={imgUm}
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
              Direito Cível
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
        </ContainerPicture>
      </Container>
    </>
  );
};

export default Socios;
