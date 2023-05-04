import * as React from 'react';
import Box from '@mui/material/Box';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import Button from '@mui/material/Button';
import DirectionsIcon from '@mui/icons-material/Directions';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import InputHome from './inputhome/inputhome.jsx';
import InputWork from './inputwork/inputwork.jsx';

function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        {new Date().getFullYear()}{' '}
        teenageMutantNinjaCamelCase
      </Typography>
    );
  }

export default function Welcome() {
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
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', padding: 1 }}>
              <HomeIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <InputHome />
            </ Box>
            <Box sx={{ display: 'flex', alignItems: 'center', padding: 1 }}>
              <WorkIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <InputWork />
            </Box>
              <Button
              href="/directions"
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