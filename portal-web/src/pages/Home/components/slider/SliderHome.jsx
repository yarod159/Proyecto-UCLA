import React, { useState, useEffect } from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import FPrincipal from "../../../../assets/sliderHome/ADV-01.webp";
import Fprueba from "../../../../assets/sliderHome/ADV-02.webp";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./slider.css";
function SliderHome() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const newProgress = oldProgress + 1;
        return newProgress > 100 ? 100 : newProgress;
      });
    }, 40); // ajusta el intervalo para que coincida con la duración del autoplay

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          position: "absolute",
          top: 0,
          width: `${progress}%`,
          height: "5px",
          backgroundColor: "rgba(0,0,0,.3)",
          zIndex: 2,
        
        }}
      />

      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={100}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false, // continúa la reproducción automática después de la interacción
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => setProgress(0)}
      >
        <SwiperSlide>
          <img
            src={FPrincipal}
            alt="Descripción de la imagen 1"
           
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Fprueba}
            alt="Descripción de la imagen 1"
            
          />
        </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SliderHome;
