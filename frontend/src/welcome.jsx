import * as React from 'react';
import './App.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import Button from '@mui/material/Button';
import DirectionsIcon from '@mui/icons-material/Directions';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { SearchBox } from '@mapbox/search-js-react';

function handleRetrieve(feature) {
  console.log(`${JSON.stringify(feature)}`)
  }

function InputHome() {
  return (
      <SearchBox
        accessToken="pk.eyJ1Ijoib2xseXNhbW0iLCJhIjoiY2xnNDhkNnBuMDNzMjNtcDdhdzFqcG9hNiJ9.06D2Ws_Figfp6Fg4neZSHA"
        options={{
          language: 'en',
          country: 'CA',
          proximity: '-114.0719,51.0447',
          }}
        value=''
        onRetrieve={handleRetrieve}
      >
        </SearchBox>
  );
}

function InputWork() {
  return (
      <SearchBox 
        accessToken="pk.eyJ1Ijoib2xseXNhbW0iLCJhIjoiY2xnNDhkNnBuMDNzMjNtcDdhdzFqcG9hNiJ9.06D2Ws_Figfp6Fg4neZSHA"
        options={{
          language: 'en',
          country: 'CA',
          proximity: '-114.0719,51.0447',
          }}
        value=''  
      >
        </SearchBox>
  );
}

function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        {new Date().getFullYear()}{' '}
        teenageMutantNinjaCamelCase
      </Typography>
    );
  }

export default function getAddresses() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      home: data.get('home'),
      work: data.get('work'),
    });
  };

  return (
      <Container 
        component="main"
        maxWidth="xs"        
        sx={{
          bgcolor: 'background.paper',
          boxShadow: 1,
          borderRadius: 2,
          p: 2,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: 5
          }}
        >
          <Typography component="h1" variant="h5" sx={{ padding: 1 }}>
            Ready to Ride?
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', padding: 1 }}>
              <HomeIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <InputHome />
            </ Box>
            <Box sx={{ display: 'flex', alignItems: 'center', padding: 1 }}>
              <WorkIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <InputWork />
            </Box>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              endIcon={<DirectionsIcon />}
            >
              Generate route
            </Button>
          </Box>
          <Copyright />
        </Box>
      </Container>
  );
}