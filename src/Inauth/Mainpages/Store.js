import React, { useState } from "react";
import Breadcrumb from '../Breadcrumb/Breadcrumb'
import Filters from '../Filters/Filters';
import Products from "../Products/Products";
import product1 from '../../images/product-1.png';
import { CloseRound, Magnifyglass } from '../../Zonixzsvgs/Zonixzsvgs';
import { Box, TextField, Typography, MenuItem, FormControl, Select, Button } from "@mui/material";

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
  const [sortBy, setSortBy] = React.useState(0);

  const HandleFilter = () => {
    if (filterOpen === '') {
      setFilterOpen('open')
    } else {
      setFilterOpen('')
    }
  }

  const handleChange = (e) => {
    setSortBy(e.target.value);
  };

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
            <Box component={'div'} className='Storeproduct_action'>
              <Box component={'div'} className='sort_product'>
                <Box component={"div"} className="search_product">
                  <Magnifyglass />
                  <TextField type='text' fullWidth placeholder='Search for anything...' />
                </Box>

                <Box component={"div"} className="sorting_box">
                  <Typography component={'label'} className='label'>Sort by :</Typography>
                  <FormControl className='sort_select' fullWidth>
                    <Select value={sortBy} onChange={handleChange} className='menu_list'>
                      <MenuItem value={0}>Most Popular</MenuItem>
                      <MenuItem value={1}>Hight to Low</MenuItem>
                      <MenuItem value={3}>Low to high</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Box>
              <Box component={'div'} className='sorting_result'>
                <Box component={"div"} className="fliter_tags">
                  <Typography component={'h5'}>Active Filters:</Typography>
                  <Box component={'div'} className='tag_bdage'>
                    <Typography component={'span'} className='tag'>Category 1 <Button className='remove_tag'>x</Button>  </Typography>
                  </Box>
                </Box>

                <Box component={"div"} className="sorting_box">
                  <Typography component={'label'} className='label'>Sort by :</Typography>
                  <FormControl className='sort_select' fullWidth>
                    <Select value={sortBy} onChange={handleChange} className='menu_list'>
                      <MenuItem value={0}>Most Popular</MenuItem>
                      <MenuItem value={1}>Hight to Low</MenuItem>
                      <MenuItem value={3}>Low to high</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Box>
            </Box>
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
