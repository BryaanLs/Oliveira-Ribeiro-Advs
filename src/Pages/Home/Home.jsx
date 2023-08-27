import React from "react";
import "./Home.css";
import Carrossel from "../../components/Carrossel/Carrossel";
import Cards from "./Cards/Cards";
import JobDescription from "../../components/JobDescription/JobDescription";
import imgUm from "/src/assets/img/Rectangle 248.png";
import ContatcButton from "../../components/ContactButton/ContatcButton";
import MapsSession from "../../components/MapsSession/MapsSession";

const jobDescriptionUm = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod necessitatibus commodi quia ex. Quae illum quibusdam voluptate ducimus quaerat consequatur sunt est suscipit, aspernatur tempore rerum qui, cum error dolorem!",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod necessitatibus commodi quia ex. Quae illum quibusdam voluptate ducimus quaerat consequatur sunt est suscipit, aspernatur tempore rerum qui, cum error dolorem!",
];

const Home = () => {
  return (
    <>
      <section className="container home">
        <Carrossel />
      </section>

      <section className="container bgSecondSession">
        <Cards />
      </section>

      <section className="container">
        <JobDescription
          span="Texto descritivo"
          title="Direito Civil"
          paragraphs={jobDescriptionUm}
          mainClass="jobDescription"
          imgSrc={imgUm}
          imgAlt="img teste"
        ></JobDescription>
      </section>

      <section className="container bgCinza">
        <JobDescription
          span="Texto descritivo"
          title="Direito Civil"
          paragraphs={jobDescriptionUm}
          mainClass="reverse"
          imgSrc={imgUm}
          imgAlt="img teste"
        ></JobDescription>
      </section>

      <section className="container">
        <JobDescription
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
      </section>

      <section className="container bgMaps">
        <MapsSession />
      </section>
    </>
  );
};

export default Home;
