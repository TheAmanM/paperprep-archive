import React, { useState } from 'react'
import './Nav.css'
import { BiMenu, BiX } from 'react-icons/bi'
import logo from './assets/logo.svg'
// import menu from './assets/menu.svg'
// import close from './assets/close.svg'
// import { FaTimes } from 'react-icons/fa'

const Nav = (props) => {
    const [menuOpen, setMenuOpen] = useState(false);

    function handleMenuClick() {
        setMenuOpen(!menuOpen);
    }

    return (
        <div className='navbar-wrapper'>
            <div className="navbar">
                <a href="/">
                    <div className="nav__logo">
                        {/* <FiBook className='nav__logo__icon' size={'22px'} /> */}
                        <img src={logo} alt="Logo" className="nav__logo__icon" />
                        <h2 className='nav__logo__name'>
                            Paper Prep
                        </h2>
                    </div>
                </a>
                {
                    menuOpen ?
                        <BiX
                            className='nav__menu'
                            size={'24px'}
                            onClick={handleMenuClick}
                            style={{ cursor: 'pointer' }}
                        /> :
                        <BiMenu
                            className='nav__menu'
                            size={'24px'}
                            onClick={handleMenuClick}
                            style={{ cursor: 'pointer' }}
                            />
                    // <div className="nav__icon__wrapper">
                        /* <img
                            src={menuOpen ? close : menu}
                            alt="Menu icon"
                            className='nav__icon'
                            onClick={handleMenuClick}
                            style={{ cursor: 'pointer' }}
                        /> */
                    // </div>
                }
            </div>
            <div className={menuOpen ? "nav-menu" : "nav-menu hidden"}>
                <button className='outlined button big full-width' onClick={props.scrollToBottom}>
                    Login
                </button>
                <button className='filled button big full-width' onClick={props.scrollToBottom}>
                    Sign Up
                </button>
            </div>
        </div>
    )
}

export default Nav