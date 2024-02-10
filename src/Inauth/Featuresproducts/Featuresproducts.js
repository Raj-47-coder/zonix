import React from "react";
import { Box, Typography } from "@mui/material";
import product1 from '../../images/product-1.png';
import { ArrowRight } from '../../Zonixzsvgs/Zonixzsvgs';
import Products from '../Products/Products';
import './Featuresproducts.scss';
import 'swiper/css';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

function Bestdeals() {
  const { t, i18n } = useTranslation();

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
      <Box component={'div'} sx={{ backgroundColor: '#EDF1F3', padding: '2rem 0', margin: '2rem 0' }}>
        <Box component={'div'} className='container'>
          <Box component={'div'} className='section_title'>
            <Typography component={'h2'}>{t("titleFeature")}</Typography>
            <Link component={'a'} to='/store'>
              <Typography component={'span'}>Browse All Product </Typography>
              <ArrowRight />
            </Link>
          </Box>

          <Box component={'div'} className='product_box'>
            <Products productsList={productsList} />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Bestdeals;
