/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Header.css";
import Menu from "../Menu/Menu";
import ButtonMenuMobile from "../Menu/ButtonMenuMobile";

const Header = ({ setBoxWhats }) => {
  const [menuAberto, setMenuAberto] = React.useState(true);
  const [classMenu, setClassMenu] = React.useState("menu");

  React.useEffect(() => {
    setBoxWhats(false);
  }, [menuAberto, setBoxWhats]);

  function handleClickMenu() {
    const menu = document.querySelector(".menu");
    setMenuAberto((e) => !e);
    if (menuAberto) menu.classList.add("menuMobile");
    if (!menuAberto) menu.classList.remove("menuMobile");
  }

  return (
    <>
      <ButtonMenuMobile
        menuAberto={menuAberto}
        handleClickMenu={handleClickMenu}
      />
      <Menu classMenu={classMenu} handleClickMenu={handleClickMenu} />
    </>
  );
};

export default Header;
