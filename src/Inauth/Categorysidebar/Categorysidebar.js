import React, { useState } from 'react';
import { Box, Button, Typography, Drawer, Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { Plus, Minus, CartIcon } from '../../Zonixzsvgs/Zonixzsvgs'
import './Categorysidebar.scss';


const accordionData = [
  { id: 1, heading: 'Foundation', content: 'Content for Panel 1' },
  { id: 2, heading: 'Conventional Shuttering', content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.' },
  { id: 3, heading: 'AAC', content: 'Content for Panel 3' },
  { id: 4, heading: 'Brick', content: 'Lorem Ipsum is simply dummy text of the printing and typesetting' },
  { id: 4, heading: 'Civil Sub/Super-Structure', content: 'Lorem Ipsum is simply dummy text of the printing and typesetting' },
  { id: 4, heading: 'Finishing', content: 'Lorem Ipsum is simply dummy text of the printing and typesetting' },
  { id: 4, heading: 'Dry Cladding', content: 'Lorem Ipsum is simply dummy text of the printing and typesetting' },
  { id: 4, heading: 'Help & Settings', content: 'Lorem Ipsum is simply dummy text of the printing and typesetting' },
];
const LeftOpenDrawer = (props) => {
  const [expanded, setExpanded] = useState(accordionData[0].id);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Drawer open={props.open} onClose={props.toggleDrawer}>
      <Box component={'div'} className='drawer_menu'>
        <Typography component={"h4"}>Hi, Jenish Mangukiya</Typography>
        <Button className='handle_drawer'><Plus /></Button>
      </Box>


      <Box component={'div'} className='category_accordion'>
        {accordionData.map((item) => (
          <Accordion
            key={item.id}
            expanded={expanded === item.id}
            onChange={handleChange(item.id)}
          >
            <AccordionSummary
              expandIcon={expanded == item.id ? <Minus /> : <Plus />}
              aria-controls={`panel${item.id}-content`}
              id={`panel${item.id}-header`}
            >
              <Typography>{item.heading}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography component={'p'}>{item.content}</Typography>

            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Drawer>
  );
};

export default LeftOpenDrawer;
