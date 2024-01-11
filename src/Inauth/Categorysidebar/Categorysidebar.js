import React, { useState } from 'react';
import { Box, Button, Typography, Drawer, Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { Plus } from '../../Zonixzsvgs/Zonixzsvgs'
import './Categorysidebar.scss';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { NavLink } from 'react-router-dom';


const accordionData = [
  {
    id: 1, heading: 'Foundation', menulist: [
      'Crushed gravel(Compaction)',
      'Pressure Pipes',
      'Fance',
      'Rock Anchorage',
      'Stone (Different sizes)',
      'Cement',
    ]
  },
  {
    id: 2, heading: 'Conventional Shuttering', menulist: [
      'Plywood',
      'Aluminium',
      'Mach-Deck Shuttering',
      'Shuttering oil',
      'Battens',
      'H Frames',
    ]
  },
  {
    id: 3, heading: 'AAC', menulist: [
      '75mm',
      '100mm',
      '125mm',
      '150mm',
      '175mm',
      '200mm',
    ]
  },
  {
    id: 4, heading: 'Brick', menulist: [
      '4 Inch',
      '6 Inch',
      'Block Adhesive',
      'Brick Bat',
    ]
  },
  {
    id: 5, heading: 'Civil Sub/Super-Structure', menulist: [
      'Chalk marking',
      'Ladder',
      'Rope',
      'Gusset Plate',
      'Electrodes',
      'Nails',
      'AAC',
      'Soil (Backfilling)',
      'Crane, Bucket, And Ropeway',
      'Curing compound',
      'Scaffolding',
      'Welding',
      'Protective Gloves',
      'Hearing Protection',
      'Protective Glass',
    ]
  },
  {
    id: 6, heading: 'Finishing', menulist: [
      'Gypsum',
      'Tiles',
      '2 Way Sliding glass window',
      'Single Leaf Openable Glass Window ',
      '2 Way Sliding(Above) + Fixed Glass Window',
      '1 Way Sliding + Fixed Glass Window',
    ]
  },
  {
    id: 7, heading: 'Dry Cladding', menulist: [
      'Z/L/Omega - Bracket',
      'Anchor bolts',
      'Pin',
      'Nut',
      'Flat Head bolts',
      'Plastic tube',
    ]
  },
  {
    id: 8, heading: 'Help & Settings', menulist: [
      'Your Account',
      'Customer Service',
      'Sign In',
    ]
  },
];
const LeftOpenDrawer = (props) => {
  const [expanded, setExpanded] = useState(accordionData[0].id);
  const [count, setCount] = useState('');


  const handleSeeItem = () => {
    if (count => 5) {
      setCount('open');
    }
  };
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Drawer open={props.open} onClose={props.toggleDrawer}>
      <Box component={'div'} className='drawer_menu'>
        <Typography component={"h4"}>Hi, Jenish Mangukiya</Typography>
        <Button className='handle_drawer' onClick={props.toggleDrawer}><Plus /></Button>
      </Box>


      <Box component={'div'} className='category_accordion'>
        {accordionData.map((item) => (
          <Accordion
            key={item.id}
            expanded={expanded === item.id}
            onChange={handleChange(item.id)}
          >
            <AccordionSummary
              expandIcon={expanded == item.id ? <KeyboardArrowDownIcon /> : <KeyboardArrowDownIcon />}
              aria-controls={`panel${item.id}-content`}
              id={`panel${item.id}-header`}
            >
              <Typography>{item.heading}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box component={'div'} className={`category_list ${count}`}>
                {item.menulist.map((menuItem, i) => (
                  <NavLink key={i} component={'a'} to={'/'}>{menuItem}</NavLink>
                ))}
                <Button className='see_all' onClick={handleSeeItem}>See All <KeyboardArrowDownIcon /></Button>
              </Box>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Drawer>
  );
};

export default LeftOpenDrawer;
