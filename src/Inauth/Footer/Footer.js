import React from "react";
import { Box, TextField, Typography, Button } from "@mui/material";
import { Logo, ArrowRightYellow } from '../../Zonixzsvgs/Zonixzsvgs';
import Appstore from '../../images/app_store.png';
import Googleplay from '../../images/google_play.png';
import insta from '../../images/instagram.png';
import twitter from '../../images/twitter.png';
import facebook from '../../images/facebook.png';
import telegram from '../../images/telegram.png';
import 'swiper/css';
import './Footer.scss';
import { Link } from "react-router-dom";

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
              <Typography component={'h5'}>info@zonixz.com</Typography>

              <Box component={'div'} className='social_media'>
                <Typography component={'a'} href='#'>
                  <img src={insta} alt='Instagram icon' />
                </Typography>
                <Typography component={'a'} href='#'>
                  <img src={twitter} alt='Twitter icon' />
                </Typography>
                <Typography component={'a'} href='#'>
                  <img src={telegram} alt='Telegram icon' />
                </Typography>
                <Typography component={'a'} href='#'>
                  <img src={facebook} alt='Facebook icon' />
                </Typography>
              </Box>
            </Box>
            <Box component={'div'} className='footer_cols second'>
              <Typography component={'h4'} className='title'>Top Category</Typography>

              <Link component={'a'} to={'/store'} className='footer_navLink'>Foundation</Link>
              <Link component={'a'} to={'/store'} className='footer_navLink'>Brick</Link>
              <Link component={'a'} to={'/store'} className='footer_navLink'>Cement</Link>
              <Link component={'a'} to={'/store'} className='footer_navLink'>Metal</Link>
              <Link component={'a'} to={'/store'} className='footer_navLink'>Concret</Link>
              <Link component={'a'} to={'/store'} className='footer_navLink all'>Browse All Products <ArrowRightYellow /></Link>
            </Box>
            <Box component={'div'} className='footer_cols third'>
              <Typography component={'h4'} className='title'>Quick Links</Typography>

              <Link component={'a'} to='#' className='footer_navLink'>My Account</Link>
              <Link component={'a'} to='/about' className='footer_navLink'>About</Link>
              <Link component={'a'} to='/customersupport' className='footer_navLink'>Contact us</Link>
              <Link component={'a'} to='/faq' className='footer_navLink'>FAQ</Link>
              <Link component={'a'} to='/privacypolicy' className='footer_navLink'>Privacy Policy</Link>
              <Link component={'a'} to='/terms' className='footer_navLink'>Term & Conditions</Link>
            </Box>
            <Box component={'div'} className='footer_cols last'>
              <Typography component={'h4'} className='title'>Newsletter</Typography>

              <Typography component={'p'} className='footer_navLink'>Lorem Ipsum is simply dummy text of the printing and.</Typography>
              <Box component={'div'} className='newsletter_box'>
                <TextField fullWidth type='text' />
                <Button className='newsletter'>Subscribe</Button>
              </Box>

              <Box component={'div'} className='app_box'>
                <Typography component={'a'} href=''>
                  <img src={Googleplay} alt={Googleplay} />
                </Typography>
                <Typography component={'a'} href=''>
                  <img src={Appstore} alt={Appstore} />
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box component={'div'} className='footer_bottom'>
          <Typography component={'p'}>Zonixz - E-Commerce online store © 2024. Design by Brainfleck Graphics</Typography>
        </Box>
      </Box>
    </>
  );
}

export default Footer;
