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
import 'swiper/css';
import './Brands.scss';
import { useTranslation } from 'react-i18next';

function Brands() {
  const { t } = useTranslation();

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
          <Typography component={'h2'}>{t("titleBrand")}</Typography>
          {/* <Typography component={'a'} href='#'>
            <Typography component={'span'}>Browse All Category</Typography>
            <ArrowRight />
          </Typography> */}
        </Box>
      </Box>

      <Swiper
        spaceBetween={20}
        autoplay={true}
        speed={1000}
        centeredSlides={true}
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
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
          1350: {
            slidesPerView: 6.5,
          },
        }}
      >
        {categoriesList.map((items, i) => (
          <SwiperSlide key={i}>
            <Box component={'div'} className='brand_card'>
              <Box component={"div"} className='brand_img'>
                <img src={items.img} alt={items.img} />
              </Box>
              <Box component={"div"} className='brand_name'>
                <Typography component={'p'}>{items.title}</Typography>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Brands;
