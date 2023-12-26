import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Logo, Pin, Magnifyglass, User, Heart, CartIcon, Humburgar } from "../../Zonixzsvgs/Zonixzsvgs";
import { Link } from "react-router-dom";
import "./Header.scss";

export default function Header() {
  const [handleSidebar, setHandleSidebar] = useState('');
  const [handleunlayer, setHandlelayout] = useState('');

  const openSidebar = () => {
    if (handleSidebar === '') {
      setHandleSidebar('open')
      setHandlelayout('open')
    } else {
      setHandleSidebar('')
      setHandlelayout('')
    }
  }
  return (
    <>
      <Box component={"div"} className="header">
        <Box component={"div"} className="container">
          <Box component={"div"} className="header_top">
            <Box component={"div"} className="header_left">
              <Link component={"a"} to="/" className='logo'>
                <Logo />
              </Link>

              <Box component={"div"} className="user_location">
                <Pin />
                <Box component={"div"} className="location">
                  <Typography component={"p"} className="title">Update Location</Typography>
                  <Typography component={"p"} className="locate">Delivering to Ahmedabad 380001</Typography>
                </Box>
              </Box>
            </Box>
            <Box component={"div"} className="header_center">
              <Box component={"div"} className="search_product">
                <Magnifyglass />
                <TextField type='text' fullWidth placeholder='Search for Products, Brands and More' />
              </Box>
            </Box>
            <Box component={"div"} className="header_right">
              <Link component={"a"} to={'/'} className="status_bar">
                <User />
                <Box component={"div"} className="status_bar_name">
                  <Typography component={"p"} className="title">Login</Typography>
                  <Typography component={"p"} className="name">My Account</Typography>
                </Box>
              </Link>

              <Link component={"a"} to={'/whishlist'} className="status_bar">
                <Heart />
                <Box component={"div"} className="status_bar_name">
                  <Typography component={"p"} className="title">Favorite</Typography>
                  <Typography component={"p"} className="name">My Wishlist</Typography>
                </Box>
              </Link>

              <Link component={"a"} to={'/addcart'} className="status_bar">
                <Box component={'div'} className='count'>
                  <CartIcon />
                  <Typography component={'span'}>2</Typography>
                </Box>
                <Box component={"div"} className="status_bar_name">
                  <Typography component={"p"} className="title">Your Cart :</Typography>
                  <Typography component={"p"} className="name">$00.00</Typography>
                </Box>
              </Link>
              <Box component={"div"} className="status_bar">
                <Button className="humbargur" onClick={openSidebar}>
                  <Humburgar />
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box component={'div'} className={`header_menu ${handleSidebar}`}>
          <Box component={'div'} className='menu_title'>
            <Typography component={'div'} className='logo'><Logo /></Typography>
            <Button className='close_button' onClick={openSidebar}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.57 5.93005L3.5 12.0001L9.57 18.0701" stroke="#FFFFFF" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M20.5 12H3.66998" stroke="#FFFFFF" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Button>
          </Box>
          <Box component={"div"} className="container">
            <Box component={'div'} className='menu_items'>
              <Typography component={'a'} href='#'><Humburgar />All</Typography>
              <Typography component={'a'} href='#'>SELL</Typography>
              <Typography component={'a'} href='#'>BEST SELLERS</Typography>
              <Typography component={'a'} href='#'>TODAY’S DEALS</Typography>
              <Typography component={'a'} href='#'>CUSTOMER SERVICE</Typography>
              <Typography component={'a'} href='#'>NEW RELEASES</Typography>
              <Typography component={'a'} href='#'>GIFT IDEAS</Typography>
              <Typography component={'a'} href='#'>ABOUT US</Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box component={'div'} className={`unlayer ${handleunlayer}`} onClick={openSidebar}></Box>
    </>
  );
}
