import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function Directions () {
  const start = window.localStorage.getItem("start").split(",");
  const end = window.localStorage.getItem("drive").split(",");
  const [directions, setDirections] = useState([])
     
  const fetchDirections = () => {
    const accessToken = 'pk.eyJ1Ijoib2xseXNhbW0iLCJhIjoiY2xnNDhkNnBuMDNzMjNtcDdhdzFqcG9hNiJ9.06D2Ws_Figfp6Fg4neZSHA';
    fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${start[0].slice(1)},${start[1].slice(0, -1)};${end[0].slice(1)},${end[1].slice(0, -1)}?steps=true&geometries=geojson&access_token=${accessToken}`)
    .then(response => {
      return response.json()
    })
    .then(data => {
      setDirections(data.routes[0].legs[0].steps)
    })
}

useEffect(() => {
  fetchDirections()
  console.log(directions)
}, [])
return (
<Card sx={{ minWidth: 275 }}>
  <CardContent>
    <Typography>
      DRIVING DIRECTIONS TO PARK N BIKE
    {directions.length > 0 && (
      <ul>
        {directions.map(({maneuver}) => (
      <li key = { maneuver.location} >
                  { maneuver.instruction } 
              </li>
        ))}
      </ul>
    )}
    </Typography>
  </CardContent>
</Card>
  );
}