import React from "react";
import { Box, Typography } from "@mui/material";
import concert from '../../images/concert.png';
import steel from '../../images/steel.png';
import wood from '../../images/wood.png';
import brick from '../../images/brick.png';
import cement from '../../images/cement.png';
import metal from '../../images/metal.png';
import { ArrowRight } from '../../Zonixzsvgs/Zonixzsvgs'
import './Topcategory.scss';
import { Link, NavLink } from "react-router-dom";



function Topcategory() {

  return (
    <>
      <Box component={'div'} className="topCategory_box">
        <Box component={'div'} className="tocategory_row">
          <Box component={'div'} className="tocategory_cols">
            <Typography component={'h6'}>Make your bright home | up to 60% off</Typography>

            <Box component={'div'} className="inner_cardRow">
              <NavLink to={'/'} component={'a'} className="inner_card">
                <img src={brick} alt={'concert'} />
                <Typography component={'p'}>Brick</Typography>
              </NavLink>
              <NavLink to={'/'} component={'a'} className="inner_card">
                <img src={brick} alt={'concert'} />
                <Typography component={'p'}>Brick</Typography>
              </NavLink>
              <NavLink to={'/'} component={'a'} className="inner_card">
                <img src={brick} alt={'concert'} />
                <Typography component={'p'}>Brick</Typography>
              </NavLink>
              <NavLink to={'/'} component={'a'} className="inner_card">
                <img src={brick} alt={'concert'} />
                <Typography component={'p'}>Brick</Typography>
              </NavLink>
            </Box>
          </Box>

          <Box component={'div'} className="tocategory_cols">
            <Typography component={'h6'}>Make your bright home</Typography>

            <Box component={'div'} className="inner_cardRow">
              <NavLink to={'/'} component={'a'} className="inner_card">
                <img src={cement} alt={'concert'} />
                <Typography component={'p'}>Cement</Typography>
              </NavLink>
              <NavLink to={'/'} component={'a'} className="inner_card">
                <img src={cement} alt={'concert'} />
                <Typography component={'p'}>Cement</Typography>
              </NavLink>
              <NavLink to={'/'} component={'a'} className="inner_card">
                <img src={cement} alt={'concert'} />
                <Typography component={'p'}>Cement</Typography>
              </NavLink>
              <NavLink to={'/'} component={'a'} className="inner_card">
                <img src={cement} alt={'concert'} />
                <Typography component={'p'}>Cement</Typography>
              </NavLink>
            </Box>
          </Box>

          <Box component={'div'} className="tocategory_cols">
            <Typography component={'h6'}>Make your bright home</Typography>

            <Box component={'div'} className="inner_cardRow">
              <NavLink to={'/'} component={'a'} className="inner_card">
                <img src={wood} alt={'concert'} />
                <Typography component={'p'}>Wood</Typography>
              </NavLink>
              <NavLink to={'/'} component={'a'} className="inner_card">
                <img src={wood} alt={'concert'} />
                <Typography component={'p'}>Wood</Typography>
              </NavLink>
              <NavLink to={'/'} component={'a'} className="inner_card">
                <img src={wood} alt={'concert'} />
                <Typography component={'p'}>Wood</Typography>
              </NavLink>
              <NavLink to={'/'} component={'a'} className="inner_card">
                <img src={wood} alt={'concert'} />
                <Typography component={'p'}>Wood</Typography>
              </NavLink>
            </Box>
          </Box>

          <Box component={'div'} className="tocategory_cols">
            <Typography component={'h6'}>Make your bright home</Typography>

            <Box component={'div'} className="inner_cardRow">
              <NavLink to={'/'} component={'a'} className="inner_card">
                <img src={metal} alt={'concert'} />
                <Typography component={'p'}>metal</Typography>
              </NavLink>
              <NavLink to={'/'} component={'a'} className="inner_card">
                <img src={metal} alt={'concert'} />
                <Typography component={'p'}>metal</Typography>
              </NavLink>
              <NavLink to={'/'} component={'a'} className="inner_card">
                <img src={metal} alt={'concert'} />
                <Typography component={'p'}>metal</Typography>
              </NavLink>
              <NavLink to={'/'} component={'a'} className="inner_card">
                <img src={metal} alt={'concert'} />
                <Typography component={'p'}>metal</Typography>
              </NavLink>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Topcategory;
