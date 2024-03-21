/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */
import React from "react";
import "./Menu.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/img/Logo-OliveiraAdvs.svg";

const Menu = ({ handleClickMenu }) => {
  return (
    <div className="menu">
      <div className="main-content">
        <div>
          <a
            href="https://api.whatsapp.com/send?phone=+5511975950351&text=Olá, gostaria de tirar algumas dúvidas!"
            target="_blank"
            className="logoMenu"
          >
            <img src={logo} alt="logo" width="110px" height="110px" />
          </a>
        </div>

        <nav className="menuNavigation">
          <NavLink to="/" onClick={handleClickMenu} end>
            Página Inicial
          </NavLink>
          <NavLink to="atuacao" onClick={handleClickMenu}>
            Áreas de Atuação
          </NavLink>
          <NavLink to="escritorio" onClick={handleClickMenu}>
            Nosso Escritório
          </NavLink>
          <NavLink to="advogados" onClick={handleClickMenu}>
            Advogados
          </NavLink>
        </nav>
        <div className="funcionamento">
          <p>Seg a Sex - 8h às 17h | (11) 97595-0351</p>
          <a
            href="https://api.whatsapp.com/send?phone=+5511975950351&text=Olá, gostaria de tirar algumas dúvidas!"
            target="_blank"
          >
            entre em contato
          </a>
        </div>
      </div>
    </div>
  );
};

export default Menu;
