import React from "react";
import { Box, Typography, Breadcrumbs, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { HomeIcon } from '../../Zonixzsvgs/Zonixzsvgs';

import './Breadcrumb.scss'

function Store() {
  return (
    <>
      <Box component={'div'} className='breadcrumb'>
        <Box component={'div'} className='container'>

          <Stack spacing={2}>
            <Breadcrumbs separator="›" >
              <Link underline="hover" key="1" to="/"><HomeIcon /> Home</Link>
              <Typography component={'p'} key="3">Category</Typography>
            </Breadcrumbs>
          </Stack>
        </Box>
      </Box>
    </>
  );
}

export default Store;
