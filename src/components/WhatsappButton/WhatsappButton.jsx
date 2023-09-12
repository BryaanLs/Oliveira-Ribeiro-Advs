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

  React.useEffect(() => {
    if (message.length <= 1) {
      setMessage("Olá, gostaria de tirar algumas dúvidas!");
    }
    setLink(
      `https://api.whatsapp.com/send?phone=+5511975950351&text=${message}`
    );
    console.log(message);
  }, [message]);

  function handleChange({ target }) {
    setMessage(target.value);
  }

  function handleClick() {
    setBoxWhats((value) => !value);
    if (!boxWhats) {
      setMessage("Olá, gostaria de tirar algumas dúvidas!");
      setLink(
        `https://api.whatsapp.com/send?phone=+5511975950351&text=${message}`
      );
    }
  }

  function closeChat({ target }) {
    setBoxWhats(false);
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
    <div className="openedBox fixedBox" onMouseLeave={closeChat}>
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
          />
          <a href={link} target="_blank" onKeyDown={console.log("oi")}>
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
