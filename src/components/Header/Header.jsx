// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Header.css";
import Menu from "../Menu/Menu";

const Header = () => {
  const [menuAberto, setMenuAberto] = React.useState(true);
  const [classMenu, setClassMenu] = React.useState("menu");

  function handleClickMenu() {
    const menu = document.querySelector(".menu");
    setMenuAberto((e) => !e);
    if (menuAberto) menu.classList.add("menuMobile");
    if (!menuAberto) menu.classList.remove("menuMobile");
  }

  return (
    <>
      <button className="btnMenu" onClick={handleClickMenu}>
        {menuAberto ? "☰" : "X"}
      </button>

      <Menu classMenu={classMenu} />
    </>
  );
};

export default Header;
