import React, { useState, useEffect } from "react";
import { Box, Button, TextField, Typography, Menu, Select, MenuItem, ListItem } from "@mui/material";
import { Logo, Pin, Magnifyglass, User, Heart, CartIcon, Humburgar } from "../../Zonixzsvgs/Zonixzsvgs";
import Categorysidevar from '../Categorysidebar/Categorysidebar'
import { Link, NavLink, render } from "react-router-dom";
// import { useTranslation } from 'react-i18next';
import "./Header.scss";

export default function Header() {
  const [handleSidebar, setHandleSidebar] = useState('');
  const [handleunlayer, setHandlelayout] = useState('');
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [language, setLanguage] = useState(0);

  const handleLanguage = (e) => {
    // setLanguage(e.target.value);
    const selectedLanguage = e.target.value;
    // i18n.changeLanguage(selectedLanguage);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const openSidebar = () => {
    if (handleSidebar === '') {
      setHandleSidebar('open')
      setHandlelayout('open')
    } else {
      setHandleSidebar('')
      setHandlelayout('')
    }
  }

  // useEffect(() => {
  //   const googleTranslateElementInit = () => {
  //     new window.google.translate.TranslateElement(
  //       {
  //         pageLanguage: 'en',
  //         includedLanguages: 'en,hi,ma', // include this for selected languages
  //         layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
  //       },
  //       'google_translate_element'
  //     );
  //   };

  //   if (window.google && window.google.translate) {
  //     googleTranslateElementInit();
  //   } else {
  //     var addScript = document.createElement('script');
  //     addScript.setAttribute(
  //       'src',
  //       '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
  //     );
  //     document.body.appendChild(addScript);
  //   }
  // }, []);


  useEffect(() => {
    const googleTranslateElementInit = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: 'en,hi,gu',
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          'google_translate_element'
        );
      }
    };

    const loadScript = () => {
      const script = document.createElement('script');
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      script.onload = googleTranslateElementInit;
      document.body.appendChild(script);
    };

    // Check if google.translate is already defined
    if (!window.google || !window.google.translate) {
      // If not defined, load the script
      loadScript();
    } else {
      // If already defined, initialize directly
      googleTranslateElementInit();
    }
  }, []);

  return (
    <>
      <Box component={"div"} className="header">
        <Box component={"div"} className=" ">
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
                <TextField type='text' fullWidth placeholder={'Search for Products, Brands and More'} />
              </Box>
            </Box>
            <Box component={"div"} className="header_right">
              {/* <Select
                value={i18n.language}
                onChange={handleLanguage}
                className='language_select'
              >
                <MenuItem value="en">English</MenuItem>
                <MenuItem value="hi">Hindi(हिंदी)</MenuItem>
              </Select> */}

              {/* <Box component={'div'} id="google_translate_element"></Box> */}
              <div id="google_translate_element"></div>

              <Typography component={'a'} href='javascrpt:void(0);' onClick={handleClick} className="status_bar">
                <User />
                <Box component={"div"} className="status_bar_name">
                  <Typography component={"p"} className="title">Login</Typography>
                  <Typography component={"p"} className="name">My Account</Typography>
                </Box>
              </Typography>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                className='user_menu'
              // transformOrigin={{ horizontal: 'center', vertical: 'top' }}
              >

                <ListItem onClick={handleClose}>
                  <NavLink fullWidth component={'a'} to={'/profile'}>Profile</NavLink>
                </ListItem>
                <ListItem onClick={handleClose}>
                  <NavLink fullWidth component={'a'} to={'/orders'}>Orders</NavLink>
                </ListItem>
                <ListItem onClick={handleClose}>
                  <NavLink fullWidth component={'a'} to={'/'}>Log out</NavLink>
                </ListItem>
              </Menu>

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
                  <Typography component={"p"} className="title">Your Cart:</Typography>
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
          <Box component={"div"} className=" ">
            <Box component={'div'} className='menu_items'>
              <Typography component={'a'} href='javascript:void(0)' onClick={toggleDrawer} className='active'><Humburgar />Shop By Category</Typography>
              <NavLink component={'a'} to='/'>Home</NavLink>
              <NavLink component={'a'} to='/'>Foundation</NavLink>
              <NavLink component={'a'} to='/'>Brick</NavLink>
              <NavLink component={'a'} to='/'>Cement</NavLink>
              <NavLink component={'a'} to='/'>Metal</NavLink>
              <NavLink component={'a'} to='/'>Concret</NavLink>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box component={'div'} className={`unlayer ${handleunlayer}`} onClick={openSidebar}></Box>
      <Categorysidevar open={open} toggleDrawer={toggleDrawer} />
    </>
  );
}
