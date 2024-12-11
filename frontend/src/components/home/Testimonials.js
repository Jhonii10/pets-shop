'use client';

import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation,  Autoplay} from 'swiper/modules';
import StarRatings from 'react-star-ratings';
;

export const Testimonials = () => {
  const testimonios = [
    {
      texto: "Excelente atención y acompañamiento durante el proceso de compra, además muy cumplidos. Totalmente agradecido.",
      autor: "Lina Mejía",
      calificacion: 5,
    },
    {
      texto: "Servicio rápido y confiable. Recomiendo totalmente.",
      autor: "Carlos Pérez",
      calificacion: 4.5,
    },
    {
      texto: "Gran calidad en los productos y atención al cliente.",
      autor: "Ana Gómez",
      calificacion: 5,
    },
  ];

  return (
    <div className="max-w-3xl mx-auto text-center p-2 md:p-10 ">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 lowercase ">LO QUE DICEN NUESTROS CLIENTES</h2>
      <Swiper 
            navigation={true} 
            modules={[Navigation , Autoplay]} 
            className="mySwiper" 
            autoplay={{
            delay: 2500
            }}
            loop={true}
      >
        {
            testimonios.map((testimonio, index) => (
                <SwiperSlide key={index} className=''>
                    <p className="text-lg italic mb-4 px-10">{testimonio.texto}</p>
                    <div className="flex justify-center mb-2">
                    <StarRatings
                        rating={testimonio.calificacion}
                        starRatedColor="#fbbf24"
                        numberOfStars={5}
                        starDimension="24px"
                        starSpacing="2px"
                        name={`rating-${index}`}
                    />
                    </div>
                    <p className="font-semibold">{testimonio.autor}</p>
                </SwiperSlide>
            ))
        }
      </Swiper>
    </div>
  );
};
