import React, { useState } from "react";
import { Box, Typography, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, TableFooter, List, ListItem } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { ArrowRight, Crossborder } from '../../Zonixzsvgs/Zonixzsvgs';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import Brick from '../../images/brick.png'
import Wood from '../../images/wood.png'
import './Favourite.scss';

function Addcart() {
  const [value, setValue] = useState(0);


  const handleIncrement = () => {
    setValue(prevValue => prevValue + 1);
  };

  const handleDecrement = () => {
    if (value > 0) {
      setValue(prevValue => prevValue - 1);
    }
  };

  const whishlist = [];
  for (let i = 0; i < 5; i++) {
    whishlist.push(
      <TableRow>
        <TableCell className='removeLeft'>
          <Box component={'div'} className='actions'>
            <Button className='btn remove_addCart'>
              <Crossborder />
            </Button>
          </Box>
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
          <Box component={'div'} className='quantity'>
            <Button onClick={handleDecrement}>-</Button>
            <TextField type="number" fullWidth value={value} readOnly className='count' />
            <Button onClick={handleIncrement}>+</Button>
          </Box>
        </TableCell>
        <TableCell>
          <Box component={'div'} className='price_product'>
            <Typography component={'p'}>$999</Typography>
          </Box>
        </TableCell>
      </TableRow>
    );
  }
  return (
    <>
      <Breadcrumb />
      <Box component={'div'} className='container'>
        <Box component={'div'} className='cart_row'>
          <Box component={'div'} sx={{ display: 'none' }} className='cart_colLeft'>
            <Box component={'div'} className='favourite_box'>
              <Typography component={'h5'}>Shopping Cart</Typography>

              <TableContainer>
                <Table className='table'>
                  <TableHead>
                    <TableRow>
                      <TableCell>Products</TableCell>
                      <TableCell>Price</TableCell>
                      <TableCell>Quantity</TableCell>
                      <TableCell>Sub-Total</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {whishlist}
                  </TableBody>
                  <TableFooter>
                    <TableCell colSpan='4'>
                      <Box component={'div'} className='table_footer'>
                        <Link component={'a'} to={'/store'} className='footer_btn solid_text'>Return to shop</Link>
                        <Button className='footer_btn'>Update Cart</Button>
                      </Box>
                    </TableCell>
                  </TableFooter>
                </Table>
              </TableContainer>
            </Box>
          </Box>

          <Box component={'div'} className='cart_colLeft'>
            <Box component={'div'} className='cardTo_shopBox'>

              <Box component={'div'} className='cardTo_shop'>
                <Box component={'div'} className='carded_image'>
                  <Box component={'div'} className='product_image'>
                    <img src={Brick} alt={Brick} />
                  </Box>
                  <Box component={'div'} className='quantity'>
                    <Button onClick={handleDecrement}>-</Button>
                    <TextField type="number" fullWidth value={value} readOnly className='count' />
                    <Button onClick={handleIncrement}>+</Button>
                  </Box>

                </Box>
                <Box component={'div'} className='carded_details'>
                  <NavLink to={'/'} component={'a'}>Indian standard Quality Chips Building Material, Grade Standard: Standard, Packaging Type: Tipper Load Indian standard Quality Chips Building Material, Grade Standard: Standard, Packaging Type: Tipper Load</NavLink>
                  <Box component={'div'} className='price_product'>
                    <Typography component={'del'}>$1299</Typography>
                    <Typography component={'p'}>$999</Typography>
                  </Box>
                  <Box component={'div'} className='delivery_add'>
                    <Typography component={'h5'}>Deliver to :
                      <Typography component={'span'}>John Cartin, 395608</Typography>
                    </Typography>
                    <Typography component={'p'}>Paseo Berta Magaña s/n., Ponferrada, Cbr 25481</Typography>
                    <NavLink component={'a'} to={'/profile'} className='change_add'>Change</NavLink>
                  </Box>

                  <Button className="cardProduct_remove">Remove</Button>

                </Box>
              </Box>

              <Box component={'div'} className='cardTo_shop'>
                <Box component={'div'} className='carded_image'>
                  <Box component={'div'} className='product_image'>
                    <img src={Wood} alt={Wood} />
                  </Box>
                  <Box component={'div'} className='quantity'>
                    <Button onClick={handleDecrement}>-</Button>
                    <TextField type="number" fullWidth value={value} readOnly className='count' />
                    <Button onClick={handleIncrement}>+</Button>
                  </Box>

                </Box>
                <Box component={'div'} className='carded_details'>
                  <NavLink to={'/'} component={'a'}>Indian standard Quality Chips Building Material, Grade Standard: Standard, Packaging Type: Tipper Load Indian standard Quality Chips Building Material, Grade Standard: Standard, Packaging Type: Tipper Load</NavLink>
                  <Box component={'div'} className='price_product'>
                    <Typography component={'del'}>$900</Typography>
                    <Typography component={'p'}>$1385</Typography>
                  </Box>
                  <Box component={'div'} className='delivery_add'>
                    <Typography component={'h5'}>Deliver to :
                      <Typography component={'span'}>Kevin Kara, 0025</Typography>
                    </Typography>
                    <Typography component={'p'}>Paseo Berta Magaña s/n., Ponferrada, Cbr 25481</Typography>

                    <NavLink component={'a'} to={'/profile'} className='change_add'>Change</NavLink>
                  </Box>

                  <Button className="cardProduct_remove">Remove</Button>

                </Box>
              </Box>
            </Box>
          </Box>


          <Box component={'div'} className='cart_colRight'>
            <Box component={'div'} className='cart_total'>
              <Typography component={'h4'}>Price Details</Typography>

              <List className='total_sum'>
                <ListItem>
                  <Typography component={'span'}>Sub-Total</Typography>
                  <Typography component={'span'}>$320</Typography>
                </ListItem>
                <ListItem>
                  <Typography component={'span'}>Shipping</Typography>
                  <Typography component={'span'}>Free</Typography>
                </ListItem>
                <ListItem>
                  <Typography component={'span'}>Discount</Typography>
                  <Typography component={'span'}>$24</Typography>
                </ListItem>
                <ListItem>
                  <Typography component={'span'}>Tax</Typography>
                  <Typography component={'span'}>$61.99</Typography>
                </ListItem>
                <ListItem>
                  <Typography component={'span'}>Total</Typography>
                  <Typography component={'span'}>$357.99 USD</Typography>
                </ListItem>
              </List>

              <Button className='theme_btn'>Proceed to checkout</Button>
            </Box>

            <Box component={'div'} className='cart_total'>
              <Typography component={'h4'}>Coupon Code</Typography>

              <Box component={'div'} className='apply_coupon'>
                <TextField placeholder='Enter email' fullWidth />
                <Button className='apply_couponBtn'>Apply</Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Addcart;
