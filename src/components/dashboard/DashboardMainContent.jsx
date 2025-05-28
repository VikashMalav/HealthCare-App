import React from 'react'
import DashboardOverview from './DashboardOverview'
import CalendarView from './CalendarView'
import UpcomingSchedule from './UpcomingSchedule'
import ActivityFeed from './ActivityFeed'
import "../../styles/DashboardMainContent.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default function DashboardMainContent() {
  return (
    <>
      <div className='DashboardMainContent'>
        <div className='dashboard_title_container'>
         <div className='titleSubContainer'>
           <p className='dashboard_title'>Dashboard</p>
          <p >This Week <span><FontAwesomeIcon icon={faChevronDown}/></span></p>
         </div>
         
           <DashboardOverview />
         
        </div>
        <CalendarView />
        <ActivityFeed />
        <UpcomingSchedule />
      </div>
    </>
  )
}
