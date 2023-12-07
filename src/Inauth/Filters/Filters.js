import React, { useState } from "react";
import { Box, Typography, RadioGroup, FormControlLabel, Radio, Slider, TextField, FormGroup, Checkbox } from "@mui/material";
import { StarFilled, StarBordered } from '../../Zonixzsvgs/Zonixzsvgs';
import './Filters.scss'

function Filters() {
  const [value, setValue] = useState([3000, 7000]);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box component={'div'} className='filter_cols'>
        <Typography component={'h4'} className='filterCols_title'>Category</Typography>

        <RadioGroup defaultValue="Category 1" className='radio_group' >
          <FormControlLabel value="Category 1" control={<Radio />} label="Category 1" />
          <FormControlLabel value="Category 2" control={<Radio />} label="Category 2" />
          <FormControlLabel value="Category 3" control={<Radio />} label="Category 3" />
          <FormControlLabel value="Category 4" control={<Radio />} label="Category 4" />
          <FormControlLabel value="Category 5" control={<Radio />} label="Category 5" />
          <FormControlLabel value="Category 6" control={<Radio />} label="Category 6" />
        </RadioGroup>
      </Box>

      <Box component={'div'} className='filter_cols'>
        <Typography component={'h4'} className='filterCols_title'>Price Range</Typography>

        <Slider
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          className='price_slider'
          min={500}
          max={10000}
          step={100}
        />
        <Box component={'div'} className='priceRange_input'>
          <TextField placeholder='Min price' value={value[0]} />
          <TextField placeholder='Max price' value={value[1]} />
        </Box>

        <RadioGroup defaultValue="All Price" className='radio_group' >
          <FormControlLabel value="All Price" control={<Radio />} label="All Price" />
          <FormControlLabel value="Under ₹500" control={<Radio />} label="Under ₹500" />
          <FormControlLabel value="₹1000 to ₹2000" control={<Radio />} label="₹1000 to ₹2000" />
          <FormControlLabel value="₹2000 to ₹3000" control={<Radio />} label="₹2000 to ₹3000" />
          <FormControlLabel value="₹3000 to ₹4000" control={<Radio />} label="₹3000 to ₹4000" />
          <FormControlLabel value="₹5000 to ₹6000" control={<Radio />} label="₹5000 to ₹6000" />
          <FormControlLabel value="₹6000 to ₹7000" control={<Radio />} label="₹6000 to ₹7000" />
        </RadioGroup>
      </Box>


      <Box component={'div'} className='filter_cols'>
        <Typography component={'h4'} className='filterCols_title'>Popular brands</Typography>

        <FormGroup className='checkbox_group'>
          <FormControlLabel control={<Checkbox defaultChecked />} label="UltraTech Cement" />
          <FormControlLabel control={<Checkbox />} label="ACC" />
          <FormControlLabel control={<Checkbox />} label="JK Cement" />
          <FormControlLabel control={<Checkbox />} label="Cement" />
          <FormControlLabel control={<Checkbox />} label="Grasim Industries" />
          <FormControlLabel control={<Checkbox />} label="Shree Cement" />
          <FormControlLabel control={<Checkbox />} label="Bharat Cement" />
          <FormControlLabel control={<Checkbox />} label="Ambuja Cements" />
          <FormControlLabel control={<Checkbox />} label="Saint-Gobain" />
          <FormControlLabel control={<Checkbox />} label="Jindal Saw" />
          <FormControlLabel control={<Checkbox />} label="JSW Cement" />
        </FormGroup>
      </Box>


      <Box component={'div'} className='filter_cols'>
        <Typography component={'h4'} className='filterCols_title'>Customer Reviews</Typography>

        <Box component={'div'} className='customer_reviews'>
          <StarFilled />
          <StarFilled />
          <StarFilled />
          <StarFilled />
          <StarFilled />
          <Typography component={'span'} className='filled'>& Up</Typography>
        </Box>
        <Box component={'div'} className='customer_reviews'>
          <StarFilled />
          <StarFilled />
          <StarFilled />
          <StarFilled />
          <StarBordered />
          <Typography component={'span'}>& Up</Typography>
        </Box>
        <Box component={'div'} className='customer_reviews'>
          <StarFilled />
          <StarFilled />
          <StarFilled />
          <StarBordered />
          <StarBordered />
          <Typography component={'span'}>& Up</Typography>
        </Box>
        <Box component={'div'} className='customer_reviews'>
          <StarFilled />
          <StarFilled />
          <StarBordered />
          <StarBordered />
          <StarBordered />
          <Typography component={'span'}>& Up</Typography>
        </Box>
        <Box component={'div'} className='customer_reviews'>
          <StarFilled />
          <StarBordered />
          <StarBordered />
          <StarBordered />
          <StarBordered />
          <Typography component={'span'}>& Up</Typography>
        </Box>
      </Box>

      <Box component={'div'} className='filter_cols'>
        <Typography component={'h4'} className='filterCols_title'>Discount</Typography>

        <FormGroup className='checkbox_group fullWidth'>
          <FormControlLabel control={<Checkbox defaultChecked />} label="10% Off or more" />
          <FormControlLabel control={<Checkbox />} label="20% Off or more" />
          <FormControlLabel control={<Checkbox />} label="30% Off or more" />
          <FormControlLabel control={<Checkbox />} label="40% Off or more" />
          <FormControlLabel control={<Checkbox />} label="50% Off or more" />
        </FormGroup>
      </Box>
    </>
  );
}

export default Filters;
