import React from "react";
import "./MapsSession.css";
import celular from "/src/assets/img/celular.svg";
import email from "/src/assets/img/email.svg";
import localizacao from "/src/assets/img/localização.svg";

const MapsSession = () => {
  return (
    <>
      <div className="maps-content main-content">
        <div className="maps-text">
          <h2>O escritório Oliveira Ribeiro Advs</h2>
          <ul>
            <li>
              <img
                src={localizacao}
                alt="icone de localização"
                width="15"
                height="28"
              />
              <p>
                <span>Endereço: </span>Av. São Gabriel, 240 - Itaim Bibi
              </p>
            </li>
            <li>
              <img
                src={celular}
                alt="icone de celular"
                width="15"
                height="28"
              />
              <p>
                <span>Atendimento:</span>De segunda a sexta, das 8h às 18h
              </p>
            </li>
            <li>
              <img src={email} alt="icone de email" width="15" height="28" />
              <p>
                <span>E-mail:</span>
                <a href="mailto:gabriel@oliveiraribeiroadvs.com.br">
                  gabriel@oliveiraribeiroadvs.com.br
                </a>
              </p>
            </li>
          </ul>
        </div>
        <div className="maps">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.6476458175603!2d-46.67292752552027!3d-23.581095162315908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59e0290c9a7b%3A0x3d8964161ab4e1cc!2sOliveira%20Ribeiro%20Advogados!5e0!3m2!1spt-BR!2sbr!4v1693111771926!5m2!1spt-BR!2sbr"
            width="500"
            height="300"
            style={{ border: 0 }}
            allowfullscreen="true"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default MapsSession;
