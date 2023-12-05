import React from "react";
import { Box, Typography } from "@mui/material";
import { Logo } from '../../Zonixzsvgs/Zonixzsvgs'
import 'swiper/css';
import './Footer.scss';

function Footer() {

  return (
    <>

      <Box component={'div'} className='footer'>
        <Box component={'div'} className='footer_container'>
          <Box component={'div'} className='footer_rows'>
            <Box component={'div'} className='footer_cols first'>
              first
            </Box>
            <Box component={'div'} className='footer_cols second'>
              second
            </Box>
            <Box component={'div'} className='footer_cols third'>
              third
            </Box>
            <Box component={'div'} className='footer_cols last'>
              last
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Footer;
