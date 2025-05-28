import React from 'react'
import "../../styles/ActivityFeed.css"
import activityData from '../../data/activityData'
export default function ActivityFeed() {
  return (
    <div className='mainActivityContainer'>
      <div className='activityTitle'>
        <h3>Activity</h3>
        <span>3 appointment on this week</span>
      </div>
      <div className=' activityBars'>
        <div className="days">
          {
            activityData.map((item,index) =>
              <div key={item.day} className="activityDay">
               <div className='barOnlyContainer'>
                {
                  item.bars.map((bar,index)=>
                    {(index+1)%2!==0 ?<div key={bar.color} className={`bar ${bar.color}`} style={{height:`${bar.height}%`}}></div>
                    :<>{console.log(index)}
                    <div key={bar.color} className={`bar ${bar.color}`} style={{height:`${bar.height}%`}}></div>
                    <div key={bar.color} className={`bar ${bar.color}`} style={{height:`${bar.height}%`}}></div>
                    </>
                    }
                  )
                }
               </div>
                <span>{item.day}</span>
              </div>
            )
          }
         

        </div>
      </div>

    </div>
  )
}
