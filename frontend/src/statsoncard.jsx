import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stats from './stats';

const card = (
  <React.Fragment>
    <CardContent>
      <Typography variant="body2">
        <Stats />
      </Typography>
    </CardContent>
  </React.Fragment>
);

export default function StatsCard() {
  return (
    <Box sx={{ 
        bgcolor: 'background.paper',
        boxShadow: 1,
        borderRadius: 2,
        p: 2,
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
    }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}