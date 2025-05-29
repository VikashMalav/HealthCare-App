import React from 'react';
import '../styles/sidebar.css';
import navList from '../data/navLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCommentDots,
  faGear,
  faHistory,
  faTachometerAlt,
  faCalendarAlt,
  faCalendarCheck,
  faChartLine,
  faPhone
} from '@fortawesome/free-solid-svg-icons';

export default function Sidebar() {
  const iconMap = {
    faTachometerAlt,
    faHistory,
    faCalendarAlt,
    faCalendarCheck,
    faChartLine,
    faCommentDots,
    faPhone,
    faGear
  };

  return (
    <div className='main_sidebar_container'>
      {Object.entries(navList).map(([section, items]) => (
        <div key={section} className='sidebar_section'>
          <h6 className='section_title'>{section}</h6>
         
          <ul className='section_list'>
            {items.map(({ field, icon },index) => (
              <li key={index} className='sidebar_item'>
              
                <FontAwesomeIcon icon={iconMap[icon]} style={{color:"#9ca3af"}} className='icon' />
                <span className='label'style={{color:"#9ca3af"}}>{field}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    
    </div>
  );
}
