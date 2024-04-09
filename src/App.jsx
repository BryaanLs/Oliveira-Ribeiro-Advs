// eslint-disable-next-line no-unused-vars
import React from "react";
import Header from "./components/Header/Header.jsx";
import Home from "./Pages/Home/Home.jsx";
import Footer from "./components/Footer/Footer.jsx";
import AreasDeAtuacao from "./Pages/AreasDeAtuacao/AreasDeAtuacao.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WhatsappButton from "./components/WhatsappButton/WhatsappButton.jsx";
import NossoEscritorio from "./Pages/NossoEscritorio/NossoEscritorio.jsx";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.jsx";
import Advogados from "./Pages/Advogados/Advogados.jsx";

const App = () => {
  const [boxWhats, setBoxWhats] = React.useState(false);

  return (
    <div>
      <BrowserRouter>
        <Header setBoxWhats={setBoxWhats} />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Áreas-de-atuação" element={<AreasDeAtuacao />} />
          <Route path="Nosso-Escritório" element={<NossoEscritorio />} />
          <Route path="Advogados" element={<Advogados />} />
        </Routes>
        <Footer />
        <WhatsappButton boxWhats={boxWhats} setBoxWhats={setBoxWhats} />
      </BrowserRouter>
    </div>
  );
};

export default App;
