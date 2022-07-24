import React, { useState } from 'react'
import './Nav.css'
import { FiBook, BiMenu, BiX } from 'react-icons/bi'
import logo from './assets/logo.svg'
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
                        <h2>
                            Paper Prep
                        </h2>
                    </div>
                </a>
                {
                    menuOpen ?
                        <BiX className='nav__menu' size={'22px'} onClick={handleMenuClick} /> :
                        <BiMenu className='nav__menu' size={'22px'} onClick={handleMenuClick} />
                }
            </div>
            <div className={menuOpen ? "nav-menu" : "nav-menu hidden"}>
                <button className='outlined button' onClick={props.scrollToBottom}>
                    Login
                </button>
                <button className='filled button' onClick={props.scrollToBottom}>
                    Sign Up
                </button>
            </div>
        </div>
    )
}

export default Nav