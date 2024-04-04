import React, { useState, useEffect } from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import FPrincipal from "../../../../assets/UserHome/slider1.png";
import Fprueba from "../../../../assets/UserHome/slider2.png";
import Fprueba3 from "../../../../assets/UserHome/slider3.png";
import Fprueba4 from "../../../../assets/sliderHome/4.png";
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
    <div className="SP" style={{ position: "relative" }}>
      <Swiper
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
        <SwiperSlide>
        <img
            src={Fprueba3}
            alt="Descripción de la imagen 1"
            
          />
        </SwiperSlide>
        <SwiperSlide>
        <img
            src={Fprueba4}
            alt="Descripción de la imagen 1"
            
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SliderHome;
