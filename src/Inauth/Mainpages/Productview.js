import React, { useState } from "react";
import { Box, TextField, Typography, Button, ListItem, List, Table, TableBody, TableCell, TableRow, Menu, MenuItem } from "@mui/material";
import Breadcrumb from '../Breadcrumb/Breadcrumb'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode, Thumbs } from 'swiper/modules';
import 'swiper/css/thumbs';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import product1 from '../../images/product-1.png';
import brick from '../../images/brick.png';
import cement from '../../images/cement.png';
import concert from '../../images/concert.png';
import steel from '../../images/steel.png';
import mail from '../../images/mail.svg';
import pinterest from '../../images/pinterest.svg';
import fb from '../../images/fb.svg';
import link from '../../images/link.svg';
import { Heart, Rattingstart } from '../../Zonixzsvgs/Zonixzsvgs';
import { Link } from "react-router-dom";
import IosShareIcon from '@mui/icons-material/IosShare';
import Similarproduct from "../Similarproduct/Similarproduct";

function Productview() {
  const [selectedImagePath, setSelectedImagePath] = useState(product1);
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleOpenSocial = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseSocial = () => {
    setAnchorEl(null);
  };

  const handleClick = (path) => {
    setSelectedImagePath(path);
  };

  const handleIncrement = () => {
    setValue(prevValue => prevValue + 1);
  };

  const handleDecrement = () => {
    if (value > 0) {
      setValue(prevValue => prevValue - 1);
    }
  };

  return (
    <>
      <Breadcrumb />

      <Box component={'div'} className='container'>
        <Box component={'div'} className='product_viewBox'>
          <Box component={'div'} className='product_images'>
            <Box className='thumb_preview' >
              <img src={selectedImagePath} alt={selectedImagePath} />

              <Button
                aria-controls={open ? 'basic-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                onClick={handleOpenSocial}
                className='productShare_icon'
              >
                <IosShareIcon />
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleCloseSocial}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
                className='socialShare_menu'
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
              >
                <MenuItem>
                  <Typography component={'a'} href='#'>
                    <img src={mail} alt='Email' />Email</Typography>
                </MenuItem>
                <MenuItem>
                  <Typography component={'a'} href='#'>
                    <img src={pinterest} alt='pinterest' />pinterest</Typography>
                </MenuItem>
                <MenuItem>
                  <Typography component={'a'} href='#'>
                    <img src={fb} alt='fb' />Facebook</Typography>
                </MenuItem>
                <MenuItem>
                  <Typography component={'a'} href='#'>
                    <img src={link} alt='Copylink' />Copy Link</Typography>
                </MenuItem>
              </Menu>
            </Box>

            <Swiper
              loop={true}
              spaceBetween={15}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              breakpoints={{
                280: {
                  slidesPerView: 3,
                },
                400: {
                  slidesPerView: 4,
                },
                768: {
                  slidesPerView: 6,
                },
                992: {
                  slidesPerView: 7,
                },
                1200: {
                  slidesPerView: 4,
                },
              }}
              className="thumbNails"
            >
              <SwiperSlide className='thumbs' onClick={() => handleClick(product1)}>
                <img src={product1} alt={product1} />
              </SwiperSlide>
              <SwiperSlide className='thumbs' onClick={() => handleClick(brick)}>
                <img src={brick} alt={brick} />
              </SwiperSlide>
              <SwiperSlide className='thumbs' onClick={() => handleClick(cement)}>
                <img src={cement} alt={cement} />
              </SwiperSlide>
              <SwiperSlide className='thumbs' onClick={() => handleClick(concert)}>
                <img src={concert} alt={concert} />
              </SwiperSlide>
              <SwiperSlide className='thumbs' onClick={() => handleClick(steel)}>
                <img src={steel} alt={steel} />
              </SwiperSlide>
            </Swiper>
          </Box>
          <Box component={'div'} className='product_details'>
            <Typography component={'h4'} className='product_name'>8 mm - 32 mm Construction Bar, Grade: Fe 500D</Typography>
            <Typography component={'p'} className='price'>₹43/ Kg</Typography>
            <Typography component={'h5'} className='desc_title'>About Item:</Typography>
            <List className='desc_list'>
              <ListItem>
                <Typography component={'p'}>Brand : </Typography>
                <Typography component={'p'}>S J Steel</Typography>
              </ListItem>
              <ListItem>
                <Typography component={'p'}>Diameter: </Typography>
                <Typography component={'p'}>8 mm - 32 mm</Typography>
              </ListItem>
              <ListItem>
                <Typography component={'p'}>Type:</Typography>
                <Typography component={'p'}>TMT Bar</Typography>
              </ListItem>
              <ListItem>
                <Typography component={'p'}>Usage/Application:</Typography>
                <Typography component={'p'}>Construction</Typography>
              </ListItem>
              <ListItem>
                <Typography component={'p'}>Grade: </Typography>
                <Typography component={'p'}>Fe 500D</Typography>
              </ListItem>
            </List>

            <Typography component={'h5'} className='desc_title'>About this item</Typography>
            <List className='desc_list'>
              <ListItem className='listed'>Standardize New Non Rusted Material.</ListItem>
              <ListItem className='listed'>All Materials are ISI Standard.</ListItem>
              <ListItem className='listed'>All over India delivery.</ListItem>
              <ListItem className='listed'>Quick delivery.</ListItem>
              <ListItem className='listed'>Reasonable Market Price.</ListItem>
            </List>

            <Typography component={'h5'} className='desc_title'>Shipping Information:</Typography>
            <List className='desc_list'>
              <ListItem>
                <Typography component={'p'}>Delivery :</Typography>
                <Typography component={'p'}>Usually Delivers in 12 to 48 hours</Typography>
              </ListItem>
              <ListItem>
                <Typography component={'p'}>Shipping :</Typography>
                <Typography component={'p'}>Free shipping on all orders*</Typography>
              </ListItem>
              <ListItem>
                <Typography component={'p'}>Arrive :</Typography>
                <Typography component={'p'}>Free shipping on all orders*</Typography>
              </ListItem>
            </List>
          </Box>
          <Box component={'div'} className='order_manage'>
            <Box component={'div'} className='set_order'>
              <Box component={'div'} className='offerBox'>
                <Typography component={'h6'}>25% offer
                  <Typography component={'span'}>If order over ₹120</Typography>
                </Typography>
                <Box component={'div'} className='closeOffer'>Until Jan 30, 2024</Box>
              </Box>
            </Box>

            <Box component={'div'} className='product_stock'>
              <Typography component={'h6'} className='title'>Set Order</Typography>

              <Box component={'div'} className='selected_price'>
                <Box component={'div'} className='selected_product'>
                  <img src={product1} alt={product1} />
                </Box>
                <Box component={'div'} className='product_size'>
                  <Typography component={'p'}>Selected Size</Typography>
                  <Typography component={'h6'}>8 mm - 32 mm</Typography>
                </Box>
              </Box>

              <Box component={'div'} className='product_howMany'>
                <Button onClick={handleDecrement}>-</Button>
                <TextField type="number" fullWidth value={value} readOnly className='count' />
                <Button onClick={handleIncrement}>+</Button>
              </Box>

              <List className='total_price'>
                <ListItem>
                  <Typography component={'p'}>Total Price :</Typography>
                  <Typography component={'p'}>₹43.00</Typography>
                </ListItem>
              </List>
              <Button className='addToCart' fullWidth>Add to Cart</Button>
              <Link component={'a'} to={'/addcart'} className='butNow' fullWidth>Buy Now</Link>


              <Box component={'div'} className='addWachlist'>
                <Button>
                  <Heart /> Add to Watchlist
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box component={'div'} className='product_info'>
          <Typography component={'h4'}>Product information</Typography>

          <Box component={'div'} className='techAdd_infoBox'>
            <Box component={'div'} className='techAdd_info'>
              <Typography component={'h6'}>Technical Details</Typography>

              <Table className='productInfo_table'>
                <TableBody>
                  <TableRow>
                    <TableCell>Material</TableCell>
                    <TableCell>Construction</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Brand</TableCell>
                    <TableCell>S J Steel</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Type</TableCell>
                    <TableCell>TMT Bar</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Grade</TableCell>
                    <TableCell>Fe 500D</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>

            <Box component={'div'} className='techAdd_info'>
              <Typography component={'h6'}>Additional Information</Typography>

              <Table className='productInfo_table'>
                <TableBody>
                  <TableRow>
                    <TableCell>SKU</TableCell>
                    <TableCell>BBAACBARB0004</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Brand / Manufacturer</TableCell>
                    <TableCell>Aerobild</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Recommended Deals</TableCell>
                    <TableCell>Yes</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Previous Price</TableCell>
                    <TableCell>N/A</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Box>
        </Box>


        <Box component={'div'} className='product_description'>
          <Typography component={'h5'}>Product description :</Typography>
          <Typography component={'p'}>Experience the strength of top-quality TMT Bars with Shree Ji Steel Private Limited, (formally Shree Ji Steel Corporation), your trusted steel dealer from Kolkata,West Bengal. Our TMT Bars, sourced from Durgapur, West Bengal, Raipur, Raigarh, Chhattisgarh and Jalna, </Typography>
        </Box>
      </Box>

      <Similarproduct />

      <Box component={'div'} className='container'>
        <Box component={'div'} className='customreReview_box'>
          <Typography component={'h5'}>Customer reviews</Typography>

          <Box component={'div'} className='review_row'>
            <Box component={'div'} className='review_col'>
              <Typography component={'h6'}>4.9
                <Typography component={'sub'}>/ 5.5</Typography>
              </Typography>

              <Box component={'div'} className='rating_star'>
                <Rattingstart />
                <Rattingstart />
                <Rattingstart />
                <Rattingstart />
                <Rattingstart />
              </Box>
              <Typography component={'p'}>2.3K+ Reviews</Typography>
            </Box>

            <Box component={'div'} className='review_col'>

              <Box component={'div'} className='rating_starProgress'>
                <Rattingstart />
                <Typography component={'span'}>5</Typography>
                <Box component={'div'} className='progress_box'>
                  <Box component={'div'} className='progress_count'></Box>
                </Box>
                <Typography component={"p"}>1.5K</Typography>
              </Box>
              <Box component={'div'} className='rating_starProgress'>
                <Rattingstart />
                <Typography component={'span'}>4</Typography>
                <Box component={'div'} className='progress_box'>
                  <Box component={'div'} className='progress_count'></Box>
                </Box>
                <Typography component={"p"}>710</Typography>
              </Box>
              <Box component={'div'} className='rating_starProgress'>
                <Rattingstart />
                <Typography component={'span'}>3</Typography>
                <Box component={'div'} className='progress_box'>
                  <Box component={'div'} className='progress_count'></Box>
                </Box>
                <Typography component={"p"}>140</Typography>
              </Box>
              <Box component={'div'} className='rating_starProgress'>
                <Rattingstart />
                <Typography component={'span'}>2</Typography>
                <Box component={'div'} className='progress_box'>
                  <Box component={'div'} className='progress_count'></Box>
                </Box>
                <Typography component={"p"}>10</Typography>
              </Box>
              <Box component={'div'} className='rating_starProgress'>
                <Rattingstart />
                <Typography component={'span'}>1</Typography>
                <Box component={'div'} className='progress_box'>
                  <Box component={'div'} className='progress_count'></Box>
                </Box>
                <Typography component={"p"}>4</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>


      <Box component={'div'} className='container'>
        <Box component={'div'} className='writeReview_box'>
          <Typography component={'h5'}>Write Your Review</Typography>

          <Box component={'div'} className='write_review'>
            <Box component={'div'} className='write_reviewItems'>
              <Typography component={'label'} className='label required'>Nickname</Typography>
              <TextField type='text' fullWidth />
            </Box>
            <Box component={'div'} className='write_reviewItems'>
              <Typography component={'label'} className='label required'>Summary of Your Review</Typography>
              <TextField type='text' fullWidth />
            </Box>
            <Box component={'div'} className='write_reviewItems'>
              <Typography component={'label'} className='label required'>Review</Typography>
              <TextField multiline rows={6} type='text' fullWidth />
            </Box>
            <Box component={'div'} className='write_reviewItems'>
              <Button className='submit_btn'>Submit Review</Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Productview;
