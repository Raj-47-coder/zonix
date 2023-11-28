import React from "react";
import { Box, TextField, Typography } from "@mui/material";
import { Logo, Pin, Magnifyglass, User, Heart, CartIcon, Humburgar } from "../../Zonixzsvgs/Zonixzsvgs";
import "./Header.scss";

export default function Header() {
  return (
    <>
      <Box component={"div"} className="header">
        <Box component={"div"} className="container">
          <Box component={"div"} className="header_top">
            <Box component={"div"} className="header_left">
              <Typography component={"a"} href="#" className='logo'>
                <Logo />
              </Typography>

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
              <Box component={"div"} className="status_bar">
                <User />
                <Box component={"div"} className="status_bar_name">
                  <Typography component={"p"} className="title">Login</Typography>
                  <Typography component={"p"} className="name">My Account</Typography>
                </Box>
              </Box>

              <Box component={"div"} className="status_bar">
                <Heart />
                <Box component={"div"} className="status_bar_name">
                  <Typography component={"p"} className="title">Favorite</Typography>
                  <Typography component={"p"} className="name">My Wishlist</Typography>
                </Box>
              </Box>

              <Box component={"div"} className="status_bar">
                <Box component={'div'} className='count'>
                  <CartIcon />
                  <Typography component={'span'}>2</Typography>
                </Box>
                <Box component={"div"} className="status_bar_name">
                  <Typography component={"p"} className="title">Your Cart :</Typography>
                  <Typography component={"p"} className="name">$00.00</Typography>
                </Box>
              </Box>
              <Box component={"div"} className="status_bar">
                <Humburgar />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
