import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules";
import "swiper/css/bundle";
import "./Carrossel.css";
import carrossel3Mobile from "../../assets/img/carrossel3Mobile.webp";
import carrossel2Mobile from "../../assets/img/carrossel2Mobile.webp";
import carrossel1Mobile from "../../assets/img/carrossel1Mobile.webp";
import escritorioUm from "../../assets/img/carrossel1.webp";
import escritorioDois from "../../assets/img/carrossel2.webp";
import escritorioTres from "../../assets/img/carrossel3.webp";
import DataTime from "../DataTime/DataTime";

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
          <picture>
            <source
              media="(max-width: 500px)"
              srcSet={carrossel3Mobile}
              type="image/webp"
            />
            <img
              src={escritorioTres}
              alt="Foto do escritório"
              width="1915"
              height="917"
            />
          </picture>
        </SwiperSlide>
        <SwiperSlide className="swiper-img slide-2">
          <picture>
            <source
              media="(max-width: 500px)"
              srcSet={carrossel1Mobile}
              type="image/webp"
            />
            <img
              src={escritorioUm}
              alt="Foto do escritório"
              width="1915"
              height="917"
            />
          </picture>
        </SwiperSlide>
        <SwiperSlide className="swiper-img slide-3 slide-1">
          <picture>
            <source
              media="(max-width: 500px)"
              srcSet={carrossel2Mobile}
              type="image/webp"
            />
            <img
              src={escritorioDois}
              alt="Foto do escritório"
              width="1915"
              height="917"
            />
          </picture>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carrossel;
