import React, { useState } from "react";
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import { Box, Typography, List, ListItem } from "@mui/material";
import Aboutimg from '../../images/about.png';

function About() {

  return (
    <>
      <Breadcrumb />

      <Box component={'div'} className='about_container'>
        <Box component={'div'} className='about_row'>
          <Box component={'div'} className='about_left'>
            <Typography component={'h3'}>Zonixz - largest contruction material shop in the world.</Typography>
            <Typography component={'p'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in</Typography>
            <List>
              <ListItem>Great 24/7 customer services.</ListItem>
              <ListItem>Enjoy budget-friendly prices on all our products.</ListItem>
              <ListItem>Secure & Transparent Payments.</ListItem>
              <ListItem>Over 1 Million Construction Products</ListItem>
            </List>
          </Box>

          <Box component={'div'} className='about_right'>
            <img src={Aboutimg} alt={Aboutimg} />
          </Box>
        </Box>
      </Box >
    </>
  );
}

export default About;
