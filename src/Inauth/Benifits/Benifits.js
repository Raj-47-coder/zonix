import React from "react";
import { Box, Typography } from "@mui/material";
import './Benifits.scss';
import { Delivery, Guarantee, Payment, Support } from "../../Zonixzsvgs/Zonixzsvgs";


function Benifits() {
  return (
    <>
      <Box component={'div'} className='container'>
        <Box component={'div'} className='benifits'>
          <Box component={'div'} className='benifits_item'>
            <Box component={'div'} className='icon'>
              <Delivery />
            </Box>
            <Box component={'div'} className='content'>
              <Typography component={'h6'}>Fasted Delivery</Typography>
              <Typography component={'p'}>Delivery in 24/H</Typography>
            </Box>
          </Box>

          <Box component={'div'} className='benifits_item'>
            <Box component={'div'} className='icon'>
              <Guarantee />
            </Box>
            <Box component={'div'} className='content'>
              <Typography component={'h6'}>24 Hours Return</Typography>
              <Typography component={'p'}>100% money-back guarantee</Typography>
            </Box>
          </Box>

          <Box component={'div'} className='benifits_item'>
            <Box component={'div'} className='icon'>
              <Payment />
            </Box>
            <Box component={'div'} className='content'>
              <Typography component={'h6'}>Secure Payment</Typography>
              <Typography component={'p'}>Your money is safe</Typography>
            </Box>
          </Box>

          <Box component={'div'} className='benifits_item'>
            <Box component={'div'} className='icon'>
              <Support />
            </Box>
            <Box component={'div'} className='content'>
              <Typography component={'h6'}>Support 24/7</Typography>
              <Typography component={'p'}>Live contact/message</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Benifits;
