import React from "react";
import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import concert from '../../images/concert.png';
import steel from '../../images/steel.png';
import wood from '../../images/wood.png';
import brick from '../../images/brick.png';
import cement from '../../images/cement.png';
import metal from '../../images/metal.png';
import { ArrowRight } from '../../Zonixzsvgs/Zonixzsvgs'
import 'swiper/css';
import './Categories.scss';
import { Link } from "react-router-dom";


function Categories() {

  const categoriesList = [
    { img: concert, title: 'Concert' },
    { img: steel, title: 'Steel' },
    { img: wood, title: 'Wood' },
    { img: brick, title: 'Brick' },
    { img: cement, title: 'Cement' },
    { img: metal, title: 'Metal' },
    { img: concert, title: 'Concert' },
    { img: steel, title: 'Steel' },
    { img: wood, title: 'Wood' },
    { img: brick, title: 'Brick' },
    { img: cement, title: 'Cement' },
    { img: metal, title: 'Metal' },
  ]
  return (
    <>
      <Box component={'div'} className='container'>
        <Box component={'div'} className='section_title'>
          <Typography component={'h2'}>Shop by Category</Typography>
          <Link component={'a'} to='/store'>
            <Typography component={'span'}>Browse All Category</Typography>
            <ArrowRight />
          </Link>
        </Box>
        <Swiper
          spaceBetween={30}
          autoplay={true}
          speed={1000}
          loop={true}
          modules={[Autoplay, Pagination, Navigation]}
          breakpoints={{
            375: {
              slidesPerView: 2,
            },
            575: {
              slidesPerView: 2.5,
            },
            768: {
              slidesPerView: 4,
            },
            1200: {
              slidesPerView: 5,
            },
            1350: {
              slidesPerView: 6,
            },
          }}
        >
          {categoriesList.map((items, i) => (
            <SwiperSlide key={i}>
              <Box component={'div'} className='category_card'>
                <Box component={"div"} className='card_img'>
                  <img src={items.img} alt={items.img} />
                </Box>
                <Typography component={'p'}>{items.title}</Typography>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </>
  );
}

export default Categories;
