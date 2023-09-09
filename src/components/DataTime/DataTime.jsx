import React, { useState, useEffect } from "react";
import "./DataTime.css";

const DataTime = () => {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const currentTime = new Date().getHours();

    if (currentTime >= 5 && currentTime < 12) {
      setGreeting("Bom dia");
    } else if (currentTime >= 12 && currentTime < 18) {
      setGreeting("Boa tarde");
    } else {
      setGreeting("Boa noite");
    }
  }, []);

  return (
    <div className="containerSaudation">
      <p className="timeSaudation">{greeting}, Seja Bem-vindo(a)!</p>
    </div>
  );
};

export default DataTime;
