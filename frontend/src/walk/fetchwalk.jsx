
import React, { useEffect, useState } from "react";
import 'mapbox-gl/dist/mapbox-gl.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

const start = [window.localStorage.getItem("stalllng"),window.localStorage.getItem("stalllat")];
const end = [window.localStorage.getItem("worklng"),window.localStorage.getItem("worklat")];

export default function Directions () {

  const [directions, setDirections] = useState([])
     
  const fetchDirections = () => {
    const accessToken = 'pk.eyJ1Ijoib2xseXNhbW0iLCJhIjoiY2xnNDhkNnBuMDNzMjNtcDdhdzFqcG9hNiJ9.06D2Ws_Figfp6Fg4neZSHA';
    fetch(`https://api.mapbox.com/directions/v5/mapbox/walking/${start[0]},${start[1]};${end[0]},${end[1]}?steps=true&geometries=geojson&access_token=${accessToken}`)
    .then(response => {
      return response.json()
    })
    .then(data => {
      setDirections(data.routes[0].legs[0].steps)
       
    })
}

useEffect(() => {
  fetchDirections()
}, [])
return (

  <Card
  sx={{
    width: '100%',
    maxHeight: '100%',
    bgcolor: 'background.paper',
    overflow: 'auto',
}}>
  <CardContent>
  <h3>WALKING DIRECTIONS TO WORK</h3>
    {directions.length > 0 && (
      <List
        sx={{
          width: '100%',
          maxHeight: '100%',
          bgcolor: 'background.paper',
          overflow: 'auto',
      }}>
        {directions.map(({maneuver}) => (
      <ListItem key = { maneuver.location} >
                  { maneuver.instruction } 
              </ListItem>
        ))}
      </List>
    )}
  </CardContent>
</Card>
  );
}