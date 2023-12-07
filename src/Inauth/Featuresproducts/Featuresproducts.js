import React from "react";
import { Box, Typography } from "@mui/material";
import product1 from '../../images/product-1.png';
import { ArrowRight } from '../../Zonixzsvgs/Zonixzsvgs';
import Products from '../Products/Products';
import './Featuresproducts.scss';
import 'swiper/css';
import { Link } from "react-router-dom";


function Bestdeals() {

  const productsList = [
    { name: 'Lorem Ipsum is simply dummy text of the printing', img: product1, delprice: 865.99, orgprice: 70 },
    { name: 'Lorem Ipsum is simply dummy text of the printing', img: product1, delprice: 865.99, orgprice: 70 },
    { name: 'Lorem Ipsum is simply dummy text of the printing', img: product1, delprice: 865.99, orgprice: 70 },
    { name: 'Lorem Ipsum is simply dummy text of the printing', img: product1, delprice: 865.99, orgprice: 70 },
    { name: 'Lorem Ipsum is simply dummy text of the printing', img: product1, delprice: 865.99, orgprice: 70 },
    { name: 'Lorem Ipsum is simply dummy text of the printing', img: product1, delprice: 865.99, orgprice: 70 },
    { name: 'Lorem Ipsum is simply dummy text of the printing', img: product1, delprice: 865.99, orgprice: 70 },
    { name: 'Lorem Ipsum is simply dummy text of the printing', img: product1, delprice: 865.99, orgprice: 70 },
    { name: 'Lorem Ipsum is simply dummy text of the printing', img: product1, delprice: 865.99, orgprice: 70 },
    { name: 'Lorem Ipsum is simply dummy text of the printing', img: product1, delprice: 865.99, orgprice: 70 },
    { name: 'Lorem Ipsum is simply dummy text of the printing', img: product1, delprice: 865.99, orgprice: 70 },
    { name: 'Lorem Ipsum is simply dummy text of the printing', img: product1, delprice: 865.99, orgprice: 70 },
  ]
  return (
    <>
      <Box component={'div'} className='container'>
        <Box component={'div'} className='section_title'>
          <Typography component={'h2'}>Featured Products</Typography>
          <Link component={'a'} to='/store'>
            <Typography component={'span'}>Browse All Product </Typography>
            <ArrowRight />
          </Link>
        </Box>

        <Box component={'div'} className='product_box'>
          <Products productsList={productsList} />
        </Box>
      </Box>
    </>
  );
}

export default Bestdeals;
