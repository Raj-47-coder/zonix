import React, { useState, useEffect } from "react";
import { Box, Button, TextField, Typography, Menu, ListItem, List } from "@mui/material";
import { Logo, Pin, Magnifyglass, Order, Language, User, Heart, CartIcon, Humburgar } from "../../Zonixzsvgs/Zonixzsvgs";
import Categorysidevar from '../Categorysidebar/Categorysidebar';
import languageSquare from '../../images/language-square.png'
import { Link, NavLink } from "react-router-dom";
import "./Header.scss";

export default function Header() {
  const [handleSidebar, setHandleSidebar] = useState('');
  const [handleunlayer, setHandlelayout] = useState('');
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [showDiv, setShowDiv] = useState(false);
  const [submenu, setSubmenu] = useState('');
  const [openMenu, setOpenMenu] = useState(null);

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

  const handleFocus = () => {
    setShowDiv(true);
  };

  const handleBlur = () => {
    setShowDiv(false);
  };

  const handleSubmenu = () => {
    if (submenu === '') {
      setSubmenu('open');
    } else {
      setSubmenu('');
    }
  };

  const toggleMenu = (menuId) => {
    setOpenMenu(openMenu === menuId ? null : menuId);
  };

  return (
    <>
      <Box component={"div"} className="header">
        <Box component={"div"} className="header_top">
          <Box component={"div"} className="header_left">
            <Link component={"a"} to="/" className='logo'>
              <Logo />
            </Link>

            <Box component={"div"} className="user_location">
              <Pin />
              <Box component={"a"} href="https://maps.app.goo.gl/fN5wREpYeCc5qVtn9" className="location">
                <Typography component={"p"} className="locate">Delivering to</Typography>
                <Typography component={"p"} className="title">Navi mumbai, 410206</Typography>
              </Box>
            </Box>
          </Box>
          <Box component={"div"} className="header_center">
            <Box component={"div"} className="search_product">
              <Magnifyglass />
              <TextField type='text'
                onFocus={handleFocus}
                onBlur={handleBlur}
                autoComplete='off' fullWidth placeholder={'Search for More'} />
              {showDiv &&
                <Box component={'div'} className='searchProduct_suggest'>
                  <Box component={'div'} className='suggested_product'>
                    <img src='https://www.kgegroup.co.za/wp-content/uploads/2022/10/Construction-Materials.jpg' />
                    <Box component={'div'} className='suggested_productName'>
                      <Typography component={"h6"} className="locate">Steel Metal</Typography>
                      <Typography component={"p"} className="locate">Steel</Typography>
                    </Box>
                  </Box>
                  <Box component={'div'} className='suggested_product'>
                    <img src='https://5.imimg.com/data5/XK/GK/MY-23300825/construction-cement-500x500.jpg' />
                    <Box component={'div'} className='suggested_productName'>
                      <Typography component={"h6"} className="locate">Cement</Typography>
                      <Typography component={"p"} className="locate">Steel</Typography>
                    </Box>
                  </Box>
                  <Box component={'div'} className='suggested_product'>
                    <img src='https://www.hanson.my/sites/default/files/assets/images/10/de/concrete_in_construction.jpg' />
                    <Box component={'div'} className='suggested_productName'>
                      <Typography component={"h6"} className="locate">Concrete</Typography>
                      <Typography component={"p"} className="locate">Concrete</Typography>
                    </Box>
                  </Box>
                </Box>
              }
            </Box>
          </Box>
          <Box component={"div"} className="langu">
            <div id="google_translate_element"></div>
          </Box>
          <Box component={"div"} className="header_right">
            {/* <div id="google_translate_element"></div> */}

            <Typography component={'a'} href='javascrpt:void(0);' onMouseEnter={handleClick} className="status_bar">
              <User />
              <Box component={"div"} className="status_bar_name">
                <Typography component={"p"} className="title">Login</Typography>
                <Typography component={"p"} className="name">My Account</Typography>
              </Box>
            </Typography>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClick={handleClose}
              className='user_menu'
            >
              <ListItem onClick={handleClose}>
                <NavLink fullWidth component={'a'} to={'/profile'}>Profile</NavLink>
              </ListItem>
              {/* <ListItem onClick={handleClose}>
                <NavLink fullWidth component={'a'} to={'/orders'}>Orders</NavLink>
              </ListItem> */}
              <ListItem onClick={handleClose}>
                <NavLink fullWidth component={'a'} to={'/signform'}>Sign In</NavLink>
              </ListItem>
            </Menu>

            <Link component={"a"} to={'/orders'} className="status_bar">
              <Order />
              <Box component={"div"} className="status_bar_name">
                <Typography component={"p"} className="title">Order</Typography>
                <Typography component={"p"} className="name">My Order</Typography>
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
        {/* ----------------{ Humburgar---------------- } */}
        <Box component={"div"} className="">
          <Box component={'div'} className='menu_items'>
            <Typography component={'a'} href='javascript:void(0)' onClick={toggleDrawer} className='active'><Humburgar />Shop By Category</Typography>
            <Box component={'div'} className='menu sub_menu' onClick={() => toggleMenu('subMenu1')}>
              <Typography component={'a'} href='#'>Steel</Typography>

              <Box component={'div'} id='subMenu1' className={openMenu === 'subMenu1' ? "subMenu open" : "subMenu"}>
                <List>
                  <ListItem>
                    <Typography component={'a'} href={'#'}>
                      <img src={'https://iea.imgix.net/5009c499-0666-4626-9602-ce914398ed48/shutterstock_239544715.jpg?auto=compress%2Cformat&fit=min&q=80&rect=0%2C0%2C5184%2C3456&w=1280&h=853&fit=crop&fm=jpg&q=70&auto=format'} />
                      5 MM</Typography>
                  </ListItem>
                  <ListItem>
                    <Typography component={'a'} href={'#'}>
                      <img src={'https://static.javatpoint.com/difference/images/difference-between-iron-and-steel.png'} />
                      4 MM</Typography>
                  </ListItem>
                  <ListItem>
                    <Typography component={'a'} href={'#'}>
                      <img src={'https://aftabir.com/uploads/reportages/1292/pics/1705921460.jpg'} />
                      6 MM Square</Typography>
                  </ListItem>
                </List>
              </Box>
            </Box>

            <Box component={'div'} className='menu  '>
              <NavLink component={'a'} to='/store' onClick={openSidebar}>Brick</NavLink>
            </Box>

            <Box component={'div'} className='menu  '>
              <NavLink component={'a'} to='/store' onClick={openSidebar}>Cement</NavLink>
            </Box>

            <Box component={'div'} className='menu sub_menu' onClick={() => toggleMenu('subMenu2')}>
              <Typography component={'a'} href='#'>Metal</Typography>

              <Box component={'div'} id='subMenu2' className={openMenu === 'subMenu2' ? "subMenu open" : "subMenu"}>
                <List>
                  <ListItem>
                    <Typography component={'a'} href={'#'}>
                      <img src={'https://iea.imgix.net/5009c499-0666-4626-9602-ce914398ed48/shutterstock_239544715.jpg?auto=compress%2Cformat&fit=min&q=80&rect=0%2C0%2C5184%2C3456&w=1280&h=853&fit=crop&fm=jpg&q=70&auto=format'} />
                      1-10 Gauge</Typography>
                  </ListItem>
                  <ListItem>
                    <Typography component={'a'} href={'#'}>
                      <img src={'https://static.javatpoint.com/difference/images/difference-between-iron-and-steel.png'} />
                      11-20 Gauge</Typography>
                  </ListItem>
                  <ListItem>
                    <Typography component={'a'} href={'#'}>
                      <img src={'https://aftabir.com/uploads/reportages/1292/pics/1705921460.jpg'} />
                      21-30 Gauge</Typography>
                  </ListItem>
                </List>
              </Box>
            </Box>

            <Box component={'div'} className='menu  '>
              <NavLink component={'a'} to='/store' onClick={openSidebar}>Concret</NavLink>
            </Box>

            <Box component={'div'} className='menu  '>
              <NavLink component={'a'} to='/store' onClick={openSidebar}>Wooden</NavLink>
            </Box>

          </Box>
        </Box>
      </Box>

      <Box component={'div'} className={`unlayer ${handleunlayer}`} onClick={openSidebar}></Box>
      <Categorysidevar open={open} toggleDrawer={toggleDrawer} />
    </>
  );
}
