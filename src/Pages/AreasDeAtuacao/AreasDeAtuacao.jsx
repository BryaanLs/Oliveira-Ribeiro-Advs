import React from "react";
import "./AreasDeAtuacao.css";
import JobDescription from "../../components/JobDescription/JobDescription";
import {
  fromRightVariant,
  fromLeftVariant,
} from "/src/assets/variablesJs/Animations.js";
import ContatcButton from "../../components/ContactButton/ContatcButton";
import Container from "../../components/Container/Container";
import ListText from "../../components/ListText/ListText";
import { text } from "/src/assets/variablesJs/atuationText.js";

const AreasDeAtuacao = () => {
  return (
    <>
      <div className="container bgHero atuacao">
        <div className="main-content">
          <h1>Conheça Nossos Campos de Atuação</h1>
        </div>
      </div>

      <Container>
        <JobDescription
          animationText={fromLeftVariant}
          animationImg={fromRightVariant}
          span="Empresarial"
          title="Direito Empresarial"
          paragraphs={text.empresarial.paragraph}
          mainClass="jobDescription listTextConfig"
        >
          <ListText
            listLeft={text.empresarial.listLeft}
            listRight={text.empresarial.listRight}
          />
        </JobDescription>
      </Container>

      <Container containerBg="bgCinza">
        <JobDescription
          animationText={fromRightVariant}
          animationImg={fromLeftVariant}
          span="Imobiliário"
          title="Direito Imobiliário"
          paragraphs={text.imobiliario.paragraph}
          mainClass="jobDescription listTextConfig"
        >
          <ListText
            listLeft={text.imobiliario.listLeft}
            listRight={text.imobiliario.listRight}
          />
        </JobDescription>
      </Container>

      <Container>
        <JobDescription
          animationText={fromLeftVariant}
          animationImg={fromRightVariant}
          span="Civil"
          title="Direito Civil"
          paragraphs={text.Civil.paragraph}
          mainClass="jobDescription listTextConfig"
        >
          <ListText
            listLeft={text.Civil.listLeft}
            listRight={text.Civil.listRight}
          />
          <ContatcButton
            textButton={"Agendar um horário"}
            linkButton="https://api.whatsapp.com/send?phone=+5511975950351&text=Olá, gostaria de tirar algumas dúvidas!"
            target="_blank"
          />
        </JobDescription>
      </Container>

      <Container containerBg="bgFinalAtuacao">
        <div className="main-content">
          <h2>Atuamos com ética, transparência e respeito.</h2>
          <p>
            O advogado deve proceder de forma que o torne merecedor de respeito
            e que contribua para o prestígio da classe e da advocacia. (Estatuto
            da OAB, art. 31).
          </p>
        </div>
      </Container>
    </>
  );
};

export default AreasDeAtuacao;
