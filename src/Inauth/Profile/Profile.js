import React, { useState } from "react";
import { Box, Button, Tabs, Typography, Tab, List, ListItem, TabPanel } from "@mui/material";
import { Truck, User } from '../../Zonixzsvgs/Zonixzsvgs';
import './Profile.scss';

export default function Profile() {
  const [value, setValue] = useState(0);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box component={'div'} className='container'>
        <Box component={'div'} className='profile_row'>
          <Box component={'div'} className='profile_left'>
            <Box component={'div'} className='profile_name'>
              <Box component={'div'} className='profie_img'>
                <img src='https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png' alt='https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png' />
              </Box>
              <Box component={'div'} className='profie_details'>
                <Typography component={'p'}>Hello,</Typography>
                <Typography component={'h4'}>Jenish Patel</Typography>
              </Box>
            </Box>

            <Box component={'div'} className='setting_box'>
              <List>
                <ListItem>
                  <Typography component={'a'} href='#'> <Truck />My Order</Typography>
                </ListItem>
              </List>
              <List>
                <ListItem>
                  <Typography component={'p'}> <User />Account Settings</Typography>
                </ListItem>
                <ListItem className='settings'>
                  <Tabs
                    orientation="vertical"
                    value={value}
                    onChange={handleChange}
                  >
                    <Tab label="Profile Information" />
                    <Tab label="Manage Addresses" />
                    <Tab label="PAN Card Information" />
                  </Tabs>
                </ListItem>
              </List>
            </Box>
          </Box>
          <Box component={'div'} className='profile_right'>
            <Box component="div" hidden={value !== 0} className='tab_box'>
              <Typography component={'h4'}>Personal Information</Typography>

              <Box component={'div'} className='form_box'></Box>
            </Box>
            <Box component="div" hidden={value !== 1} className='tab_box'>
              Content for Tab 2
            </Box>
            <Box component="div" hidden={value !== 2} className='tab_box'>
              Content for Tab 3
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
