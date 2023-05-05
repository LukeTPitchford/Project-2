import { SearchBox } from '@mapbox/search-js-react';
import {useState} from 'react';
import FindClosest from './findclosest.jsx'
// import Directions from './directions.jsx'

export default function InputHome() {
  
    const [search, setSearch] = useState([]);
    const [coordinates, setCoordinates] = useState([]);
    const [closest, setClosest] = useState([]);

  
    const handleRetrieve = (res) => {
      const fullAddress = res.features[0].properties.full_address;
      setSearch(fullAddress || '');
      const home = res.features[0].geometry.coordinates;
      setCoordinates(home);
      console.log(`My house coordinates:${JSON.stringify(home)}`)
      window.localStorage.setItem("home", (home));
      const closest = FindClosest(home);
      setClosest(closest);
      console.log(`My closest Park N Bike:${JSON.stringify(closest)}`)
    }
    return (
      <div>
            <SearchBox
            accessToken="pk.eyJ1Ijoib2xseXNhbW0iLCJhIjoiY2xnNDhkNnBuMDNzMjNtcDdhdzFqcG9hNiJ9.06D2Ws_Figfp6Fg4neZSHA"
            options={{
              language: 'en',
              country: 'CA',
              proximity: '-114.0719,51.0447',
              }}
            value={search}
            onRetrieve={
              handleRetrieve
            }
          >
  
          </SearchBox>
          </div>
    );
  }

  