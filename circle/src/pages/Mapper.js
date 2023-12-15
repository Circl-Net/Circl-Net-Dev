import React, {useEffect, useState} from "react";
import MapHeader from "../components/MapHeader";
import { APIProvider, Map, Marker,useMarkerRef, InfoWindow } from "@vis.gl/react-google-maps";

import Post from "../components/Post";

 function Postpop({data}){
  const [markerRef, marker] = useMarkerRef();
  const [postPop, setPostPop] = useState(false);
  if (data.posts){

    const popPost =() =>setPostPop(state => !state);
   const content = "<div> name</div>"
    console.log(data.posts[0])

    return (
      <>
     <Marker onClick={popPost} ref={markerRef} position={{lat: data.coordinate[0], lng: data.coordinate[1]}} />
     {postPop && (
      <InfoWindow anchor={marker} content={content}>
        <Post {...data.posts[0]}/>
      </InfoWindow>
      
    )}
    </>
    )
     
  }
 
  
}
 function Mapper() {

const [locations, setLocations] = useState([])

  useEffect(() => {
    fetch(`/sandiego`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
       // console.log(data);
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
        
        {locations.map(data=> <Postpop data={data}/>)}


      </Map>
    </APIProvider>
    </div>
  
      </>)};

export default Mapper;