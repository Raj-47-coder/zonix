import React from "react";
import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import banner_img from '../../images/banner_img.png';
import { Link } from "react-router-dom";
import 'swiper/css';
import 'swiper/css/pagination';
import './Bannerslider.scss';

function Bannerslider() {
  return (
    <>
      <Box component={'div'} className='home_container'>
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          modules={[Autoplay, Pagination, Navigation]}
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}
          loop={true}
          pagination={{ clickable: true }}
          className='banner_slider'
        >
          <SwiperSlide>
            <Box component={'div'} className='banner_card'>
              <Box component={"div"} className='card_img'>
                <img src={banner_img} alt={banner_img} />
              </Box>
              <Box component={"div"} className='card_details'>
                {/* <Typography component={'p'}>Find great deals on ebay for Wallpaper</Typography> */}
                <Typography component={'h3'}>Buy Online building Materials</Typography>
                <Typography component={'p'}>There are many variations of passagesges be Lorem Lorem Ipsum available</Typography>
                <Link component={'a'} to='/store' className='btn_banner'>Shop Now</Link>
              </Box>

            </Box>
          </SwiperSlide>

          <SwiperSlide>
            <Box component={'div'} className='banner_card'>
              <Box component={"div"} className='card_img'>
                <img src={banner_img} alt={banner_img} />
              </Box>
              <Box component={"div"} className='card_details'>
                <Typography component={'p'}>Find great deals on ebay for Wallpaper</Typography>
                <Typography component={'h3'}>sponge tools</Typography>
                <Typography component={'p'}>There are many variations of passagesges be Lorem Lorem Ipsum available</Typography>
                <Link component={'a'} to='/store' className='btn_banner'>Shop Now</Link>
              </Box>

            </Box>
          </SwiperSlide>

          <SwiperSlide>
            <Box component={'div'} className='banner_card'>
              <Box component={"div"} className='card_img'>
                <img src={banner_img} alt={banner_img} />
              </Box>
              <Box component={"div"} className='card_details'>
                <Typography component={'p'}>Find great deals on ebay for Wallpaper</Typography>
                <Typography component={'h3'}>sponge tools</Typography>
                <Typography component={'p'}>There are many variations of passagesges be Lorem Lorem Ipsum available</Typography>
                <Link component={'a'} to='/store' className='btn_banner'>Shop Now</Link>
              </Box>

            </Box>
          </SwiperSlide>

          <SwiperSlide>
            <Box component={'div'} className='banner_card'>
              <Box component={"div"} className='card_img'>
                <img src={banner_img} alt={banner_img} />
              </Box>
              <Box component={"div"} className='card_details'>
                <Typography component={'p'}>Find great deals on ebay for Wallpaper</Typography>
                <Typography component={'h3'}>sponge tools</Typography>
                <Typography component={'p'}>There are many variations of passagesges be Lorem Lorem Ipsum available</Typography>
                <Link component={'a'} to='/store' className='btn_banner'>Shop Now</Link>
              </Box>

            </Box>
          </SwiperSlide>

          <SwiperSlide>
            <Box component={'div'} className='banner_card'>
              <Box component={"div"} className='card_img'>
                <img src={banner_img} alt={banner_img} />
              </Box>
              <Box component={"div"} className='card_details'>
                <Typography component={'p'}>Find great deals on ebay for Wallpaper</Typography>
                <Typography component={'h3'}>sponge tools</Typography>
                <Typography component={'p'}>There are many variations of passagesges be Lorem Lorem Ipsum available</Typography>
                <Link component={'a'} to='/store' className='btn_banner'>Shop Now</Link>
              </Box>

            </Box>
          </SwiperSlide>

          <SwiperSlide>
            <Box component={'div'} className='banner_card'>
              <Box component={"div"} className='card_img'>
                <img src={banner_img} alt={banner_img} />
              </Box>
              <Box component={"div"} className='card_details'>
                <Typography component={'p'}>Find great deals on ebay for Wallpaper</Typography>
                <Typography component={'h3'}>sponge tools</Typography>
                <Typography component={'p'}>There are many variations of passagesges be Lorem Lorem Ipsum available</Typography>
                <Link component={'a'} to='/store' className='btn_banner'>Shop Now</Link>
              </Box>

            </Box>
          </SwiperSlide>
        </Swiper>
      </Box>
    </>
  );
}

export default Bannerslider;
