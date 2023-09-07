/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
import logo from "../../assets/img/Logo-OliveiraAdvs.svg";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <footer className="container">
        <div className="nav main-content">
          <div className="logoRodape">
            <img src={logo} alt="logo da oliveira ribeiro advs" />
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
                <NavLink to="Áreas-de-atuação" onClick={scrollToTop}>
                  Áreas de Atuação
                </NavLink>
              </li>
              <li>
                <NavLink to="Nosso-Escritório" onClick={scrollToTop}>
                  Nosso-Escritório
                </NavLink>
              </li>
              <li>
                <NavLink to="Sócios" onClick={scrollToTop}>
                  Sócios
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="adress">
            <h3>São Paulo -SP</h3>
            <p>
              Avenida São Gabriel, nº 149, Conjunto 1004, CEP: 01435-001, Itaim
              Bibi, São Paulo/SP
            </p>
          </div>

          <div className="social">
            <h3>Nos acompanhe</h3>
            <div className="socialIcons"></div>
            <a href="mailto:gabriel@oliveiraribeiroadvs.com.br" target="_blank">
              gabriel@oliveiraribeiroadvs.com.br
            </a>
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
