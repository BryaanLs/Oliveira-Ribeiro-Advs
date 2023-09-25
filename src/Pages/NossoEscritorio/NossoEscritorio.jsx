import React from "react";
import "./NossoEscritorio.css";
import Container from "../../components/Container/Container";
import MapsSession from "../../components/MapsSession/MapsSession";
import ContactButton from "../../components/ContactButton/ContatcButton";
import imgLocalizacao from "../../assets/img/localizacao-Yellow.svg";
import imgCelular from "../../assets/img/celular-Yellow.svg";
import imgEmail from "../../assets/img/email-Yellow.svg";
import BoxAnimation from "../../components/BoxAnimation/BoxAnimation";
import {
  fromBottomVariant,
  fromLeftVariant,
  fromRightVariant,
} from "/src/assets/variablesJs/Animations.js";
import ContainerPicture from "../../components/ContainerPicture/ContainerPicture";
import drGabriel from "../../assets/img/drgabrielbigscale.webp";
import officeVertical from "../../assets/img/officevertical.webp";
import { NavLink } from "react-router-dom";
import officeLeft from "/src/assets/img/officeleft.webp";
import officeRight from "/src/assets/img/officeright.webp";

const NossoEscritorio = () => {
  return (
    <>
      <div className="container bgHero ourOffice">
        <div className="main-content">
          <h1>Venha nos visitar em nossa unidade no Itaim Bibi</h1>
        </div>
      </div>

      <Container>
        <BoxAnimation animacao={fromBottomVariant}>
          <MapsSession
            title="Onde você poderá nos encontrar?"
            addClass="reverseMaps"
            textSpan="Confira no mapa ao lado!"
            imgLocalizacao={imgLocalizacao}
            imgCelular={imgCelular}
            imgEmail={imgEmail}
          >
            <ContactButton
              textButton="Enviar Mensagem"
              linkButton="https://api.whatsapp.com/send?phone=+5511975950351&text=Olá, gostaria de tirar algumas dúvidas!"
              target="_blank"
            />
          </MapsSession>
        </BoxAnimation>
      </Container>

      <Container containerBg="twoPics">
        <img src={officeLeft} width="678" height="494" alt="" />
        <img src={officeRight} width="678" height="494" alt="" />
      </Container>

      <Container>
        <ContainerPicture
          title="Ética, transparência e respeito."
          p1="O advogado deve proceder de forma que o torne merecedor de respeito e que contribua para o prestígio da classe e da advocacia."
          p2="
          (Estatuto da OAB, art. 31)."
          p3="Dr. Gabriel Oliveira"
          span="OAB 449575/SP"
          srcImg={drGabriel}
          animacaoUm={fromLeftVariant}
          animacaoDois={fromRightVariant}
          addClass="normal"
        ></ContainerPicture>
      </Container>

      <Container>
        <ContainerPicture
          title="Veja mais sobre nossas áreas de atuação"
          srcImg={officeVertical}
          animacaoUm={fromRightVariant}
          animacaoDois={fromLeftVariant}
          addClass="reversePic"
        >
          <div className="atuacoes">
            <ul>
              <li>Direito Cível</li>
              <li>Direto Empresarial</li>
              <li>Direito Imobiliário</li>
            </ul>
          </div>
          <NavLink to="Áreas-de-atuação">Ir para Áreas de Atuação</NavLink>
        </ContainerPicture>
      </Container>
    </>
  );
};

export default NossoEscritorio;
