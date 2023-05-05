import { useRef, useEffect, useState } from "react";
import "./map/map.css";
import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

function Map1() {
  mapboxgl.accessToken =
    "pk.eyJ1IjoibHVrZTY2NnoiLCJhIjoiY2xnZmppd2s2MDJlNTNsbW85eHppc3F0eiJ9.HQqrdoz9EbIevdT2-KdY5g";

  const map = useRef(null);
  const [lng, setLng] = useState(-114.0719);
  const [lat, setLat] = useState(51.0447);
  const [zoom, setZoom] = useState(11.5);
  console.log("map", map);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/ollysamm/clgmqv6wz001f01pl6kx5gu1y",
      center: [lng, lat],
      zoom: zoom,
    });
    return () => {
      map.remove;
    };
  }, []);

  return (
    <div>
      <div id="map" />
    </div>
  );
}

export default Map1;
