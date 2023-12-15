import styles from '../styles/MapHeader.module.css'
import  React from 'react';

function CircleButton({image, status}){
  return (
    <>
    <img
            class="profile-image"
            alt=" "
            src="https://zoo.sandiegozoo.org/sites/default/files/body_side_image/Plan%20Your%20Visit-Direcions%20%26%20Parking.jpg"
          />
    </>
  )
  
}
export default function MapHeader({header}){
 // const [header, setHeader] = useState([]);
    return (
      <>
      <div className={styles.container}>
      <h2>{header.name}</h2>
      {header.bio}
      <div className="circle">
        <CircleButton 
              image="https://zoo.sandiegozoo.org/sites/default/files/body_side_image/Plan%20Your%20Visit-Direcions%20%26%20Parking.jpg"

            
          />
              </div>
      
          </div>
        </>
    );
}
