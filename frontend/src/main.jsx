import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import './App.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import Map from './map';
import Welcome from './welcome';
import Ticker from './Ticker.jsx'
import './Ticker.css'
import Stats from './Stats';

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
  //   element: <Stats />,
  // }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
