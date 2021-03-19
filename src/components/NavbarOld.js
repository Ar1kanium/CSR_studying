import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as AiIcons from 'react-icons/ai'
import { BarData } from './Bardata'
import './Navbar.css'
import { IconContext } from 'react-icons/lib'

function Navbar() {
    const [bar, setBar] = useState(false)

    const showBar = () => setBar(!bar)

    return (
        <>
            <IconContext.Provider value={{color:'#ff8b00'}}>
            <div className='navbar'>
                <Link to='#' className='menu-bars'>
                    <AiIcons.AiOutlineBars onClick={showBar}/>
                </Link>
            </div>
            </IconContext.Provider>
            <nav className={bar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showBar}>
                    <li className='navbar-toogle'>
                        <Link to='#' className='menu-bars'>
                        <IconContext.Provider value={{color:'#ff8b00'}}>
                            <AiIcons.AiOutlineClose/>
                        </IconContext.Provider>
                        </Link>
                    </li>
                    {BarData.map((item, index) => {
                        return (
                            <li key={index} className={item.clName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    )
}

export default Navbar
