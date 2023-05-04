import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import Map from './map/map';
import Welcome from './welcome/welcome.jsx';
import Ticker from './ticker/ticker.jsx';
import StatsCard from './statsoncard.jsx';
import Directions from './directions/directions.jsx';

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
  {
    path:"stats",
    element: <StatsCard />,
  },
  {
    path:"directions",
    element: <Directions />,
  }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)