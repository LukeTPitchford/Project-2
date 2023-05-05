import { Grid } from "@mui/material";
import Box from '@mui/material/Box';
import React, { useEffect, useState } from "react"
import Directions from './directions/directions.jsx'
import Map from './map/map.jsx'
import Ticker from './ticker/ticker.jsx'
import Stack from '@mui/material/Stack';

export default function Viewer(){
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => (document.body.style.overflow = "scroll");
    });
    return(
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={0}>
                <Grid xs={4}>
                    <Directions />
                </Grid>
                <Grid xs={8}>
                    <Map />
                </Grid>
            </Grid>
        </Box>
    )
}