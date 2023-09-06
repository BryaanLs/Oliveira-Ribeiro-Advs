import React from "react";
import "./NossoEscritorio.css";
import Container from "../../components/Container/Container";
import MapsSession from "../../components/MapsSession/MapsSession";
import ContactButton from "../../components/ContactButton/ContatcButton";
import imgLocalizacao from "../../assets/img/localizacao-Yellow.svg";
import imgCelular from "../../assets/img/celular-Yellow.svg";
import imgEmail from "../../assets/img/email-Yellow.svg";
import BoxAnimation from "../../components/BoxAnimation/BoxAnimation";
import { fromBottomWithBlurVariant } from "../../components/Animations";

const NossoEscritorio = () => {
  return (
    <>
      <div className="container bgHero ourOffice">
        <div className="main-content">
          <h1>Venha nos visitar em nossa unidade no Itaim Bibi</h1>
        </div>
      </div>

      <Container>
        <BoxAnimation animacao={fromBottomWithBlurVariant}>
          <MapsSession
            title="Onde você poderá nos encontrar?"
            addClass="reverseMaps"
            textSpan="Confira no mapa ao lado!"
            imgLocalizacao={imgLocalizacao}
            imgCelular={imgCelular}
            imgEmail={imgEmail}
          >
            <ContactButton textButton="Enviar Mensagem" />
          </MapsSession>
        </BoxAnimation>
      </Container>

      <Container containerBg="bgTwoOurOffice">
        <div className="main-content">
          <h1>Lorem ipsum dolor</h1>
        </div>
      </Container>
    </>
  );
};

export default NossoEscritorio;
