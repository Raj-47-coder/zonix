import React from "react";
import { Box, Typography } from "@mui/material";
import announesment from '../../images/announesment.png';
import './Toprated.scss';

function Toprated() {

  return (
    <>
      <Box component={'div'} className='container'>
        <Box component={'div'} className='toprated_row'>
          <Box component={'div'} className='toprated_block'>
            <Typography component={'h4'} className='title'>FLASH SALE TODAY</Typography>

            <Box component={'div'} className='toprated_columan'>
              <Box component={'div'} className='toprated_col'>
                <Box component={'div'} className='toprated_img'>
                  <img src={announesment} alt={announesment} />
                </Box>
                <Box component={'div'} className='toprated_desc'>
                  <Typography component={'p'}>Lorem Ipsum is simply dummy text of the printing and...</Typography>
                  <Typography component={'h4'}>₹1,500</Typography>
                </Box>
              </Box>
              <Box component={'div'} className='toprated_col'>
                <Box component={'div'} className='toprated_img'>
                  <img src={announesment} alt={announesment} />
                </Box>
                <Box component={'div'} className='toprated_desc'>
                  <Typography component={'p'}>Lorem Ipsum is simply dummy text of the printing and...</Typography>
                  <Typography component={'h4'}>₹1,500</Typography>
                </Box>
              </Box>
              <Box component={'div'} className='toprated_col'>
                <Box component={'div'} className='toprated_img'>
                  <img src={announesment} alt={announesment} />
                </Box>
                <Box component={'div'} className='toprated_desc'>
                  <Typography component={'p'}>Lorem Ipsum is simply dummy text of the printing and...</Typography>
                  <Typography component={'h4'}>₹1,500</Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box component={'div'} className='toprated_block'>
            <Typography component={'h4'} className='title'>TOP RATED</Typography>

            <Box component={'div'} className='toprated_columan'>
              <Box component={'div'} className='toprated_col'>
                <Box component={'div'} className='toprated_img'>
                  <img src={announesment} alt={announesment} />
                </Box>
                <Box component={'div'} className='toprated_desc'>
                  <Typography component={'p'}>Lorem Ipsum is simply dummy text of the printing and...</Typography>
                  <Typography component={'h4'}>₹1,500</Typography>
                </Box>
              </Box>
              <Box component={'div'} className='toprated_col'>
                <Box component={'div'} className='toprated_img'>
                  <img src={announesment} alt={announesment} />
                </Box>
                <Box component={'div'} className='toprated_desc'>
                  <Typography component={'p'}>Lorem Ipsum is simply dummy text of the printing and...</Typography>
                  <Typography component={'h4'}>₹1,500</Typography>
                </Box>
              </Box>
              <Box component={'div'} className='toprated_col'>
                <Box component={'div'} className='toprated_img'>
                  <img src={announesment} alt={announesment} />
                </Box>
                <Box component={'div'} className='toprated_desc'>
                  <Typography component={'p'}>Lorem Ipsum is simply dummy text of the printing and...</Typography>
                  <Typography component={'h4'}>₹1,500</Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box component={'div'} className='toprated_block'>
            <Typography component={'h4'} className='title'>NEW ARRIVAL</Typography>

            <Box component={'div'} className='toprated_columan'>
              <Box component={'div'} className='toprated_col'>
                <Box component={'div'} className='toprated_img'>
                  <img src={announesment} alt={announesment} />
                </Box>
                <Box component={'div'} className='toprated_desc'>
                  <Typography component={'p'}>Lorem Ipsum is simply dummy text of the printing and...</Typography>
                  <Typography component={'h4'}>₹1,500</Typography>
                </Box>
              </Box>
              <Box component={'div'} className='toprated_col'>
                <Box component={'div'} className='toprated_img'>
                  <img src={announesment} alt={announesment} />
                </Box>
                <Box component={'div'} className='toprated_desc'>
                  <Typography component={'p'}>Lorem Ipsum is simply dummy text of the printing and...</Typography>
                  <Typography component={'h4'}>₹1,500</Typography>
                </Box>
              </Box>
              <Box component={'div'} className='toprated_col'>
                <Box component={'div'} className='toprated_img'>
                  <img src={announesment} alt={announesment} />
                </Box>
                <Box component={'div'} className='toprated_desc'>
                  <Typography component={'p'}>Lorem Ipsum is simply dummy text of the printing and...</Typography>
                  <Typography component={'h4'}>₹1,500</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Toprated;
