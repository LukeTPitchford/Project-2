import React, { useRef, useEffect, useState } from "react";
import "./App.css";
import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import { AddressAutofill } from "@mapbox/search-js-react";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import Geolocation from "@mapbox/mapbox-gl-geocoder/lib/geolocation";
import { dataGeo } from "./data.js";
mapboxgl.accessToken = 'pk.eyJ1IjoibHVrZTY2NnoiLCJhIjoiY2xnZmppd2s2MDJlNTNsbW85eHppc3F0eiJ9.HQqrdoz9EbIevdT2-KdY5g';

const Map = () => {
    const mapContainer = useRef(null);
    const [lng, setLng] = useState(-114.0571411);
    const [lat, setLat] = useState(51.0453809);
    const [zoom, setZoom] = useState(10);
    const [title, setTitle] = useState("Park n' Bike");
    const geoCoder = new MapboxGeocoder({
        accessToken: 'pk.eyJ1IjoibHVrZTY2NnoiLCJhIjoiY2xnZmppd2s2MDJlNTNsbW85eHppc3F0eiJ9.HQqrdoz9EbIevdT2-KdY5g',
        mapboxgl: mapboxgl,
        marker: {
            color: "orange",

        }
    });
    const geoCoderTwo = new MapboxGeocoder({
        accessToken: 'pk.eyJ1IjoibHVrZTY2NnoiLCJhIjoiY2xnZmppd2s2MDJlNTNsbW85eHppc3F0eiJ9.HQqrdoz9EbIevdT2-KdY5g',
        mapboxgl: mapboxgl,
        marker: {
            color: "orange",

        }
    });
    // "This puts the name, long and lat above the map"
    useEffect(() => {
        geoCoder.on("result", function (results) {
            console.log(results.result.place_name);
            // setTitle(results.result.place_name);
            // setLng(results.result.center[0]);
            // setLat(results.result.center[1]);
            //   setZoom(13);
        });

        const search = new MapboxSearchBox();
search.accessToken = 'pk.eyJ1IjoibHVrZTY2NnoiLCJhIjoiY2xnZmppd2s2MDJlNTNsbW85eHppc3F0eiJ9.HQqrdoz9EbIevdT2-KdY5g';

const searchTwo = new MapboxSearchBox();
searchTwo.accessToken = 'pk.eyJ1IjoibHVrZTY2NnoiLCJhIjoiY2xnZmppd2s2MDJlNTNsbW85eHppc3F0eiJ9.HQqrdoz9EbIevdT2-KdY5g';

        // if (map.current) return; // initialize map only once
        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: "mapbox://styles/mapbox/streets-v12",
            //style: "https://studio.mapbox.com/tilesets/prabhsagoo.clgda45tl00mo2io1woyd8q34-9m1pw",
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
        for (let i = 0; i < dataGeo.features.length; i++) {
            new mapboxgl.Marker({
                color: "#FFFFFF"
            }).setLngLat([dataGeo.features[i].geometry.coordinates[0], dataGeo.features[i].geometry.coordinates[1]]).addTo(map);
            console.log(dataGeo.features[i].geometry.coordinates);

        }

    }, []);



    return (
        <div className="data">
            {" "}
            <h1>{title}</h1>
            <div ref={mapContainer} className="map-container" />
            <div>
                <form>
                    
                </form>
            </div>
        </div>
    );
};
function select() {
    console.log("first");
}


export default Map;
