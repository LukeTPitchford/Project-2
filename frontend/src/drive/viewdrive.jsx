import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react"
import Directions from './fetchdrive.jsx'
import DriveMap from './drivemap/map.jsx'

export default function ViewDrive(){
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => (document.body.style.overflow = "scroll");
    });
    return(

            <Grid container spacing={0}>
                <Grid item={true} xs={4}>
                    <Directions />
                </Grid>
                <Grid item={true} xs={8}>
                    <DriveMap />
                </Grid>
            </Grid>
    )
}