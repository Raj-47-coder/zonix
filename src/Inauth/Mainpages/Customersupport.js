import React, { useState } from "react";
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import Csimage from '../../images/customer_support.png';
import { Box, Typography, TextField, Button, List, ListItem } from "@mui/material";
import { Magnifyglass, Notepad, Stack, Users, Creditcard, Lockopen, Truck, Phonecall, Chats, ArrowRight } from '../../Zonixzsvgs/Zonixzsvgs'

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
            <img src={Csimage} alt={Csimage} />
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


      <Box component={'div'} className='contact_us'>

        <Box component={'div'} className='contact_us_container'>
          <Box component={'div'} className='contact_usBox'>
            <Typography component={'p'}>Contact us</Typography>
            <Typography component={'h2'}>Don’t find your answer.</Typography>
            <Typography component={'h2'}>Contact with us</Typography>
          </Box>


          <Box component={'div'} className='contact_us_row'>
            <Box component={'div'} className='contact_us_cols'>
              <Box component={'div'} className='icon primary'>
                <Phonecall />
              </Box>
              <Box component={'div'} className='details'>
                <Typography component={'h6'}>Call us now</Typography>
                <Typography component={'p'}>we are available online from 9:00 AM to 5:00 PM (GMT95:45) Talk with use now</Typography>
                <Typography component={'h4'}>+1-202-555-0126</Typography>

                <Typography component={'a'} className='primary' href='#'>Call Now <ArrowRight /></Typography>
              </Box>
            </Box>

            <Box component={'div'} className='contact_us_cols'>
              <Box component={'div'} className='icon success'>
                <Chats />
              </Box>
              <Box component={'div'} className='details'>
                <Typography component={'h6'}>Call us now</Typography>
                <Typography component={'p'}>we are available online from 9:00 AM to 5:00 PM (GMT95:45) Talk with use now</Typography>
                <Typography component={'h4'}>+1-202-555-0126</Typography>

                <Typography component={'a'} className='success' href='#'>Contact Us <ArrowRight /></Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Customersupport;
