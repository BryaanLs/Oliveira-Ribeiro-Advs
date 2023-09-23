import React from "react";
import "./Home.css";
import Carrossel from "../../components/Carrossel/Carrossel";
import Cards from "./Cards/Cards";
import JobDescription from "../../components/JobDescription/JobDescription";
import DCivil from "/src/assets/img/Dcivil.webp";
import Dempresarial from "/src/assets/img/Dempresarial.webp";
import DImobiliario from "/src/assets/img/DImobiliario.webp";
import imgDois from "/src/assets/img/homenzinho.png";
import ContatcButton from "../../components/ContactButton/ContatcButton";
import MapsSession from "../../components/MapsSession/MapsSession";
import BoxAnimation from "../../components/BoxAnimation/BoxAnimation";
import {
  fromRightVariant,
  fromLeftVariant,
  fromBottomWithBlurVariant,
} from "/src/assets/variablesJs/Animations.js";
import Container from "../../components/Container/Container";

import calendar from "../../assets/img/calendario.svg";
import excelencia from "../../assets/img/excelencia.svg";
import maoVerificado from "../../assets/img/maoVerificado.svg";
import verificado from "../../assets/img/verificado.svg";
import imgLocalizacao from "../../assets/img/localização.svg";
import imgCelular from "../../assets/img/celular.svg";
import imgEmail from "../../assets/img/email.svg";

const txtDcivil = [
  "O Direito Civil é uma das principais áreas do direito no Brasil, pois carrega as bases para a convivência em sociedade em todos os âmbitos da vida.",
  "O Direito Civil é regido pelo Código Civil, que, por sua vez, norteia todas as relações em sociedade. Desse modo, ele abrange 100% da população e permeia todas as relações, de divórcios a contratos de compra e venda, heranças etc.",
];

const txtDempresarial = [
  "O Direito Empresarial é uma área do direito privado responsável por tratar relações de interesses das empresas e empreendedores.",
  "O direito privado aborda os direitos particulares, ou seja, as relações entre as partes e suas vidas privadas. Seu principal objetivo é regularizar a vida em sociedade, defendendo a ordem e definindo os direitos e as obrigações dos indivíduos.",
];

const txtDfamiliar = [
  "O Direito de Família trata de assuntos que afetam, direta ou indiretamente, a vida de todos.",
  "Temas como casamento, união estável, divórcio, alimentos, guarda de filhos, partilha de bens e direito de visita são experiências vivenciadas por grande parte da população.",
];

const Home = () => {
  return (
    <>
      <Container containerBg="home">
        <Carrossel />
      </Container>

      <Container containerBg="bgSecondSession">
        <Cards animationText={fromBottomWithBlurVariant} />
      </Container>

      <Container>
        <JobDescription
          animationText={fromLeftVariant}
          animationImg={fromRightVariant}
          span="Sociedade"
          title="Direito Civil"
          paragraphs={txtDcivil}
          mainClass="jobDescription"
          imgSrc={DCivil}
          imgAlt="Imagem com uma população"
        ></JobDescription>
      </Container>

      <Container containerBg="bgCinza">
        <JobDescription
          animationText={fromRightVariant}
          animationImg={fromLeftVariant}
          span="Empresas & Empreendedores"
          title="Direito Empresarial"
          paragraphs={txtDempresarial}
          mainClass="reverse"
          imgSrc={Dempresarial}
          imgAlt="imagem com um escritório"
        ></JobDescription>
      </Container>

      <Container>
        <JobDescription
          animationText={fromLeftVariant}
          animationImg={fromRightVariant}
          span="Imóvel"
          title="Direito Imobiliário"
          paragraphs={txtDfamiliar}
          mainClass="jobDescription"
          imgSrc={DImobiliario}
          imgAlt="imagem com uma casa em um fim de tarde"
        >
          <ContatcButton
            textButton={"Agendar um horário"}
            linkButton={"#"}
            target="_blank"
          />
        </JobDescription>
      </Container>

      <Container containerBg="bgMaps">
        <BoxAnimation animacao={fromBottomWithBlurVariant}>
          <MapsSession
            title="O escritório Oliveira Ribeiro Advs"
            imgLocalizacao={imgLocalizacao}
            imgCelular={imgCelular}
            imgEmail={imgEmail}
            destaqueClass="destaqueTitleMaps"
          />
        </BoxAnimation>
      </Container>

      <section className="container">
        <div className="main-content whiteSession">
          <BoxAnimation animacao={fromLeftVariant}>
            <h2>Atuamos com ética, transparência e respeito.</h2>
          </BoxAnimation>
          <BoxAnimation animacao={fromRightVariant}>
            <div className="valores">
              <h3>Nossos Valores</h3>
              <ul>
                <li>
                  <div className="ballIcon">
                    <img
                      src={excelencia}
                      alt="icone de um livro"
                      loading="lazy"
                      width="50"
                      height="40"
                    />
                  </div>
                  <span>Excelência</span>
                </li>
                <li>
                  <div className="ballIcon">
                    <img
                      src={verificado}
                      alt="icone de verificado"
                      loading="lazy"
                      width="50"
                      height="40"
                    />
                  </div>
                  <span>Ética</span>
                </li>
                <li>
                  <div className="ballIcon">
                    <img
                      src={maoVerificado}
                      alt="icone de uma mão com um sinal positivo em cima"
                      loading="lazy"
                      width="50"
                      height="40"
                    />
                  </div>
                  <span>Empatia</span>
                </li>
                <li>
                  <div className="ballIcon">
                    <img
                      src={calendar}
                      alt="icone de um calendario"
                      loading="lazy"
                      width="50"
                      height="40"
                    />
                  </div>
                  <span>Agilidade</span>
                </li>
              </ul>
            </div>
          </BoxAnimation>
        </div>
      </section>

      <Container containerBg="bgFinalHome">
        <div className="aboutMe main-content">
          <BoxAnimation animacao={fromLeftVariant}>
            <div className="aboutMe-text">
              <h2>Conheça o Dr. Gabriel Oliveira</h2>
              <p>
                Graduado em Direito pela Universidade de São Paulo, o Dr.
                Gabriel atual na área do Direito há mais de 10 anos.
              </p>
            </div>
          </BoxAnimation>
          <BoxAnimation animacao={fromRightVariant}>
            <img src={imgDois} alt="" />
          </BoxAnimation>
        </div>
      </Container>
    </>
  );
};

export default Home;
