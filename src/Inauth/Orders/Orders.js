import React, { useState } from "react";
import { Box, Typography, Checkbox, FormControlLabel, Button } from "@mui/material";
import OrderImg from '../../images/brick.png';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import './Order.scss';

const orderList = [
  {
    orderimg: OrderImg,
    orderName: 'Indian standard Quality Chips Building Material, Grade Standard: Standard, Packaging Type: Tipper Load',
    orderPrice: '1099',
    orderStatus: 'success',
  },
  {
    orderimg: OrderImg,
    orderName: 'Indian standard Quality Chips Building Material, Grade Standard:',
    orderPrice: '599',
    orderStatus: 'danger',
  },
]

export default function Orders() {
  const [profile, setProfile] = React.useState('');

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
        <Box component={'div'} className='orders_row'>
          <Box component={'div'} className={`orders_left ${profile}`}>
            <Typography component={'h4'}>Filters</Typography>

            <Box component={'div'} className="filter_items">
              <Typography component={'p'}>Order Status</Typography>

              <Box component={'div'} className='check_box'>
                <FormControlLabel control={<Checkbox defaultChecked />} label={
                  <Typography>On the way</Typography>
                } />
              </Box>
              <Box component={'div'} className='check_box'>
                <FormControlLabel control={<Checkbox />} label={
                  <Typography>Delivered</Typography>
                } />
              </Box>
              <Box component={'div'} className='check_box'>
                <FormControlLabel control={<Checkbox />} label={
                  <Typography>Cancelled</Typography>
                } />
              </Box>
              <Box component={'div'} className='check_box'>
                <FormControlLabel control={<Checkbox />} label={
                  <Typography>Returned</Typography>
                } />
              </Box>
            </Box>

            <Box component={'div'} className="filter_items">
              <Typography component={'p'}>Order Time</Typography>

              <Box component={'div'} className='check_box'>
                <FormControlLabel control={<Checkbox defaultChecked />} label={
                  <Typography>Last 30 days</Typography>
                } />
              </Box>
              <Box component={'div'} className='check_box'>
                <FormControlLabel control={<Checkbox />} label={
                  <Typography>2023</Typography>
                } />
              </Box>
              <Box component={'div'} className='check_box'>
                <FormControlLabel control={<Checkbox />} label={
                  <Typography>2022</Typography>
                } />
              </Box>
              <Box component={'div'} className='check_box'>
                <FormControlLabel control={<Checkbox />} label={
                  <Typography>2021</Typography>
                } />
              </Box>
            </Box>
          </Box>

          <Box component={'div'} className='orders_right'>
            <Button className='profile_leftBtn' onClick={handleprofile}>{profile === '' ? <KeyboardArrowRightIcon /> : <KeyboardArrowLeftIcon />}</Button>

            {orderList.map((items, i) => (
              <Box component={'div'} className='order_card'>
                <Box component={'div'} className='orders_item'>
                  <img src={items.orderimg} alt='Brick' />
                  <Typography component={'p'}>{items.orderName}</Typography>
                </Box>

                <Box component={'div'} className='orders_price'>
                  <Typography component={'p'}>₹{items.orderPrice}</Typography>
                </Box>

                <Box component={'div'} className='orders_status'>
                  <Typography component={'h6'} className={`status ${items.orderStatus}`}>Delivered on Dec 14, 2023</Typography>
                  {items.orderStatus === 'success' ? <Typography component={'p'}>Your item has been delivered</Typography> : ''}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
}
