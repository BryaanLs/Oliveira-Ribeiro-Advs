import React from "react";
import "./Menu.css";

// eslint-disable-next-line react/prop-types
const ButtonMenuMobile = ({ menuAberto, handleClickMenu }) => {
  return (
    <button className="btnMenu" onClick={handleClickMenu}>
      {menuAberto ? "☰" : "X"}
    </button>
  );
};

export default ButtonMenuMobile;
