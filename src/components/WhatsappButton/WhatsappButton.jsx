/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./WhatsappButton.css";
import logo from "../../assets/img/Logo-OliveiraAdvs.svg";
import sendIcon from "../../assets/img/sendIcon.svg";

const WhatsappButton = () => {
  const [boxWhats, setBoxWhats] = React.useState(false);
  const [message, setMessage] = React.useState(
    encodeURIComponent("Olá, gostaria de tirar algumas dúvidas!")
  );
  const [link, setLink] = React.useState(
    `https://api.whatsapp.com/send?phone=+5511975950351&text=${message}`
  );

  function handleChange({ target }) {
    const newMessage = target.value;

    if (message.length > 0) {
      setMessage(newMessage);
    }
    if (newMessage.length <= 1) {
      setMessage("Olá, gostaria de tirar algumas dúvidas!");
    }

    setLink(
      `https://api.whatsapp.com/send?phone=+5511975950351&text=${message}`
    );
  }

  function handleClick() {
    setBoxWhats((value) => !value);
    if (!boxWhats) {
      setMessage(encodeURIComponent("Olá, gostaria de tirar algumas dúvidas!"));
      setLink(
        `https://api.whatsapp.com/send?phone=+5511975950351&text=${message}`
      );
    }
  }

  if (!boxWhats) {
    return (
      <div className="closedBox fixedBox">
        <p onClick={handleClick} className="openBoxBtn">
          Entre em contato!
        </p>
      </div>
    );
  }

  return (
    <div className="openedBox fixedBox">
      <button onClick={handleClick} className="closeChatBtn">
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
          />{" "}
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
