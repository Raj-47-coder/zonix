import React, { useState } from "react";
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import { Magnifyglass, Notepad, Stack, Users, Creditcard, Lockopen, Truck } from '../../Zonixzsvgs/Zonixzsvgs'
import { Box, Typography, TextField, Button, List, ListItem } from "@mui/material";

function Customersupport() {

  return (
    <>
      <Breadcrumb />

      <Box component={'div'} className='cs_container'>
        <Box component={'div'} className='help_center_row'>
          <Box component={'div'} className='help_center_left'>
            <Typography component={'p'}>help Center</Typography>
            <Typography component={'h3'}>How we can help you!</Typography>
            <Box component={'div'} className='newsletter_box'>
              <TextField fullWidth type='text' placeholder='Enter your question or keyword' />
              <Box component={"div"} className='search_icon'><Magnifyglass /></Box>
              <Button className='newsletter'>Search</Button>
            </Box>
          </Box>
          <Box component={'div'} className='help_center_right'>
            img
          </Box>
        </Box>

        <Box component={'div'} className='assist_box'>
          <Typography component={'h2'}>What can we assist you with today?</Typography>


          <Box component={'div'} className='assist_list'>
            <Box component={'div'} className='assist_listItem'>
              <Box component={'div'} className='icon'>
                <Truck />
              </Box>
              <Typography component={'span'}>Track Order</Typography>
            </Box>
            <Box component={'div'} className='assist_listItem'>
              <Box component={'div'} className='icon'>
                <Lockopen />
              </Box>
              <Typography component={'span'}>Reset Password</Typography>
            </Box>
            <Box component={'div'} className='assist_listItem'>
              <Box component={'div'} className='icon'>
                <Creditcard />
              </Box>
              <Typography component={'span'}>Payment Option</Typography>
            </Box>
            <Box component={'div'} className='assist_listItem'>
              <Box component={'div'} className='icon'>
                <Users />
              </Box>
              <Typography component={'span'}>User & Account</Typography>
            </Box>
            <Box component={'div'} className='assist_listItem'>
              <Box component={'div'} className='icon'>
                <Stack />
              </Box>
              <Typography component={'span'}>Wishlist</Typography>
            </Box>
            <Box component={'div'} className='assist_listItem'>
              <Box component={'div'} className='icon'>
                <Notepad />
              </Box>
              <Typography component={'span'}>Shipping & Billing</Typography>
            </Box>
            <Box component={'div'} className='assist_listItem'>
              <Box component={'div'} className='icon'>
                <Creditcard />
              </Box>
              <Typography component={'span'}>Shoping Cart</Typography>
            </Box>
          </Box>
        </Box>

        <Box component={'div'} className='topics_box'>
          <Typography component={'h2'}>Popular Topics</Typography>

          <List>
            <ListItem>How do I return my item?</ListItem>
            <ListItem>What is Zonixz Returns Policy?</ListItem>
            <ListItem>How long is the refund process?</ListItem>
            <ListItem>What are the 'Delivery Timelines'?</ListItem>
            <ListItem>What is 'Discover Your Daraz Campaign 2024'?</ListItem>
            <ListItem>What is the Voucher & Gift Offer in this Campaign?</ListItem>
            <ListItem>How to cancel Zonixz Order.</ListItem>
            <ListItem>Ask the Digital and Device Community</ListItem>
          </List>
        </Box>
      </Box>

    </>
  );
}

export default Customersupport;
