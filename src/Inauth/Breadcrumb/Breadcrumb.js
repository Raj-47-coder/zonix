import React, { useEffect, useState } from "react";
import { Box, Typography, Breadcrumbs, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { HomeIcon } from '../../Zonixzsvgs/Zonixzsvgs';
import { useLocation } from 'react-router-dom';
import './Breadcrumb.scss'

function Store() {
  const location = useLocation();
  const [pageName, setPageName] = useState('');

  useEffect(() => {
    const pathname = location.pathname;
    const pageName = pathname.substring(1);
    setPageName(pageName);
  }, [location.pathname]);
  return (
    <>
      <Box component={'div'} className='breadcrumb'>
        <Box component={'div'} className='container'>

          <Stack spacing={2}>
            <Breadcrumbs separator="›" >
              <Link underline="hover" key="1" to="/"><HomeIcon /> Home</Link>
              <Typography component={'p'} key="3">{pageName}</Typography>
            </Breadcrumbs>
          </Stack>
        </Box>
      </Box>
    </>
  );
}

export default Store;
