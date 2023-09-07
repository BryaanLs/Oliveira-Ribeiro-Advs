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
} from "../../components/Animations";
import ContainerPicture from "../../components/ContainerPicture/ContainerPicture";
import imgUm from "../../assets/img/nossoEscritorioHomi.png";

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
            <ContactButton textButton="Enviar Mensagem" />
          </MapsSession>
        </BoxAnimation>
      </Container>

      <Container containerBg="bgTwoOurOffice">
        <div className="main-content">
          <BoxAnimation animacao={fromBottomVariant}>
            <h1>Lorem ipsum dolor</h1>
          </BoxAnimation>
        </div>
      </Container>

      <Container>
        <ContainerPicture
          title="Ética, transparência e respeito."
          p1="O advogado deve proceder de forma que o torne merecedor de respeito e que contribua para o prestígio da classe e da advocacia."
          p2="
          (Estatuto da OAB, art. 31)."
          p3="Dr. Gabriel Oliveira"
          span="OAB 12.345 SP"
          srcImg={imgUm}
          animacaoUm={fromLeftVariant}
          animacaoDois={fromRightVariant}
          addClass="normal"
        ></ContainerPicture>
      </Container>

      <Container>
        <ContainerPicture
          title="Ética, transparência e respeito."
          p1="O advogado deve proceder de forma que o torne merecedor de respeito e que contribua para o prestígio da classe e da advocacia."
          p2="
          (Estatuto da OAB, art. 31)."
          p3="Dr. Gabriel Oliveira"
          span="OAB 12.345 SP"
          srcImg={imgUm}
          animacaoUm={fromRightVariant}
          animacaoDois={fromLeftVariant}
          addClass="reversePic"
        ></ContainerPicture>
      </Container>
    </>
  );
};

export default NossoEscritorio;
