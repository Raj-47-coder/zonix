import React, { useState } from "react";
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import { Minus, Plus, ArrowRight } from '../../Zonixzsvgs/Zonixzsvgs';
import { Box, TextField, Typography, Accordion, AccordionDetails, AccordionSummary, MenuItem, FormControl, Select, Button, List, ListItem } from "@mui/material";

const accordionData = [
  { id: 1, heading: 'Can I reactivate my inactive Flipkart account?', content: 'Content for Panel 1' },
  { id: 2, heading: 'Can I reactivate my inactive Flipkart account?', content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.' },
  { id: 3, heading: 'Accordion Panel 3', content: 'Content for Panel 3' },
  { id: 4, heading: 'Accordion Panel 4', content: 'Lorem Ipsum is simply dummy text of the printing and typesetting' },
];
function Faq() {
  const [expanded, setExpanded] = useState(accordionData[0].id);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };


  return (
    <>
      <Breadcrumb />

      <Box component={'div'} className='faq_container'>
        <Box component={'div'} className='faq_row'>
          <Box component={'div'} className='faq_left'>
            <Box component={'div'} className='section_title noSpace'>
              <Typography component={'h2'}>Frequently Asked Questions </Typography>
            </Box>


            <Box component={'div'} className='faq_accordion'>
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

                    <List>
                      <ListItem>Lorem Ipsum is simply dummy text of the printing and typesetting</ListItem>
                      <ListItem>Lorem Ipsum is simply dummy text of the printing and typesetting</ListItem>
                    </List>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>
          </Box>
          <Box component={'div'} className='faq_right'>
            <Box component={'div'} className='ask_more_question'>
              <Typography component={'h3'}>Don’t find your answer, Ask for support.</Typography>
              <Typography component={'p'}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</Typography>


              <Box component={'div'} className='ask_questionInput'>
                <TextField type='text' fullWidth placeholder='Email adress' />
              </Box>
              <Box component={'div'} className='ask_questionInput'>
                <TextField type='text' fullWidth placeholder='Subject' />
              </Box>
              <Box component={'div'} className='ask_questionInput'>
                <TextField multiline rows='4' type='text' fullWidth placeholder='Message (Optional)' />
              </Box>
              <Box component={'div'} className='ask_questionInput'>
                <Button className='sign_form_button' fullWidth>Send Message <ArrowRight /> </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box >
    </>
  );
}

export default Faq;
