import React from "react";
import "./Menu.css";

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
          <ul>
            <li>
              <a href="#">Página Inicial</a>
            </li>
            <li>
              <a href="#">Áreas de Atuação</a>
            </li>
            <li>
              <a href="#">Nosso Escritório</a>
            </li>
            <li>
              <a href="#">Sócios</a>
            </li>
          </ul>
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
