/* eslint-disable react/prop-types */
import React from "react";
import "./MapsSession.css";

const MapsSession = ({
  title,
  addClass,
  textSpan,
  children,
  imgLocalizacao,
  imgCelular,
  imgEmail,
}) => {
  return (
    <>
      <div className={`maps-content main-content ${addClass}`}>
        <div className="maps-text">
          <h2>{title}</h2>
          <h3 className="subtitleMaps">{textSpan}</h3>
          <ul>
            <li>
              <img
                src={imgLocalizacao}
                alt="icone de localização"
                width="15"
                height="28"
                loading="lazy"
              />
              <p>
                <span>Endereço: </span>Av. São Gabriel, 240 - Itaim Bibi
              </p>
            </li>
            <li>
              <img
                src={imgCelular}
                alt="icone de celular"
                width="15"
                height="28"
                loading="lazy"
              />
              <p>
                <span>Atendimento:</span>De seg a sex, das 8h às 18h
              </p>
            </li>
            <li>
              <img
                src={imgEmail}
                alt="icone de email"
                width="15"
                height="28"
                loading="lazy"
              />
              <p>
                <span>E-mail:</span>
                <a href="mailto:gabriel@oliveiraribeiroadvs.com.br">
                  gabriel@oliveiraribeiroadvs.com.br
                </a>
              </p>
            </li>
          </ul>
          {children}
        </div>

        <div className="maps">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.6476458175603!2d-46.67292752552027!3d-23.581095162315908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59e0290c9a7b%3A0x3d8964161ab4e1cc!2sOliveira%20Ribeiro%20Advogados!5e0!3m2!1spt-BR!2sbr!4v1693111771926!5m2!1spt-BR!2sbr"
            width="500"
            height="300"
            style={{ border: 0 }}
            allowfullscreen="true"
            referrerPolicy="no-referrer-when-downgrade"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default MapsSession;
