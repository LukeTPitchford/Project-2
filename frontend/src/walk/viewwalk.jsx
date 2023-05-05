import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react"
import Directions from './fetchwalk.jsx'
import WalkMap from './walkmap/map.jsx'

export default function ViewWalk(){
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
                    <WalkMap />
                </Grid>
            </Grid>
    )
}