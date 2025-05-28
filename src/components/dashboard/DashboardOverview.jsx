import React from 'react'
import AnatomySection from './AnatomySection'
import HealthStatusCards from './HealthStatusCards'
import healthStatus from '../../data/healthStatus'
import '../../styles/DashboardOverview.css'
export default function DashboardOverview() {
  return (
    <div className='anotomyContainer'>
      <AnatomySection />
      <div className='healthCardList'>
        {healthStatus.map((item,index) =>
          <HealthStatusCards key={index} icon={item.icon} title={item.title} progressBarColor={item.color} date={item.date} />
        )}
      </div>
    </div>
  )
}
