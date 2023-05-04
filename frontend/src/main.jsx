import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import 'mapbox-gl/dist/mapbox-gl.css';

import Map from './map.jsx';
import Welcome from './welcome';
import Ticker from './ticker.jsx';
import './Ticker.css';
// import StatsCard from './statsoncard.jsx';
import Generateroutes from './generateroutes.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "map",
    element: <Map />,
  },
  {
    path: "ticker",
    element: <Ticker />,
  },
  // {
  //   path:"stats",
  //   element: <StatsCard />,
  // },
  {
    path: "/routes",
    element: < Generateroutes/>,
    
  }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)