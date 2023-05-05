import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import 'mapbox-gl/dist/mapbox-gl.css';

import Map from './map/map.jsx';
import Welcome from './welcome/welcome';
import Ticker from './ticker/ticker.jsx';
import './ticker//Ticker.css';
// import StatsCard from './statsoncard.jsx';
import Generateroutes from './generateroutes.jsx'
import Directions from './directions/directions.jsx'
import Viewer from './viewer.jsx'

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
  },
  {
    path: "/directions",
    element: < Directions/>,
  },
  {
    path: "/viewer",
    element: <Viewer/>,
  }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)