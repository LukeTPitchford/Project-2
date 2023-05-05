import * as React from "react";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { useRef, useEffect, useState } from "react";
import "./map/map.css";
import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import Map1 from "./map1";

import { parkNBikeLocations } from "./data.js";
// import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
mapboxgl.accessToken =
  "pk.eyJ1IjoibHVrZTY2NnoiLCJhIjoiY2xnZmppd2s2MDJlNTNsbW85eHppc3F0eiJ9.HQqrdoz9EbIevdT2-KdY5g";

function generateroutes() {

 

  
  
  return (
    
    
      <div>
      <Accordion TransitionProps={{ unmountOnExit: true }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Your full Trip </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Map1 />
        </AccordionDetails>
      </Accordion>
   
      <Accordion TransitionProps={{ unmountOnExit: true }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Drive to nearest Park & Ride </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Map1 />
        </AccordionDetails>
      </Accordion>
      <Accordion TransitionProps={{ unmountOnExit: true }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Ride down the river to safe parking</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Map1 />
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}
export default generateroutes;
