import React from "react";
import { Box, Typography, Breadcrumbs, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { CartIcon, Crossborder } from '../../Zonixzsvgs/Zonixzsvgs';
import Breadcrumb from '../Breadcrumb/Breadcrumb'
import './Favourite.scss';

function Whishlist() {
  const whishlist = [];
  for (let i = 0; i < 15; i++) {
    whishlist.push(
      <TableRow>
        <TableCell>

          <Box component={'div'} className='cart_product'>
            <Box component={'div'} className='cart_img'>
              <img src={'https://cdn.shopify.com/s/files/1/0070/7032/files/image5_4578a9e6-2eff-4a5a-8d8c-9292252ec848.jpg?v=1620247043'}
                alt={'https://cdn.shopify.com/s/files/1/0070/7032/files/image5_4578a9e6-2eff-4a5a-8d8c-9292252ec848.jpg?v=1620247043'}
              />
            </Box>
            <Typography component={'p'}>Indian standard Quality Chips Building Material, Grade Standard: Standard, Packaging Type: Tipper Load Indian standard Quality Chips Building Material, Grade Standard: Standard, Packaging Type: Tipper Load</Typography>
          </Box>
        </TableCell>
        <TableCell>
          <Box component={'div'} className='price_product'>
            <Typography component={'del'}>$1299</Typography>
            <Typography component={'p'}>$999</Typography>
          </Box>
        </TableCell>
        <TableCell>
          <Typography component={'span'} className='badge instock'>IN STOCK</Typography>
        </TableCell>
        <TableCell>
          <Box component={'div'} className='actions'>
            <Button className='btn addCart'>
              <Typography component={'span'} className='title'>Add to cart</Typography>
              <CartIcon />
            </Button>
            <Button className='btn remove_addCart'>
              <Crossborder />
            </Button>
          </Box>
        </TableCell>
      </TableRow>
    );
  }
  return (
    <>
      <Breadcrumb />
      <Box component={'div'} className='container'>
        <Box component={'div'} className='favourite_box'>
          <Typography component={'h5'}>Wishlist</Typography>

          <TableContainer>
            <Table className='table'>
              <TableHead>
                <TableRow>
                  <TableCell>Products</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Stock Status</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Box component={'div'} className='cart_product'>
                      <Box component={'div'} className='cart_img'>
                        <img src={'https://cdn.shopify.com/s/files/1/0070/7032/files/image5_4578a9e6-2eff-4a5a-8d8c-9292252ec848.jpg?v=1620247043'}
                          alt={'https://cdn.shopify.com/s/files/1/0070/7032/files/image5_4578a9e6-2eff-4a5a-8d8c-9292252ec848.jpg?v=1620247043'}
                        />
                      </Box>
                      <Typography component={'p'}>Indian standard Quality Chips Building Material, Grade Standard: Standard, Packaging Type: Tipper Load Indian standard Quality Chips Building Material, Grade Standard: Standard, Packaging Type: Tipper Load</Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box component={'div'} className='price_product'>
                      <Typography component={'del'}>$1299</Typography>
                      <Typography component={'p'}>$999</Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Typography component={'span'} className='badge instock'>IN STOCK</Typography>
                  </TableCell>
                  <TableCell>
                    <Box component={'div'} className='actions'>
                      <Button className='btn addCart'>
                        <Typography component={'span'} className='title'>Add to cart</Typography>
                        <CartIcon />
                      </Button>
                      <Button className='btn remove_addCart'>
                        <Crossborder />
                      </Button>
                    </Box>
                  </TableCell>
                </TableRow>
                {whishlist}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </>
  );
}

export default Whishlist;
