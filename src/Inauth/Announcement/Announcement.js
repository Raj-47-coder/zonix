import React from "react";
import { Box, Typography } from "@mui/material";
import announesment from '../../images/announesment.png';
import './Announcement.scss';

function Announcement() {

  return (
    <>
      <Box component={'div'} className='container'>
        <Box component={'div'} className='announcement'>
          <Box component={'div'} className='announcement_left'>
            <Typography component={'span'} className='badge warning'>SAVE UP TO ₹200.00</Typography>
            <Typography component={'h3'} className='name'>Cement PPC -50Kgs</Typography>
            <Typography component={'p'} className='desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
            <Typography component={'a'} href='#' className='show_now'>Shop now</Typography>
          </Box>

          <Box component={'div'} className='announcement_right'>
            <img src={announesment} alt={announesment} />

            <Box component={'div'} className='price'>
              <Typography component={'p'}>$1999</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Announcement;