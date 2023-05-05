import * as React from "react";
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import ViewDrive from './drive/viewdrive.jsx'
import ViewBike from './bike/viewbike.jsx'
import ViewWalk from './walk/viewwalk.jsx'

import Ticker from './ticker/ticker.jsx'

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import Typography from "@mui/material/Typography";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import zIndex from "@mui/material/styles/zIndex.js";

export default function RoutePlan() {

  return (
    <div>
      <Stack spacing={0}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
            <Ticker />
        </AppBar>
      </Box>
      <Card >
        <CardContent>
        <Accordion TransitionProps={{ unmountOnExit: true }} anchor="top">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Drive to Park N Bike</Typography>
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
            <Typography>Bike along the River Bikeway to Secure Storage</Typography>
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
            <Typography>Walk to work</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ViewWalk />
          </AccordionDetails>
        </Accordion> 
        </CardContent>
      </Card>
      </Stack>
    </div>
  )
}
