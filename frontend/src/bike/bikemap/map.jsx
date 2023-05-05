import React, { useEffect, useState } from "react"
import Map, {Source, Layer} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './map.css';

const start = [window.localStorage.getItem("parknbikelng"),window.localStorage.getItem("parknbikelat")];
const end = [window.localStorage.getItem("stalllng"),window.localStorage.getItem("stalllat")];

export default function BikeMap () {

  const [segments, setSegments] = useState([])
     
  const fetchDirections = () => {
    const accessToken = 'pk.eyJ1Ijoib2xseXNhbW0iLCJhIjoiY2xnNDhkNnBuMDNzMjNtcDdhdzFqcG9hNiJ9.06D2Ws_Figfp6Fg4neZSHA';
    fetch(`https://api.mapbox.com/directions/v5/mapbox/cycling/${start[0]},${start[1]};${end[0]},${end[1]}?steps=true&geometries=geojson&access_token=${accessToken}`)
    .then(response => {
      return response.json()
    })
    .then(data => {
      setSegments(data.routes[0].geometry.coordinates)
       
    })
}

const geojson = {
  type: 'Feature',
  properties: {},
  geometry: {
      type: 'LineString',
      coordinates: segments
  }
};

const routeLayer = {
  id: 'route',
  type: 'line',
  paint: {
      'line-color': '#9FE2BF',
      'line-width': 5,
      'line-opacity': 0.75
  }
}

const [viewState, setViewState] = React.useState({
  bounds: [[(start[0]),(start[1])],[(end[0]),(end[1])]],
  fitBoundsOptions: {
    padding: 80
  }
});

useEffect(() => {
  fetchDirections()
}, [])
return (

  <Map
    {...viewState}
    style={{width: '66vw', height: '80vh'}}
    mapStyle="mapbox://styles/ollysamm/clgmqv6wz001f01pl6kx5gu1y"
    mapboxAccessToken="pk.eyJ1IjoibHVrZTY2NnoiLCJhIjoiY2xnZmppd2s2MDJlNTNsbW85eHppc3F0eiJ9.HQqrdoz9EbIevdT2-KdY5g"
    >
        <Source id="response" type="geojson" data={geojson}>
            <Layer {...routeLayer} />
        </Source>
    </Map>

  );
}