import React, {useEffect, useState} from "react";
import MapHeader from "../components/MapHeader";
import { APIProvider, Map, Marker,useMarkerRef } from "@vis.gl/react-google-maps";
// function CirclerBlurbBox({ciname}){
//   const [allCirclers, setAllCirclers] = useState([]);
//   useEffect(() => {
//     fetch(`/${ciname}/allCirclers`)
//       .then((res) => {
//         return res.json();
        
//       })
//       .then((data) => {
//         console.log(data);
//         setCircler(data);
//       })
//       .catch(error=> console.error(error))
//   }, []);
//   return 
// }


// function CircleMapper({ciname}){
//   const [circle, setCircle] = useState([]);
//   useEffect(() => {
//     fetch(`/circler/${ciname}`)
//       .then((res) => {
//         return res.json();
        
//       })
//       .then((data) => {
//         console.log(data);
//         setCircler(data);
//       })
//       .catch(error=> console.error(error))
//   }, []);
//   return circler;
// }


function Mapper() {
const [markerRef, marker] = useMarkerRef();
const [locations, setLocations] = useState([])

  useEffect(() => {
    fetch(`/sandiego`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
       
        setLocations(data)
      })
      .catch(error=> console.error(error))
  }, []);
 const  head = {name: "San Diegoism", bio: "We like San Diego"}
  

    return (
      <>
      <div style={{position: 'absolute', zIndex: 1}}>
 <MapHeader  header={head}></MapHeader>
 </div>
<div style={{ height: '100vh', width: '100%', position:'absolute'}}>
 <APIProvider apiKey={'AIzaSyAsIhO6IUL0y6fYsrtCAfhunqfngR83UbI'}>
      <Map className="map" zoom={12} center={{lat:32.7341524, lng: -117.1471279}}>
     
        {locations.map(data=>
       
         <Marker ref={markerRef} position={{lat: data.coordinate[0], lng: data.coordinate[1]}} />
        )}
       

      </Map>
    </APIProvider>
    </div>
  
      </>)};

export default Mapper;