import React from "react";
import { Box, TextField, Typography, Button } from "@mui/material";
import { Logo, ArrowRightYellow } from '../../Zonixzsvgs/Zonixzsvgs'
import 'swiper/css';
import './Footer.scss';

function Footer() {

  return (
    <>

      <Box component={'div'} className='footer'>
        <Box component={'div'} className='footer_container'>
          <Box component={'div'} className='footer_rows'>
            <Box component={'div'} className='footer_cols first'>
              <Typography component={'a'} href='#' className='logo'>
                <Logo />
              </Typography>

              <Typography component={'p'}>Customer Supports :</Typography>
              <Typography component={'h5'}>(629) 555-0129</Typography>
              <Typography component={'p'}>4517 Washington Ave. Manchester, Kentucky 39495</Typography>
              <Typography component={'h5'}>info@zinixz.com</Typography>
            </Box>
            <Box component={'div'} className='footer_cols second'>
              <Typography component={'h4'} className='title'>Top Category</Typography>

              <Typography component={'a'} href='#' className='footer_navLink'>Category 1</Typography>
              <Typography component={'a'} href='#' className='footer_navLink'>Category 2</Typography>
              <Typography component={'a'} href='#' className='footer_navLink'>Category 3</Typography>
              <Typography component={'a'} href='#' className='footer_navLink'>Category 4</Typography>
              <Typography component={'a'} href='#' className='footer_navLink'>Category 5</Typography>
              <Typography component={'a'} href='#' className='footer_navLink'>Category 6</Typography>
              <Typography component={'a'} href='#' className='footer_navLink all'>Browse All Products <ArrowRightYellow /></Typography>
            </Box>
            <Box component={'div'} className='footer_cols third'>
              <Typography component={'h4'} className='title'>Quick Links</Typography>

              <Typography component={'a'} href='#' className='footer_navLink'>shop Product</Typography>
              <Typography component={'a'} href='#' className='footer_navLink'>Shopping Cart</Typography>
              <Typography component={'a'} href='#' className='footer_navLink'>Wishlist</Typography>
              <Typography component={'a'} href='#' className='footer_navLink'>Track Order</Typography>
              <Typography component={'a'} href='#' className='footer_navLink'>Customer Help</Typography>
              <Typography component={'a'} href='#' className='footer_navLink'>About us</Typography>
            </Box>
            <Box component={'div'} className='footer_cols last'>
              <Typography component={'h4'} className='title'>Newsletter</Typography>

              <Typography component={'p'} className='footer_navLink'>Lorem Ipsum is simply dummy text of the printing and.</Typography>
              <Box component={'div'} className='newsletter_box'>
                <TextField fullWidth type='text' />
                <Button className='newsletter'>Subscribe</Button>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box component={'div'} className='footer_bottom'>
          <Typography component={'p'}>Lorem - eCommerce online store © 2023. Design by Lorem</Typography>
        </Box>
      </Box>
    </>
  );
}

export default Footer;
