import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import 'mapbox-gl/dist/mapbox-gl.css';

import Map from './map';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Map />
  </React.StrictMode>,
)