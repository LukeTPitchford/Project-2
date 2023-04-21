import React, { useRef, useEffect, useState } from "react";
import "./App.css";
import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import { AddressAutofill } from "@mapbox/search-js-react";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import Geolocation from "@mapbox/mapbox-gl-geocoder/lib/geolocation";
import { bikeParkingLocations } from "./data.js";
mapboxgl.accessToken = 'pk.eyJ1IjoibHVrZTY2NnoiLCJhIjoiY2xnZmppd2s2MDJlNTNsbW85eHppc3F0eiJ9.HQqrdoz9EbIevdT2-KdY5g';

const Map = () => {

    const mapContainer = useRef(null);
    const [lng, setLng] = useState(-114.0719);
    const [lat, setLat] = useState(51.0447);
    const [zoom, setZoom] = useState(11.5);
    const [title, setTitle] = useState("Park n' Bike");
    const geoCoder = new MapboxGeocoder({
        accessToken: 'pk.eyJ1IjoibHVrZTY2NnoiLCJhIjoiY2xnZmppd2s2MDJlNTNsbW85eHppc3F0eiJ9.HQqrdoz9EbIevdT2-KdY5g',
        placeholder: 'Home',
        mapboxgl: mapboxgl,
        marker: {
            color: "orange",
        }
    });

    const geoCoderTwo = new MapboxGeocoder({
        accessToken: 'pk.eyJ1IjoibHVrZTY2NnoiLCJhIjoiY2xnZmppd2s2MDJlNTNsbW85eHppc3F0eiJ9.HQqrdoz9EbIevdT2-KdY5g',
        placeholder: 'Work',
        mapboxgl: mapboxgl,
        marker: {
            color: "orange",
        }
    });

    useEffect(() => {
        geoCoder.on("result", function (results) {
            console.log(results.result.place_name);
        });

    const search = new MapboxSearchBox();
        search.accessToken = 'pk.eyJ1IjoibHVrZTY2NnoiLCJhIjoiY2xnZmppd2s2MDJlNTNsbW85eHppc3F0eiJ9.HQqrdoz9EbIevdT2-KdY5g';

    const searchTwo = new MapboxSearchBox();
        searchTwo.accessToken = 'pk.eyJ1IjoibHVrZTY2NnoiLCJhIjoiY2xnZmppd2s2MDJlNTNsbW85eHppc3F0eiJ9.HQqrdoz9EbIevdT2-KdY5g';

    const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/ollysamm/clgmqv6wz001f01pl6kx5gu1y",
        center: [lng, lat],
        zoom: zoom,
    })
    .addControl(geoCoder)
    .addControl(geoCoderTwo)
    
        // .addControl(
        //     new mapboxgl.GeolocateControl({
        //         positionOptions: {
        //             enableHighAccuracy: true,
        //         },
        //         // When active the map will receive updates to the device's location as it changes.
        //         trackUserLocation: true,
        //         // Draw an arrow next to the location dot to indicate which direction the device is heading.
        //         showUserHeading: true,
        //         showUserLocation: true,
        //     })
        // );
    for (let i = 0; i < bikeParkingLocations.features.length; i++) {
        new mapboxgl.Marker({
            color: "#FFFFFF"
        }).setLngLat([bikeParkingLocations.features[i].geometry.coordinates[0], bikeParkingLocations.features[i].geometry.coordinates[1]]).addTo(map);
        console.log(bikeParkingLocations.features[i].geometry.coordinates);
    }

    }, []);

    return (
        <div className="data">
            {" "}
            {/* <h1>{title}</h1> */}
            <div ref={mapContainer} className="map-container" />
            <div>
                <form>
                    
                </form>
            </div>
        </div>
    );
};

// function select() {
//     console.log("first");
// }


export default Map;
