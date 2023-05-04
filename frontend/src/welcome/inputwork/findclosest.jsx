import * as turf from '@turf/turf';
import { bikeStalls } from'./bikestalls.js'

export default function FindClosest (coordinates) {
  
  bikeStalls.features.forEach((bikeStall, i) => {
        bikeStall.properties.id = i;
    });
  
    const options = { units: 'kilometers' };
    for (const bikeStall of bikeStalls.features) {
      bikeStall.properties.distance = turf.distance(
        coordinates,
        bikeStall.geometry,
        options
      );
    }
  
    bikeStalls.features.sort((a, b) => {
      if (a.properties.distance > b.properties.distance) {
      return 1;
      }
      if (a.properties.distance < b.properties.distance) {
      return -1;
      }
      return 0; // a must be equal to b
    });
  
    const closestName = bikeStalls.features[0].properties.name;

    const closestCoordinates = [bikeStalls.features[0].geometry.coordinates[0],bikeStalls.features[0].geometry.coordinates[0]];
    window.localStorage.setItem("bikelocker", (closestCoordinates));

    const closest = [closestName, closestCoordinates];
  
    return(
        closest
    )
  }