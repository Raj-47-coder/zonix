import React from "react";
import { Box, Typography } from "@mui/material";
import product1 from '../../images/product-1.png';
import { Rattingstart, CartIcon } from '../../Zonixzsvgs/Zonixzsvgs';
import 'swiper/css';
import './Products.scss';

function Products(props) {
  return (
    <>
      {props.productsList.map((items, i) => (
        <Box component={'div'} className='deals_card' key={i}>
          <Box component={"div"} className='card_img'>
            <img src={items.img} alt={items.img} />
            {i === 1 || i === 2 ?
              <Typography component={'span'} className='badge discount'>Hot</Typography>
              :
              <Typography component={'span'} className='badge bestSeller'>Best Seller</Typography>
            }

            <Box component={'div'} className='product_action'>
              <Typography component={'a'} href='#'>
                <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 17.25C11 17.25 1.625 12 1.625 5.62501C1.625 4.49803 2.01546 3.40585 2.72996 2.53431C3.44445 1.66277 4.43884 1.0657 5.54393 0.844677C6.64903 0.623658 7.79657 0.792346 8.79131 1.32204C9.78605 1.85174 10.5665 2.70972 11 3.75001C11.4335 2.70972 12.2139 1.85174 13.2087 1.32204C14.2034 0.792346 15.351 0.623658 16.4561 0.844677C17.5612 1.0657 18.5555 1.66277 19.27 2.53431C19.9845 3.40585 20.375 4.49803 20.375 5.62501C20.375 12 11 17.25 11 17.25Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Typography>
              <Typography component={'a'} href='#'>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" >
                  <path d="M10 29C11.1046 29 12 28.1046 12 27C12 25.8954 11.1046 25 10 25C8.89543 25 8 25.8954 8 27C8 28.1046 8.89543 29 10 29Z" fill="currentColor" />
                  <path d="M23 29C24.1046 29 25 28.1046 25 27C25 25.8954 24.1046 25 23 25C21.8954 25 21 25.8954 21 27C21 28.1046 21.8954 29 23 29Z" fill="currentColor" />
                  <path d="M5.2875 9H27.7125L24.4125 20.55C24.2948 20.9692 24.0426 21.3381 23.6948 21.6001C23.3471 21.862 22.9229 22.0025 22.4875 22H10.5125C10.0771 22.0025 9.65293 21.862 9.30515 21.6001C8.95738 21.3381 8.70524 20.9692 8.5875 20.55L4.0625 4.725C4.0027 4.51594 3.8764 4.33207 3.70271 4.20125C3.52903 4.07042 3.31744 3.99977 3.1 4H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Typography>
              <Typography component={'a'} href='#'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 4.25C4.5 4.25 1.5 12 1.5 12C1.5 12 4.5 19.75 12 19.75C19.5 19.75 22.5 12 22.5 12C22.5 12 19.5 4.25 12 4.25Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Typography>
            </Box>
          </Box>
          <Box component={"div"} className='card_details'>
            <Box component={'div'} className='rate_box'>
              <Rattingstart />
              <Rattingstart />
              <Rattingstart />
              <Rattingstart />
              <Rattingstart />
              <Typography component={'span'} className='rating_count'>({52 + ',' + 23 + i})</Typography>
            </Box>
            <Typography component={'p'} className='product_title'>
              {items.name}
            </Typography>

            <Box component={'div'} className='product_price'>
              <Typography component={'del'}>{items.delprice}</Typography>
              <Typography component={'span'}>{items.orgprice}</Typography>
            </Box>
          </Box>
        </Box>
      ))}

    </>
  );
}

export default Products;
