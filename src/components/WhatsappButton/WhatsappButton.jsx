/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./WhatsappButton.css";
import logo from "../../assets/img/Logo-OliveiraAdvs.svg";
import sendIcon from "../../assets/img/sendIcon.svg";
import { useLocation } from "react-router-dom";
const WhatsappButton = ({ boxWhats, setBoxWhats }) => {
  const [message, setMessage] = React.useState(
    encodeURIComponent("Olá, gostaria de tirar algumas dúvidas!")
  );
  const [link, setLink] = React.useState(
    `https://api.whatsapp.com/send?phone=+5511975950351&text=${message}`
  );

  const local = useLocation();

  React.useEffect(() => {
    setBoxWhats(false);
  }, [local, setBoxWhats]);

  React.useEffect(() => {
    if (message.length <= 1) {
      setMessage("Olá, gostaria de tirar algumas dúvidas!");
    }
    setLink(
      `https://api.whatsapp.com/send?phone=+5511975950351&text=${message}`
    );
  }, [message]);

  function handleChange({ target }) {
    setMessage(target.value);
  }

  function handleClick(zoom) {
    zoom ? clearZoom() : restoreZoom();
    setBoxWhats((value) => !value);
    if (!boxWhats) {
      setMessage("Olá, gostaria de tirar algumas dúvidas!");
      setLink(
        `https://api.whatsapp.com/send?phone=+5511975950351&text=${message}`
      );
    }
  }

  function closeChat() {
    setBoxWhats(null);
  }

  function clearZoom() {
    document
      .querySelector('meta[name="viewport"]')
      .setAttribute(
        "content",
        "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      );
  }

  function restoreZoom() {
    document
      .querySelector('meta[name="viewport"]')
      .setAttribute(
        "content",
        "width=device-width, initial-scale=1.0, maximum-scale=5.0"
      );
  }

  if (!boxWhats) {
    return (
      <div
        className="closedBox fixedBox"
        onClick={() => {
          handleClick(true);
        }}
      >
        <p className="openBoxBtn">Entre em contato!</p>
      </div>
    );
  }
  return (
    <div className="openedBox fixedBox">
      <button
        onClick={() => {
          handleClick(false);
        }}
        className="closeChatBtn"
      >
        X
      </button>
      <div className="initMessage">
        <ul>
          <li>
            <img
              src={logo}
              alt="logo Oliveira Ribeiro Advogados Associados"
              width="24px"
              height="24px"
              loading="lazy"
            />
            <p>Olá, como podemos te ajudar hoje? 😉</p>
          </li>
        </ul>

        <div className="sendMessage">
          <input
            type="text"
            placeholder="Digite sua mensagem!"
            onChange={handleChange}
          />
          <a href={link} target="_blank">
            <img
              src={sendIcon}
              alt="icone de aviãozinho"
              width="12px"
              height="12px"
              loading="lazy"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhatsappButton;
