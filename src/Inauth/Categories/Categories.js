import React from "react";
import { Box, Typography } from "@mui/material";
import { Delivery, Guarantee, Payment, Support } from "../../Zonixzsvgs/Zonixzsvgs";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Categories.scss';

function Benifits() {
  return (
    <>
      <Box component={'div'} className='container'>
        <Swiper
          spaceBetween={50}
          slidesPerView={6}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
      </Box>
    </>
  );
}

export default Benifits;
