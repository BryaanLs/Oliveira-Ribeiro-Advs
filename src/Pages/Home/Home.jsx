import React from "react";
import "./Home.css";
import Carrossel from "../../components/Carrossel/Carrossel";
import Cards from "./Cards/Cards";
import JobDescription from "../../components/JobDescription/JobDescription";
import DCivil from "/src/assets/img/Dcivil.webp";
import Dempresarial from "/src/assets/img/Dempresarial.webp";
import Dfamilia from "/src/assets/img/Dfamilia.webp";
import imgDois from "/src/assets/img/homenzinho.png";
import ContatcButton from "../../components/ContactButton/ContatcButton";
import MapsSession from "../../components/MapsSession/MapsSession";
import BoxAnimation from "../../components/BoxAnimation/BoxAnimation";
import {
  fromRightVariant,
  fromLeftVariant,
  fromBottomWithBlurVariant,
} from "/src/components/Animations.js";
import Container from "../../components/Container/Container";

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
          span="Família"
          title="Direito Familiar"
          paragraphs={txtDfamiliar}
          mainClass="jobDescription"
          imgSrc={Dfamilia}
          imgAlt="imagem representando familia, a imagem contém as mãos de um bebe sob a mão de seus pais"
        >
          <ContatcButton
            textButton={"Agendar um horário"}
            linkButton={"#"}
            target="_blank"
          />
        </JobDescription>
      </Container>

      <Container containerBg="bgSecondSession">
        <BoxAnimation animacao={fromBottomWithBlurVariant}>
          <MapsSession
            title="O escritório Oliveira Ribeiro Advs"
            imgLocalizacao={imgLocalizacao}
            imgCelular={imgCelular}
            imgEmail={imgEmail}
          />
        </BoxAnimation>
      </Container>

      <section className="container">
        <div className="main-content whiteSession">
          <BoxAnimation animacao={fromLeftVariant}>
            <h2>Atuamos com ética, transparência e respeito.</h2>
          </BoxAnimation>
          <BoxAnimation animacao={fromRightVariant}>
            <p>
              O advogado deve proceder de forma que o torne merecedor de
              respeito e que contribua para o prestígio da classe e da
              advocacia. &ldquo; (Estatuto da OAB, art. 31).&rdquo;
            </p>
          </BoxAnimation>
        </div>
      </section>

      <Container containerBg="bgMaps">
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
