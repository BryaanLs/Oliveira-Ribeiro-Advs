import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules";
import "swiper/css/bundle";
import "./Carrossel.css";
import escritorioUm from "../../assets/img/carrossel1.webp";
import escritorioDois from "../../assets/img/carrossel2.webp";
import escritorioTres from "../../assets/img/carrossel3.webp";

const Carrossel = () => {
  return (
    <div className="containerSwiper">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        autoplay={{ delay: 5000 }}
        effect="fade"
        loop={true}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={true}
      >
        <SwiperSlide className="swiper-img slide-1">
          <img
            src={escritorioTres}
            alt="Foto do escritório"
            width="1915"
            height="917"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-img slide-2">
          <img
            src={escritorioUm}
            alt="Foto do escritório"
            width="1915"
            height="917"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-img slide-3 slide-1">
          <img
            src={escritorioDois}
            alt="Foto do escritório"
            width="1915"
            height="917"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carrossel;
