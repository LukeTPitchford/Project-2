import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import './map.css' // eslint-disable-line import/no-webpack-loader-syntax
mapboxgl.accessToken =
  "pk.eyJ1IjoibHVrZTY2NnoiLCJhIjoiY2xnZmppd2s2MDJlNTNsbW85eHppc3F0eiJ9.HQqrdoz9EbIevdT2-KdY5g";

const Map = () => {
  const [latLang, setLatLang] = useState();
  const[parkSiteslatLang, setparkSiteslatLang] = useState();
  const map = useRef(null);
  const [lng, setLng] = useState(-114.0719);
  const [lat, setLat] = useState(51.0447);
  const [zoom, setZoom] = useState(11.5);

  mapboxgl.accessToken =
    "pk.eyJ1IjoidGlua2VybWFzdGVyIiwiYSI6ImNsZ2gyYzhsdjBoZjQzZG8yOGc1cnB3NGMifQ.6g8lRoHDzt9fe57m9w1G3w";

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: 'map',
      style: "mapbox://styles/ollysamm/clgmqv6wz001f01pl6kx5gu1y",
      center: [lng, lat],
      zoom: zoom,
    });

    // const parknBikeSites = async () => {
    //   const response = await fetch("/api/parknbikesites/all");
    //   const parksitedata = await response.json();
    //   // console.log(parksitedata);
    //   const parkSiteslatLang = parksitedata.map((parksitedata) => {
    //     return parksitedata.geometry.coordinates;
    //   });
    //   // console.log(parkSiteslatLang);
    //   setparkSiteslatLang(parkSiteslatLang);
    // };

    // parknBikeSites();
    

    // const bikeParkingLocations = async () => {
    //   const response = await fetch("/api/parkinglocations/all");
    //   const data = await response.json();
    //   const latLang = data.map((data) => {
    //     return data.geometry.coordinates;
    //   });
    //   setLatLang(latLang);
    // };
    
    // bikeParkingLocations();
  }, []);

  useEffect(() => {
    for(let i = 0; i < parkSiteslatLang?.length; i++) {
      new mapboxgl.Marker().setLngLat(parkSiteslatLang[i]).addTo(map.current);
    }
  }, [parkSiteslatLang]);

  useEffect(() => {
    for (let i = 0; i < latLang?.length; i++) {
      new mapboxgl.Marker().setLngLat(latLang[i]).addTo(map.current);
    }
  }, [latLang]);



  return (
<div>   
  <div>
    <div id="map"/>
  </div>
</div>
);
};

export default Map;
