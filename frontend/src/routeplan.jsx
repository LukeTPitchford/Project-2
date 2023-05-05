import * as React from "react";
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ViewDrive from './drive/viewdrive.jsx'
import ViewBike from './bike/viewbike.jsx'
import ViewWalk from './walk/viewwalk.jsx'

export default function RoutePlan() {

  return (
    
    <Box sx={{ 
      bgcolor: 'background.paper',
      boxShadow: 1,
      borderRadius: 2,
      p: 2,
      maxHeight: '100%',
      maxWidth: '100%',
  }}>
      <Accordion TransitionProps={{ unmountOnExit: true }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h3>Drive to Park N Bike</h3>
        </AccordionSummary>
        <AccordionDetails>
          <ViewDrive />
        </AccordionDetails>
      </Accordion>
   
      <Accordion TransitionProps={{ unmountOnExit: true }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h3>Bike along the River Bikeways to Secure Storage</h3>
        </AccordionSummary>
        <AccordionDetails>
          <ViewBike />
        </AccordionDetails>
      </Accordion>
      <Accordion TransitionProps={{ unmountOnExit: true }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <h3>Walk to work</h3>
        </AccordionSummary>
        <AccordionDetails>
          <ViewWalk />
        </AccordionDetails>
      </Accordion> 
    </Box>
  );
}
