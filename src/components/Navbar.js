import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as AiIcons from 'react-icons/ai'
import * as BsIcons from 'react-icons/bs'
import { BarData, HeaderTitle } from './Bardata'
import './Navbar.css'
import { IconContext } from 'react-icons/lib'

function Navbar() {
    const [bar, setBar] = useState(false)

    const showBar = () => setBar(!bar)


    const [headerTitle, setHeaderTitle] = useState(false)

    const changeTitle = () => setHeaderTitle(!headerTitle) 

    return (
        <>
            <div className='header'>
                <nav className={bar ? 'nav-active' : 'nav-hidden'}>  
                    <Link to='#' className='nav-menu-toggler'>
                        <IconContext.Provider value={{color:'#ff8b00'}}>
                            <AiIcons.AiOutlineClose onClick={showBar}/>
                        </IconContext.Provider>
                    </Link>
                    <ul className='nav-menu-items' onClick={showBar}>
                        {BarData.map((item, index) => {
                            return (
                                <li key={index} className={item.clName}>
                                    <Link to={item.path}>
                                        <span className='ic'>{item.icon}</span>
                                        <span className='tex'>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
                <div className='header-static'>
                    <Link to='#' className='nav-menu-toggler'>
                        <IconContext.Provider value={{color:'#ff8b00'}}>
                            <AiIcons.AiOutlineBars onClick={showBar}/>
                        </IconContext.Provider>
                    </Link>
                    <h1 className='header-text'>{HeaderTitle[+headerTitle].title}</h1>
                    <div className='logo'>
                        <BsIcons.BsFillGearFill onClick={changeTitle}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
