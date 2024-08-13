import React from "react";
import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import banner_img from '../../images/banner_img.jpg';
import banner_img2 from '../../images/material-cement.png';
import banner_img3 from '../../images/material-brick.png';
import banner_img4 from '../../images/material-steel.png';
import banner_img5 from '../../images/material-metal.png';
import { Link } from "react-router-dom";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Bannerslider.scss';

function Bannerslider() {
  return (
    <>
      <Box component={'div'} className='home_container'>
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={false}
          className='banner_slider'
          navigation={true}
        >
          <SwiperSlide>
            <Box component={'div'} className='banner_card'>
              <Box component={"div"} className='card_img'>
                <img src={banner_img2} alt={banner_img} />
              </Box>
              <Box component={"div"} className='card_details'>
                {/* <Typography component={'p'}>Find great deals on ebay for Wallpaper</Typography> */}
                <Typography component={'h3'}>Buy Online building Materials</Typography>
                <Typography component={'p'}>There are many variations of passagesges be Lorem Lorem Ipsum available</Typography>
                <Link component={'a'} to='/store' className='btn_banner'>Book a store visit now</Link>
              </Box>

            </Box>
          </SwiperSlide>

          <SwiperSlide>
            <Box component={'div'} className='banner_card'>
              <Box component={"div"} className='card_img'>
                <img src={banner_img3} alt={banner_img} />
              </Box>
              <Box component={"div"} className='card_details'>
                {/* <Typography component={'p'}>Find great deals on ebay for Wallpaper</Typography> */}
                <Typography component={'h3'}>Buy Manny type of Bricks</Typography>
                <Typography component={'p'}>There are many variations of passagesges be Lorem Lorem Ipsum available</Typography>
                <Link component={'a'} to='/store' className='btn_banner'>Book a store visit now</Link>
              </Box>

            </Box>
          </SwiperSlide>

          <SwiperSlide>
            <Box component={'div'} className='banner_card'>
              <Box component={"div"} className='card_img'>
                <img src={banner_img4} alt={banner_img} />
              </Box>
              <Box component={"div"} className='card_details'>
                {/* <Typography component={'p'}>Find great deals on ebay for Wallpaper</Typography> */}
                <Typography component={'h3'}>Steels</Typography>
                <Typography component={'p'}>Explore  the range of choices @zonixz</Typography>
                <Link component={'a'} to='/store' className='btn_banner'>Book a store visit now</Link>
              </Box>

            </Box>
          </SwiperSlide>

          <SwiperSlide>
            <Box component={'div'} className='banner_card'>
              <Box component={"div"} className='card_img'>
                <img src={banner_img5} alt={banner_img} />
              </Box>
              <Box component={"div"} className='card_details'>
                {/* <Typography component={'p'}>Find great deals on ebay for Wallpaper</Typography> */}
                <Typography component={'h3'}>Metals</Typography>
                <Typography component={'p'}>Explore  the range of choices @zonixz</Typography>
                <Link component={'a'} to='/store' className='btn_banner'>Book a store visit now</Link>
              </Box>

            </Box>
          </SwiperSlide>
        </Swiper>
      </Box>
    </>
  );
}

export default Bannerslider;
