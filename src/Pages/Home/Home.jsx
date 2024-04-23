import React from "react";
import "./Home.css";
import Carrossel from "../../components/Carrossel/Carrossel";
import Cards from "./Cards/Cards";
import JobDescription from "../../components/JobDescription/JobDescription";
import DCivil from "/src/assets/img/Dcivil.webp";
import Dempresarial from "/src/assets/img/Dempresarial.webp";
import DImobiliario from "/src/assets/img/DImobiliario.webp";
import drGabrielHome from "/src/assets/img/drGabrielHome.webp";
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
import { NavLink } from "react-router-dom";
import { text } from "../../assets/variablesJs/homeText";

const Home = () => {
  return (
    <>
      <Container containerBg="titleHome">
        <h2>
          Nossa premissa é o&nbsp;
          <span className="subTitleDestaque">atendimento responsável,</span>
          personalizado e humanizado do início ao fim.&nbsp;
          <span className="subTitleDestaque">Simplificamos </span> a linguagem
          jurídica, acolhendo seu problema.
          <span className="subTitleDescription">
            É você, conhecendo de verdade a prática jurídica do seu próprio
            caso, acompanhado sempre por nós!
          </span>
        </h2>
      </Container>
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
          paragraphs={text.Dcivil}
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
          paragraphs={text.Dempresarial}
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
          paragraphs={text.Dimobiliario}
          mainClass="jobDescription"
          imgSrc={DImobiliario}
          imgAlt="imagem com uma casa em um fim de tarde"
        >
          <ContatcButton
            textButton={"Agendar um horário"}
            linkButton="https://api.whatsapp.com/send?phone=+5511975950351&text=Olá, gostaria de tirar algumas dúvidas!"
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
          <BoxAnimation animacao={fromRightVariant}>
            <img
              src={drGabrielHome}
              width="269"
              height="336"
              loading="lazy"
              alt="foto do Dr.Gabriel"
            />
          </BoxAnimation>
          <div className="aboutMe-text">
            <h2>Dr. Gabriel Oliveira Ribeiro</h2>
            <p>
              Graduado em Direito pela FAAP - Fundação Armando Alvares Penteado,
              o Dr. Gabriel atual na áreas do Direito Civil, Familiar e
              Empresarial há mais de 6 anos.
            </p>
          </div>

          <NavLink to="escritorio">Veja mais sobre nosso escritório</NavLink>
        </div>
      </Container>
    </>
  );
};

export default Home;
