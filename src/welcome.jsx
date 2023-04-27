import * as React from 'react';
import './App.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import Button from '@mui/material/Button';
import DirectionsIcon from '@mui/icons-material/Directions';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import InputAdornment from '@mui/material/InputAdornment';



function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        {new Date().getFullYear()}{' '}
        teenageMutantNinjaCamelCase
      </Typography>
    );
  }

export default function SignIn() {
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
            margin: 6,
          }}
        >
          <Typography component="h1" variant="h5">
            Ready to Ride?
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <HomeIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField
              margin="normal"
              required
              fullWidth
              id="home-address" 
              label="Home Address"
              name="Home Address"
              autoComplete="street-address"
              autoFocus
              variant="filled"
            />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <WorkIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="street-address"
              variant="filled"
            />
          </Box>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              href={`/map`}
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