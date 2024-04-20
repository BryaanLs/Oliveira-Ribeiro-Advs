/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./Advogados.css";
import Container from "../../components/Container/Container";
import ContainerPicture from "../../components/ContainerPicture/ContainerPicture";
import drgabrielbigscale from "../../assets/img/drgabrielbigscale.webp";
import {
  fromLeftVariant,
  fromRightVariant,
} from "/src/assets/variablesJs/Animations.js";
import casinha from "../../assets/img/casinhaIcone.svg";
import pessoas from "../../assets/img/pessoasIcone.svg";
import caixa from "../../assets/img/caixaIcone.svg";
import CvContent from "../../components/cvContent/CvContent.jsx";
import contentText from "../../components/cvContent/contentText.js";

const Advogados = () => {
  return (
    <>
      <div className="container bgHeroSocios ourOffice">
        <div className="main-content">
          <h1>Conheça os advogados do escritório</h1>
          <h2>Oliveira Ribeiro Advogados Associados</h2>
        </div>
      </div>

      <Container containerBg="socios">
        <CvContent
          professionalName={contentText[0].gabriel.name}
          oab={contentText[0].gabriel.span}
          professionalProfile={contentText[0].gabriel.profile}
          activity={contentText[0].gabriel.activity}
        ></CvContent>
      </Container>

      <Container classContainer="socios" containerBg="socios-reverse">
        <CvContent
          professionalName={contentText[1].maria.name}
          oab={contentText[1].maria.span}
          professionalProfile={contentText[1].maria.profile}
          activity={contentText[1].maria.activity}
          addClass="cv-reverse"
        ></CvContent>
      </Container>

      <Container containerBg="socios">
        <CvContent
          professionalName={contentText[2].diene.name}
          oab={contentText[2].diene.span}
          professionalProfile={contentText[2].diene.profile}
          activity={contentText[2].diene.activity}
        ></CvContent>
      </Container>

      <Container classContainer="socios" containerBg="socios-reverse">
        <CvContent
          professionalName={contentText[3].aurea.name}
          oab={contentText[3].aurea.span}
          professionalProfile={contentText[3].aurea.profile}
          activity={contentText[3].aurea.activity}
          addClass="cv-reverse"
        ></CvContent>
      </Container>
      <Container containerBg="itaimBibi">
        <p>
          <a
            href="https://www.google.com/maps/dir//Oliveira+Ribeiro+Advogados+Av.+S%C3%A3o+Gabriel,+149+CEP:,+01435-001+-+Conjunto+1004+-+Itaim+Bibi+S%C3%A3o+Paulo+-+SP+01435-001/@-23.5820347,-46.6706954,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x94ce575f81aba179:0x81574f9a30337622"
            target="_blank"
          >
            Avenida São Gabriel, nº 149, Conjunto 1004, CEP: 01435-001, Itaim
            Bibi, São Paulo/SP
          </a>
        </p>
      </Container>
    </>
  );
};

export default Advogados;
