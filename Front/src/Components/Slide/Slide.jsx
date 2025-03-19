import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules"; 
import "./slide.css";

// Importando imagens
import bmw01 from "../../assets/bmw01.jpg";
import bmw02 from "../../assets/bmw02.jpg";
import bmw03 from "../../assets/bmw03.jpg";


const SlideShow = () => {
  const slides = [
    { id: "1", image: bmw01, title: "BMW X5", description: "Potência e elegância em um só carro." },
    { id: "2", image: bmw02, title: "BMW M3", description: "Um esportivo de respeito." },
    { id: "3", image: bmw03, title: "BMW i8", description: "Tecnologia e sustentabilidade." },
   
  ];

  return (
    <div className="container">
      <h1 className="title">Slide com Imagem e Texto</h1>
      <Swiper
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true, dynamicBullets: true }}
        autoplay={{ delay: 3000 }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {slides.map((item) => (
          <SwiperSlide key={item.id} className="slide-content">
            <img src={item.image} alt={item.title} className="slide-image" />
            <div className="slide-text">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SlideShow;
