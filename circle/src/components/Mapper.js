import React, {useCallback, useState} from 'react';
import {APIProvider, Map} from '@vis.gl/react-google-maps';
function Mapper(locations){
  const API_KEY = "AIzaSyAsIhO6IUL0y6fYsrtCAfhunqfngR83UbI"

const [map, setMap] = useState([]); 
 return (

    <APIProvider apiKey={API_KEY}>
    <Map
      zoom={3}
      center={{lat: 22.54992, lng: 0}}
    />
  </APIProvider>

  ) 
}
export default Mapper;