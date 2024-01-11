import React from "react";
import { Box, Typography } from "@mui/material";
import product1 from '../../images/product-1.png';
import { ArrowRight, Rattingstart, CartIcon } from '../../Zonixzsvgs/Zonixzsvgs'
import 'swiper/css';
import './Bestdeals.scss';
import { Link } from "react-router-dom";


function Bestdeals() {

  const categoriesList = [
    { img: product1, title: 'Concert' },
    { img: product1, title: 'Steel' },
    { img: product1, title: 'Wood' },
    { img: product1, title: 'Brick' },
    { img: product1, title: 'Cement' },
  ]
  return (
    <>
      <Box component={'div'} className='container'>
        <Box component={'div'} className='section_title'>
          <Typography component={'h2'}>Best Deals

            <Typography component={'span'}>Deals ends in</Typography>
            <Typography component={'span'} className='badges_timer'>16d : 21h : 57m :23s</Typography>
          </Typography>
          <Link component={'a'} to='/store'>
            <Typography component={'span'}>Browse All Product </Typography>
            <ArrowRight />
          </Link>
        </Box>

        <Box component={'div'} className='deals_box'>

          {categoriesList.map((items, i) => (
            <Box component={'div'} className='deals_card' key={i}>
              <Box component={"div"} className='card_img'>
                <img src={items.img} alt={items.img} />
                <Typography component={'span'} className='badge_discount'>32% Off</Typography>
              </Box>
              <Box component={"div"} className='card_details'>
                <Box component={'div'} className='rate_box'>
                  <Rattingstart />
                  <Rattingstart />
                  <Rattingstart />
                  <Rattingstart />
                  <Rattingstart />
                  <Typography component={'span'} className='rating_count'>(52,677)</Typography>
                </Box>
                <Link component={'a'} to={'/store'} className='product_title'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting.
                </Link>

                <Box component={'div'} className='product_price'>
                  <Typography component={'del'}>₹865.99</Typography>
                  <Typography component={'span'}>₹442.12</Typography>
                </Box>

                <Typography component={'a'} href='#' className='add_cart'>
                  <CartIcon />
                  Add to cart
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box >
    </>
  );
}

export default Bestdeals;
