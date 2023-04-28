import React, { useRef, useEffect, useState } from "react";
import "./App.css";
import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import { AddressAutofill } from "@mapbox/search-js-react";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import Geolocation from "@mapbox/mapbox-gl-geocoder/lib/geolocation";
import { bikeParkingLocations } from "./data.js";
import { parkNBikeLocations } from "./data.js";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
mapboxgl.accessToken =
  "pk.eyJ1IjoibHVrZTY2NnoiLCJhIjoiY2xnZmppd2s2MDJlNTNsbW85eHppc3F0eiJ9.HQqrdoz9EbIevdT2-KdY5g";

const Map = () => {
  const [latLang, setLatLang] = useState();
  const mapContainer = useRef(null);
  const [lng, setLng] = useState(-114.0719);
  const [lat, setLat] = useState(51.0447);
  const [zoom, setZoom] = useState(11.5);

  const geoCoder = new MapboxGeocoder({
    accessToken:
      "pk.eyJ1IjoibHVrZTY2NnoiLCJhIjoiY2xnZmppd2s2MDJlNTNsbW85eHppc3F0eiJ9.HQqrdoz9EbIevdT2-KdY5g",
    //     placeholder: 'Home',
    //     mapboxgl: mapboxgl,
    //     marker: {
    //         color: "orange",
    // }
  });

  // const geoCoderTwo = new MapboxGeocoder({
  //     accessToken: 'pk.eyJ1IjoibHVrZTY2NnoiLCJhIjoiY2xnZmppd2s2MDJlNTNsbW85eHppc3F0eiJ9.HQqrdoz9EbIevdT2-KdY5g',
  //     placeholder: 'Work',
  //     mapboxgl: mapboxgl,
  //     marker: {
  //         color: "orange",
  //     }
  // });

  useEffect(() => {
    // geoCoder.on("result", function (results) {
    //     console.log(results.result.place_name);
    // });

    // const search = new MapboxSearchBox();
    //     search.accessToken = 'pk.eyJ1IjoibHVrZTY2NnoiLCJhIjoiY2xnZmppd2s2MDJlNTNsbW85eHppc3F0eiJ9.HQqrdoz9EbIevdT2-KdY5g';

    // const searchTwo = new MapboxSearchBox();
    //     searchTwo.accessToken = 'pk.eyJ1IjoibHVrZTY2NnoiLCJhIjoiY2xnZmppd2s2MDJlNTNsbW85eHppc3F0eiJ9.HQqrdoz9EbIevdT2-KdY5g';

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/ollysamm/clgmqv6wz001f01pl6kx5gu1y",
      center: [lng, lat],
      zoom: zoom,
    });
    // .addControl(geoCoder)
    // .addControl(geoCoderTwo)

    // .addControl("top-left")

    map.addControl(
      new MapboxDirections({
        accessToken:
          "pk.eyJ1IjoibHVrZTY2NnoiLCJhIjoiY2xnZmppd2s2MDJlNTNsbW85eHppc3F0eiJ9.HQqrdoz9EbIevdT2-KdY5g",
        unit: "metric",
        profile: "mapbox/driving",
      }),
      "top-left"
    );

    // .addControl(
    //     new mapboxgl.GeolocateControl({
    //         positionOptions: {
    //             enableHighAccuracy: true,
    //         },
    // trackUserLocation: true,
    // showUserHeading: true,
    // showUserLocation: true,
    //     })
    // );

    const bikeParkingLocations = async () => {
      let parkingLocations = [];
      const response = await fetch("/api/parkinglocations/all");
      const data = await response.json();
      console.log(data);

      const latLang = data.map((data) => {
        return data.geometry.coordinates;
      });
      console.log(latLang);
      //   for (const parkingLocation of data.geometry.coordinates) {
      //     parkingLocation.latLong = await getLatLong(
      //       parkingLocation.geometry.coordinates[0]
      //     );
      //     parkingLocations.push(parkingLocation);
      //   }
      // latLang.push(parkingLocations)
      // set (parkingLocations);
      //   set(latLang);
      //   setLoading(false);
      //return{latLang}
      setLatLang(latLang);
      console.log("latLang", latLang);
    };

    bikeParkingLocations();
    //console.log (bikeParkingLocations);

    // for (let i = 0; i < bikeParkingLocations.features.length; i++) {
    //     new mapboxgl.Marker({
    //         color: 'green'
    // })
    //     .setLngLat([bikeParkingLocations.features[i].geometry.coordinates[0], bikeParkingLocations.features[i].geometry.coordinates[1]])
    //     .addTo(map);
    // }

    for (let i = 0; i < parkNBikeLocations.features.length; i++) {
      new mapboxgl.Marker({
        color: "black",
      })
        .setLngLat([
          parkNBikeLocations.features[i].geometry.coordinates[0],
          parkNBikeLocations.features[i].geometry.coordinates[1],
        ])
        .addTo(map);
    }
  }, []);

  return (
    <div className="data">
      <div ref={mapContainer} className="map-container" />
      <div>
        <form></form>
      </div>
    </div>
  );
};

export default Map;