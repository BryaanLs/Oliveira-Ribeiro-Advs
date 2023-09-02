// eslint-disable-next-line no-unused-vars
import React from "react";
import Header from "./components/Header/Header.jsx";
import Home from "./Pages/Home/Home.jsx";
import Footer from "./components/Footer/Footer.jsx";
import AreasDeAtuacao from "./Pages/AreasDeAtuacao/AreasDeAtuacao.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WhatsappButton from "./components/WhatsappButton/WhatsappButton.jsx";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Áreas-de-atuação" element={<AreasDeAtuacao />} />
        </Routes>
        <Footer />
        <WhatsappButton />
      </BrowserRouter>
    </>
  );
};

export default App;
