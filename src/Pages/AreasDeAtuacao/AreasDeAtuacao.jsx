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

const jobDescriptionUm = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod necessitatibus commodi quia ex. Quae illum quibusdam voluptate ducimus quaerat consequatur sunt est suscipit, aspernatur tempore rerum qui, cum error dolorem!",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod necessitatibus commodi quia ex. Quae illum quibusdam voluptate ducimus quaerat consequatur sunt est suscipit, aspernatur tempore rerum qui, cum error dolorem!",
];

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
          span="Cível"
          title="Direito Cível"
          paragraphs={text.empresarial.paragraph}
          mainClass="jobDescription listText"
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
          span="Texto descritivo"
          title="Direito Civil"
          paragraphs={jobDescriptionUm}
          mainClass="reverse"
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
        >
          <ContatcButton
            textButton={"Agendar um horário"}
            linkButton={"#"}
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
