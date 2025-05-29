import React from 'react'
import "../styles/Header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faPlus, faBell, faCircleUser, faSquarePlus } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
    return (
        <>
            <div className='header_main'>

                <h2><span className='logo'>Health</span><span className='logo_last'>care.</span></h2>

                <div className='main_search_container'>
                    <div className='search_container'>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className='search_icon' />
                        <input className='search_input' type="text" placeholder='Search' />
                    </div>
                    <div className='bell_container'>
                        <FontAwesomeIcon icon={faBell} size="xl" className='bell_icon' style={{ color: '#00109d' }} />
                    </div>
                </div>
                <div className='profile_search'>

                    <div className='profile'>
                       
                        {/* <FontAwesomeIcon icon={faCircleUser} size="2xl" style={{ color: "#06EDED" }} /> */}
                       <img src="user.png" style={{width:30,height:30,backgroundColor:"#00ffff"}} alt="User Profile" className="profile_image" />
                        <FontAwesomeIcon icon={faSquarePlus} size="2xl" style={{ color: "#00109d" }} />
                    </div>
                </div>




            </div>

        </>
    )
}
