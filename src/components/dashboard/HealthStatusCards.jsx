import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import "../../styles/HealthStatusCards.css"

export default function HealthStatusCards({icon,title,date,progressBarColor}) {
  return (
    <div className='HealthStatusCard'>
         <div className='icon_title_Container' >
        <img className='healthCardImage' src={icon} />
          <p className='cardTitle'>{title}</p>
          </div>
          <p className='cardDate'>{date}</p>
          <div className="progress-bar-container">
        <div
          className="progress-bar-fill"
          style={{ width: `60%`, backgroundColor: progressBarColor }}
        ></div>
      </div>

    </div>
  )
}
