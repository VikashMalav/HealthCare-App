import React from 'react'
import "../../styles/UpcomingSchedule.css"
import upcomingSchedule from '../../data/UpcomingSchedule.'
export default function UpcomingSchedule() {
  return (
    <div className='upcomingScheduleContainer'>
      <div className='scheduleSubContainer'>
        <h2 className='boxTitle'>The Upcoming Schedule</h2>
      </div>

      {upcomingSchedule.map((item,i) =>
        <div key={i} className="eventBox">
          <p className='eventDay'>On {item.day}</p>
          <div className="containerOppointment">

          {item.events.map((event_details,i) =>
            <div key={i} className="oppointmentBox">
              <div className="eventTitle">
                <p>{event_details.title}</p>
                <img src={event_details.icon} alt="" />
               
              </div>
              <p className='eventTime'>{event_details.time}</p>
            </div>
          )}
          </div>
        </div>
      )}



    </div>
  )
}
