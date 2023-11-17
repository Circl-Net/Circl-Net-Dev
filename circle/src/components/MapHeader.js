
import React from 'react';

function MapHeader({header}){
 // const [header, setHeader] = useState([]);


    return (
      <>
        <div class="circle-title">
            <div class="circle-title-1">
              <h2>{header.name}</h2>
              <p class="circl-intro">{header.bio}</p>
            </div>
            <div class="circle-title-2"><button>Follow</button></div>
          </div>
          </>
    );
}
export default MapHeader;