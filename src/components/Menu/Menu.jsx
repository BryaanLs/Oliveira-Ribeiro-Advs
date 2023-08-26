import React from "react";
import "./Menu.css";
import { NavLink } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const Menu = ({ classMenu }) => {
  return (
    <div className="menu">
      <div className="main-content">
        <div>
          <a href="#" className="logoMenu">
            <img
              src="src\assets\img\Logo-OliveiraAdvs.svg"
              alt="logo"
              width={110}
              height={110}
            />
          </a>
        </div>

        <nav className="menuNavigation">
          <NavLink to="/" end>Página Inicial</NavLink>
          <NavLink to="Áreas-de-atuação">Áreas de Atuação</NavLink>
          <NavLink to="Nosso-Escritório">Nosso Escritório</NavLink>
          <NavLink to="Sócios">Sócios</NavLink>
        </nav>
        
        <div className="funcionamento">
          <p>Seg a Sex - 9h às 18h | (11) 99999-9999</p>
          <a href="#">entre em contato</a>
        </div>
      </div>
    </div>
  );
};

export default Menu;
