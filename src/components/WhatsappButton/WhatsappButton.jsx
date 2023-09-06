import React from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import wppLottie from "./data.json";
import "./WhatsappButton.css";

const WhatsappButton = () => {
  return (
    <a className="btnWpp" href="#" target="_blank">
      <Player
        autoplay
        loop
        speed="0.7"
        src={wppLottie}
        style={{ height: "80px", width: "80px" }}
      >
        <Controls visible={false} />
      </Player>
    </a>
  );
};

export default WhatsappButton;
