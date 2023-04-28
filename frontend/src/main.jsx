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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "map",
    element: <Map />,
  },
]);
import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import 'mapbox-gl/dist/mapbox-gl.css';

import Map from './map';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Map />
  </React.StrictMode>,
)