import React, { useState } from "react";
import Breadcrumb from '../Breadcrumb/Breadcrumb'
import Filters from '../Filters/Filters';
import Products from "../Products/Products";
import product1 from '../../images/product-1.png';
import { CloseRound } from '../../Zonixzsvgs/Zonixzsvgs';
import { Box, Typography, Link, Breadcrumbs, Stack, Button } from "@mui/material";

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
function Store() {
  const [filterOpen, setFilterOpen] = useState('');

  const HandleFilter = () => {
    if (filterOpen === '') {
      setFilterOpen('open')
    } else {
      setFilterOpen('')
    }
  }
  return (
    <>
      <Breadcrumb />
      <Box component={'div'} className='container'>
        <Button className='close_filter' color='primary' onClick={HandleFilter}>Open Filter</Button>
        <Box component={'div'} className='store_box'>
          <Box component={'div'} className={`fiters_box ${filterOpen}`}>
            <Button className='close_filter' onClick={HandleFilter}><CloseRound /></Button>
            <Filters filterOpen={filterOpen} />
          </Box>
          <Box component={'div'} className='Storeproduct_box'>
            <Box component={'div'} className='product_listBox'>
              <Products productsList={productsList} />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Store;
