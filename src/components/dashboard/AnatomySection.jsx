import React from 'react'
import dashboard_image from "../../assets/dashboard_image.png"
import "../../styles/AnatomySection.css"

export default function AnatomySection() {

  return (
   <div className='imageContainer'>
      <div className='healthyHeart alignHeart' >
        <span><img className="iconStyle" src="heart.png" alt="" /></span>
        <span>Healthly Heart</span>
        </div>
        <div className='healthyHeart alignLeg '>
        <span><img className="iconStyle" src="leg.png" alt="" /></span>
        <span>Healthly Leg</span>
        </div>
     <img className="anatomyImage" src={dashboard_image}/>

   </div>
  
  )
}
