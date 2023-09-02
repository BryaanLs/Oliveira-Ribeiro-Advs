import React from "react";
import "./Home.css";
import Carrossel from "../../components/Carrossel/Carrossel";
import Cards from "./Cards/Cards";
import JobDescription from "../../components/JobDescription/JobDescription";
import imgUm from "/src/assets/img/Rectangle 248.png";
import imgDois from "/src/assets/img/homenzinho.png";
import ContatcButton from "../../components/ContactButton/ContatcButton";
import MapsSession from "../../components/MapsSession/MapsSession";
import BoxAnimation from "../../components/BoxAnimation/BoxAnimation";
import {
  boxVariant,
  fromRightVariant,
  fromLeftVariant,
  scaleVariant,
  fromBottomVariant,
  fromBottomWithBlurVariant,
} from "/src/components/Animations.js";
import Container from "../../components/Container/Container";

const jobDescriptionUm = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod necessitatibus commodi quia ex. Quae illum quibusdam voluptate ducimus quaerat consequatur sunt est suscipit, aspernatur tempore rerum qui, cum error dolorem!",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod necessitatibus commodi quia ex. Quae illum quibusdam voluptate ducimus quaerat consequatur sunt est suscipit, aspernatur tempore rerum qui, cum error dolorem!",
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
          span="Texto descritivo"
          title="Direito Civil"
          paragraphs={jobDescriptionUm}
          mainClass="jobDescription"
          imgSrc={imgUm}
          imgAlt="img teste"
        ></JobDescription>
      </Container>

      <Container containerBg="bgCinza">
        <JobDescription
          animationText={fromRightVariant}
          animationImg={fromLeftVariant}
          span="Texto descritivo"
          title="Direito Civil"
          paragraphs={jobDescriptionUm}
          mainClass="reverse"
          imgSrc={imgUm}
          imgAlt="img teste"
        ></JobDescription>
      </Container>

      <Container>
        <JobDescription
          animationText={fromLeftVariant}
          animationImg={fromRightVariant}
          span="Texto descritivo"
          title="Direito Civil"
          paragraphs={jobDescriptionUm}
          mainClass="jobDescription"
          imgSrc={imgUm}
          imgAlt="img teste"
          reverse={""}
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
          <MapsSession />
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
