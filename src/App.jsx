import React from 'react'
import "./App.css"
import Header from './components/header'
import Sidebar from './components/sidebar'
import DashboardMainContent from './components/dashboard/DashboardMainContent'
import SimpleAppointmentCard from './components/SimpleAppointmentCard'

export default function App() {
  return (
   <>
   <Header/>
   <div className='dashboard'>
    <Sidebar />
   <DashboardMainContent/>
   </div>
   <SimpleAppointmentCard/>
   </>
  )
}
