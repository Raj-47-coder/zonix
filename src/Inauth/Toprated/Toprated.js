import React from "react";
import { Box, Typography } from "@mui/material";
import announesment from '../../images/announesment.png';
import './Toprated.scss';
import { useTranslation } from 'react-i18next';


function Toprated() {
  const { t } = useTranslation();
  return (
    <>
      <Box component={'div'} className='container'>
        <Box component={'div'} className='toprated_row'>
          <Box component={'div'} className='toprated_block'>
            <Typography component={'h4'} className='title'>{t("titleToday")}</Typography>

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
            <Typography component={'h4'} className='title'>{t("titleRated")}</Typography>

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
            <Typography component={'h4'} className='title'>{t("titleArrival")}</Typography>

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
