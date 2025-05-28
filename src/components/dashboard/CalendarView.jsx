import React from 'react'
import "../../styles/CalendarView.css"
import { calendarContent,Appointments } from '../../data/healthData'
export default function CalendarView() {

  return (
    <div className='calenderMainContainer'>
      <div className='calender_title'>
        <h5 style={{ color: "#00109d" }}>October 2021</h5>
        <div>
          <img className="arrow" src="arrow_left.png" alt="arrow" />
          <img className="arrow" src="arrow_right.png" alt="arrow" />
        </div>
      </div>
      <div className='calenderGridContainer'>
        {
          calendarContent.map(item =>
            <div key={item.day} className="item">
            
                <p className='day'>{item.day}</p>
                <div className="date">
                  <p>{item.date}</p>
                </div>
                <div className="time">
                {
                  item.timeSlots.map(time =>
                      <p >{time}</p>
                    )
                  }
                  </div>
             
            </div>
          )
        }
        
      </div>
      <div className="appointments">
        {Appointments.map(item=>
          <div key={item.title} className="appoint_details">
           <div className='title_icon_container'>
             <p className='doc_type'>{item.title}</p>
             <img className='icon' src={item.icon} alt="" />
           </div>
            <p>{item.start}-{item.end}</p>
            <p className="doc_name">{item.doctor}</p>
          </div>
        )
        }
      </div>
    </div>
  )
}
