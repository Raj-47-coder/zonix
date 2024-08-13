import React, { useState } from "react";
import { Box, Button, Tabs, Typography, Tab, List, ListItem, RadioGroup, Checkbox, TextField, Menu, MenuItem, FormControlLabel, Radio, Select } from "@mui/material";
import { Truck, User, Plus } from '../../Zonixzsvgs/Zonixzsvgs';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { NavLink } from "react-router-dom";
import './Profile.scss';

export default function Profile() {
  const [value, setValue] = useState(0);
  const [state, setState] = React.useState(0);
  const [addAddress, setAddAddress] = React.useState('none');
  const [addAddressBtn, setAddAddressBtn] = React.useState('block');
  const [profile, setProfile] = React.useState('');


  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  const handleChangeState = (event) => {
    setState(event.target.value);
  };

  const handleAddressbox = (e) => {
    if (addAddress === 'none') {
      setAddAddress('block')
      setAddAddressBtn('none')
    } else {
      setAddAddress('none')
      setAddAddressBtn('block')
    }
  }

  const handleprofile = () => {
    if (profile === '') {
      setProfile('open')
    } else {
      setProfile('')
    }
  }

  return (
    <>
      <Box component={'div'} className='container'>
        <Box component={'div'} className='profile_row'>
          <Box component={'div'} className={`profile_left ${profile}`}>
            <Box component={'div'} className='profile_name'>
              <Box component={'div'} className='profie_img'>
                <img src='https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png' alt='https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png' />
              </Box>
              <Box component={'div'} className='profie_details'>
                <Typography component={'p'}>Hello,</Typography>
                <Typography component={'h4'}>Zonix User</Typography>
              </Box>
            </Box>

            <Box component={'div'} className='setting_box'>
              <List>
                <ListItem>
                  <NavLink component={'a'} to='/orders' className='caret'> <Truck />My Order</NavLink>
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
                    <Tab label="Profile Information" onClick={handleprofile} />
                    <Tab label="Manage Addresses" onClick={handleprofile} />
                    <Tab label="PAN Card Information" onClick={handleprofile} />
                  </Tabs>
                </ListItem>
              </List>
            </Box>
          </Box>
          <Box component={'div'} className='profile_right'>
            <Box component={'div'} className='order_filter'>
              <Typography component={'p'}>Order Filter</Typography>
              <Button className='profile_leftBtn' onClick={handleprofile}>{profile === '' ? <KeyboardArrowRightIcon /> : <KeyboardArrowLeftIcon />}</Button>
            </Box>
            
            {/* Left Profil box Actions */}
            <Box component="div" hidden={value !== 0} className='tab_box'>
              <Typography component={'h4'}>Profile Information <Button className='edit_info'>Edit</Button></Typography>
              <Box component={'div'} className='form_box'>
                <Box component={'div'} className='form_box_item'>
                  <TextField placeholder='First name' fullWidth enable value='' />
                </Box>
                <Box component={'div'} className='form_box_item'>
                  <TextField placeholder='Last name' fullWidth enable value='' />
                </Box>
                <Box component={'div'} className='form_box_item small mobile'>
                  <Button className='save_info' enable>Save</Button>
                </Box>
              </Box>

              <Typography component={'h4'}>Your Gender</Typography>
              <Box component={'div'} className='form_box'>
                <Box component={'div'} className='form_box_item'>
                  <RadioGroup row >
                    <FormControlLabel value="male" control={<Radio enable />} label="Male" />
                    <FormControlLabel value="female" control={<Radio enable />} label="Female" />
                  </RadioGroup>
                </Box>
              </Box>

              <Typography component={'h4'}>Email Address <Button className='edit_info'>Edit</Button></Typography>
              <Box component={'div'} className='form_box'>
                <Box component={'div'} className='form_box_item'>
                  <TextField placeholder='Type your e-mail' fullWidth enable value='' />
                </Box>
                <Box component={'div'} className='form_box_item small'>
                  <Button className='save_info' enable>Save</Button>
                </Box>
              </Box>

              <Typography component={'h4'}>Mobile Number <Button className='edit_info'>Edit</Button></Typography>
              <Box component={'div'} className='form_box'>
                <Box component={'div'} className='form_box_item'>
                  <TextField placeholder='Phone number' fullWidth disabled value='' />
                </Box>
                <Box component={'div'} className='form_box_item small'>
                  <Button className='save_info' enable>Save</Button>
                </Box>
              </Box>
            </Box>
            <Box component="div" hidden={value !== 1} className='tab_box'>
              <Typography component={'h4'}>Manage Addresses</Typography>

              <Box component={'div'} sx={{ display: addAddressBtn }} className='add_addressbtn'>
                <Button onClick={handleAddressbox}><Plus />Add a new Address</Button>
              </Box>

              {/* ==== New Address form ==== */}
              <Box component={'div'} className='addressForm_box' sx={{ display: addAddress }}>
                <Box component={'div'} className='form_box form_simple'>
                  <Box component={'div'} className='form_box_item'>
                    <TextField type='text' placeholder='Full Name' fullWidth />
                  </Box>
                  <Box component={'div'} className='form_box_item'>
                    <TextField type='number' placeholder='Phone Number' fullWidth />
                  </Box>
                  <Box component={'div'} className='form_box_item'>
                    <TextField type='number' placeholder='Pincode' fullWidth />
                  </Box>
                  <Box component={'div'} className='form_box_item'>
                    <TextField type='text' placeholder='Locality' fullWidth />
                  </Box>
                  <Box component={'div'} className='form_box_item'>
                    <TextField type='text' placeholder='City/District/Town' fullWidth />
                  </Box>
                  <Box component={'div'} className='form_box_item'>
                    <Select
                      value={state}
                      onChange={handleChangeState}
                    >
                      <MenuItem value={0}>Gujrat</MenuItem>
                      <MenuItem value={1}>Maharstra</MenuItem>
                      <MenuItem value={2}>MP</MenuItem>
                    </Select>
                  </Box>
                  <Box component={'div'} className='form_box_item'>
                    <TextField type='text' placeholder='Landmark(Optional)' fullWidth />
                  </Box>
                  <Box component={'div'} className='form_box_item'>
                    <TextField type='number' placeholder='Alternate Phone (Optional)' fullWidth />
                  </Box>
                  <Box component={'div'} className='form_box_item fullWidth'>
                    <TextField multiline rows={5} type='text' placeholder='Address (Area and Street)' fullWidth />
                  </Box>
                  <Box component={'div'} className='form_box_item'>
                    <Button className='address_btn fill'>Save</Button>
                    <Button className='address_btn ouline' onClick={handleAddressbox}>Cancle</Button>
                  </Box>
                </Box>
              </Box>

              <Box component={'div'} className='address_preview'>
                <Box component={'div'} className='user_name'>
                  <Typography component={'h4'}>Randy Orton</Typography>
                  <Typography component={'span'}>+1 2243776655</Typography>
                  <Typography component={'p'}>5055 Forsyth Commerce Road Suite 100. Orlando, FL 32807. USA </Typography>
                </Box>
                <IconButton onClick={handleClick}>
                  <MoreVertIcon sx={{ fontSize: '2.2rem' }} />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Edit</MenuItem>
                  <MenuItem onClick={handleClose}>Delete</MenuItem>
                </Menu>
              </Box>
            </Box>
            <Box component="div" hidden={value !== 2} className='tab_box'>
              <Typography component={'h4'}>PAN Card Information</Typography>

              <Box component={'div'} className='form_box form_simple'>
                <Box component={'div'} className='form_box_item'>
                  <TextField type='text' placeholder='PAN Card Number' fullWidth />
                </Box>
                <Box component={'div'} className='form_box_item'>
                  <TextField type='number' placeholder='Name as on PAN Card' fullWidth />
                </Box>
                <Box component={'div'} className='form_box_item fullWidth'> 
                  <TextField type='file' placeholder='Pincode' fullWidth />
                </Box>
                <Box component={'div'} className='form_box_item fullWidth'>
                  <Box component={'div'} className='check_box'>
                    <FormControlLabel control={<Checkbox />} label={
                      <Typography>I do hereby declare that PAN furnished/stated above is correct and belongs to me, registered as an account holder with www.zonixz.com.</Typography>
                    } />
                  </Box>
                </Box>

                <Box component={'div'} className='form_box_item fullWidth'>
                  <Button className='address_btn fill'>Upload</Button>
                </Box>
                <Box component={'div'} className='form_box_item fullWidth'>
                  <NavLink component={'a'} className='pan_cardTerm' target='_blank' to='/terms'>Read Terms & Conditions of PAN Card Information</NavLink>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
