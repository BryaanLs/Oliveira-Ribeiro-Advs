import React from "react";
import { NavLink } from "react-router-dom";
import ContatcButton from "../ContactButton/ContatcButton";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="container">
      <div className="nav main-content">
        <div className="nav-navlink">
          <h3>Navegação</h3>
          <ul>
            <li>
              <NavLink to="/" end>
                Página Inicial
              </NavLink>
            </li>
            <li>
              <NavLink to="Áreas-de-atuação">Áreas de Atuação</NavLink>
            </li>
            <li>
              <NavLink to="Nosso-Escritório">Nosso-Escritório</NavLink>
            </li>
            <li>
              <NavLink to="Sócios">Sócios</NavLink>
            </li>
          </ul>
          <ContatcButton
            textButton={"Fale com um especialista"}
            linkButton={"#"}
          />
        </div>
        <div className="footerDescription">
          <h3>
            &copy;2023 Gabriel Oliveira Advocacia & Consultoria Jurídica.  Todos
            os direitos reservados.
          </h3>
          <p>
            Esse site não faz parte do Google, Inc. , não oferece nenhum tipo de
            serviço oficial do governo. Atuamos somente e exclusivamente com
            serviços jurídicos.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
