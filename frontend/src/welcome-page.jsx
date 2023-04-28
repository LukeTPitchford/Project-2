import * as React from 'react';
import './App.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import Button from '@mui/material/Button';
import DirectionsIcon from '@mui/icons-material/Directions';


function App() {
    return (
    <div className="App">
      <div className="card">
      <h1>Ready to ride?</h1>
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <HomeIcon sx={{ color: 'black', mr: 1, my: 0.5 }} />
          <TextField 
          fullWidth
          required
          id="home-address" 
          label="Home Address" 
          helperText="Required"
          variant="filled"
          sx={{
            input: {
               color: 'black',
               "&::placeholder": {    // <----- Add this.
                  opacity: 1,
               },
            },
            label: { color: 'black' },
          }} 
          />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <WorkIcon sx={{ color: 'black', mr: 1, my: 0.5 }} />
          <TextField 
          fullWidth
          required
          id="work-address" 
          label="Work Address" 
          helperText="Required"
          variant="filled"
          sx={{
            input: {
               color: 'black',
               "&::placeholder": {    // <----- Add this.
                  opacity: 1,
               },
            },
            label: { color: 'black' }
          }}  
          />
        </Box>
      </Box>
      <Button variant="contained" endIcon={<DirectionsIcon />}>
          Generate route
      </Button>
      <p>
        Made in Calgary by teenageMutantNinjaCamelCase
      </p>
    </div>
  </div>
  )
}

// import * as React from 'react';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';

// import Box from '@mui/material/Box';
// import HomeIcon from '@mui/icons-material/Home';
// import WorkIcon from '@mui/icons-material/Work';
// import DirectionsIcon from '@mui/icons-material/Directions';

// import { ThemeProvider, createTheme } from '@mui/material/styles';

// export default function App() {
//   const [open] = React.useState(true);

  // const darkTheme = createTheme({
  //   palette: {
  //     mode: 'dark',
  //   },
  // });

//   return (
//     // <ThemeProvider theme={darkTheme}>
//     <div>
//       <Dialog 
//       open={open}
//       >
//         <DialogTitle>Ready to Ride?</DialogTitle>
//         <DialogContent>
//           <DialogContentText>
//             Enter your home and work address below and we'll generate your route to park and bike to work. 
//           </DialogContentText>
//           <Box sx={{ '& > :not(style)': { m: 2 } }}>
//           <Box sx={{ display: 'flex', alignItems: 'center' }}>
//           <HomeIcon sx={{ mr: 1, my: 1 }} />
//           <TextField 
//           fullWidth
//           required
//           id="home-address" 
//           label="Home Address"
//           helperText="" 
//           variant="filled"
//           />
//         </Box>
//         <Box sx={{ display: 'flex', alignItems: 'center' }}>
//           <WorkIcon sx={{ mr: 1, my: 1 }} />
//           <TextField 
//           fullWidth
//           required
//           id="work-address" 
//           label="Work Address" 
//           variant="filled"
//           />
//         </Box>
//       </Box>
//         </DialogContent>
//         <DialogActions>
//         <Button variant="contained" endIcon={<DirectionsIcon />}>Generate Route</Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   // </ThemeProvider>
//   );
// }