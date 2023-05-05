import * as turf from '@turf/turf';

export default function FindClosest (coordinates) {

  const bikeStalls = { "type": "FeatureCollection", "features": [{"type":"Feature","geometry":{"type":"Point","coordinates":[-114.063806915748,51.048597749212]},"properties":{"location_state":null,"location_zip":null,"name":"James Short Parkade","latitude":"51.0485977492119","outdoor_stalls":"0","location_address":null,"location_city":null,"longitude":"-114.063806915748","web":"https://www.calgaryparking.com/findparking/bicycle","address":"112 5 Ave SW","indoor_stalls":"44"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-114.068188205223,51.04449658162]},"properties":{"location_state":null,"location_zip":null,"name":"City Centre Parkade","latitude":"51.0444965816196","outdoor_stalls":"0","location_address":null,"location_city":null,"longitude":"-114.068188205223","web":"https://www.calgaryparking.com/findparking/bicycle","address":"221 9 Ave SW","indoor_stalls":"104"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-114.076856205783,51.049066981974]},"properties":{"location_state":null,"location_zip":null,"name":"McDougall Parkade","latitude":"51.0490669819744","outdoor_stalls":"0","location_address":null,"location_city":null,"longitude":"-114.076856205783","web":"https://www.calgaryparking.com/findparking/bicycle","address":"720 5 Ave SW","indoor_stalls":"16"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-114.074468229421,51.050420156598]},"properties":{"location_state":null,"location_zip":null,"name":"Lot 72","latitude":"51.0504201565981","outdoor_stalls":"0","location_address":null,"location_city":null,"longitude":"-114.074468229421","web":"https://www.calgaryparking.com/findparking/bicycle","address":"615 3 Ave SW","indoor_stalls":"12"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-114.074951853261,51.045169955783]},"properties":{"location_state":null,"location_zip":null,"name":"Centennial Parkade","latitude":"51.0451699557825","outdoor_stalls":"22","location_address":null,"location_city":null,"longitude":"-114.074951853261","web":"https://www.calgaryparking.com/findparking/bicycle","address":"608 9 Ave SW","indoor_stalls":"27"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-114.061333138545,51.04596591753]},"properties":{"location_state":null,"location_zip":null,"name":"Convention Centre Parkade","latitude":"51.04596591752975","outdoor_stalls":"0","location_address":null,"location_city":null,"longitude":"-114.06133313854542","web":"https://www.calgaryparking.com/findparking/bicycle","address":"727 1 St SE","indoor_stalls":"8"}}], "crs" : { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } } };

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
  
    // const closestName = bikeStalls.features[0].properties.name;

    const closestCoordinates = [bikeStalls.features[0].geometry.coordinates[0],bikeStalls.features[0].geometry.coordinates[1]];

    // window.localStorage.setItem("bikelockerlng", (closest[0]));
    // window.localStorage.setItem("bikelockerlat", (closest[1][1]));


  
    return(
      closestCoordinates
    )
  }