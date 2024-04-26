/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
import logo from "../../assets/img/Logo-OliveiraAdvs.svg";
import insta from "../../assets/img/insta.svg";
import whats from "../../assets/img/whats.svg";
import face from "../../assets/img/face.svg";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <footer className="container">
        <div className="nav main-content">
          <div className="logoRodape">
            <img
              src={logo}
              alt="logo da oliveira ribeiro advs"
              width="160px"
              height="129px"
            />
          </div>

          <div className="nav-navlink">
            <h3>Navegação</h3>
            <ul>
              <li>
                <NavLink to="/" end onClick={scrollToTop}>
                  Página Inicial
                </NavLink>
              </li>
              <li>
                <NavLink to="atuacao" onClick={scrollToTop}>
                  Áreas de Atuação
                </NavLink>
              </li>
              <li>
                <NavLink to="escritorio" onClick={scrollToTop}>
                  Nosso Escritório
                </NavLink>
              </li>
              <li>
                <NavLink to="advogados" onClick={scrollToTop}>
                  Advogados
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="adressContact">
            <div className="adress">
              <h3>São Paulo -SP</h3>
              <p>
                Avenida São Gabriel, nº 149, Conjunto 1004, CEP: 01435-001,
                Itaim Bibi, São Paulo/SP
              </p>
            </div>
            <div className="contact">
              <h3>Celular</h3>
              <p>+55 (11) 9 7595-0351</p>
              <p>+55 (11) 3074-0351</p>
            </div>
          </div>

          <div className="social">
            <div>
              <h3>Nos acompanhe</h3>
              <a
                href="mailto:gabriel@oliveiraribeiroadvs.com.br"
                target="_blank"
              >
                gabriel@oliveiraribeiroadvs.com.br
              </a>
            </div>
            <ul className="socialIcons">
              <li>
                <a
                  href="https://api.whatsapp.com/send?phone=+5511975950351&text=Ol%C3%A1,%20gostaria%20de%20tirar%20algumas%20d%C3%BAvidas!"
                  target="_blank"
                >
                  <img
                    src={whats}
                    alt="ícone do whats"
                    width="28px"
                    height="28px"
                    loading="lazy"
                  />
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <img
                    src={face}
                    alt="ícone do face"
                    width="28px"
                    height="28px"
                    loading="lazy"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/oliveiraribeiro_advs?igshid=MzRlODBiNWFlZA=="
                  target="_blank"
                >
                  <img
                    src={insta}
                    alt="ícone do insta"
                    width="28px"
                    height="28px"
                    loading="lazy"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      <div className="nextFusion">
        <div className="main-content nextContent">
          <p>
            &copy;2023. Oliveira Ribeiro Advogados. Todos os direitos
            reservados.
          </p>
          <p>
            Desenvolvido por
            <a href="http://nextfusion.tech" target="_blank" rel="noreferrer">
              Next Fusion
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
