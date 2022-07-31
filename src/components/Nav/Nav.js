import React from "react";
import { useState } from "react";
import "./Nav.css";
import { BiMenu, BiX } from "react-icons/bi";
import logo from "./assets/logo.svg";
// import menu from './assets/menu.svg'
// import close from './assets/close.svg'
// import { FaTimes } from 'react-icons/fa'

const Nav = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleMenuClick() {
    setMenuOpen(!menuOpen);
  }

  function handleLogin() {
    setMenuOpen(false);
    props.scrollToBottom();
  }

  function handleSignUp() {
    setMenuOpen(false);
    props.scrollToBottom();
  }

  return (
    /* <div className='navbar-wrapper'>
            <div className="navbar">
                <a href="/">
                    <div className="nav__logo">
                        <img src={logo} alt="Logo" className="nav__logo__icon svg" />
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
        </div> */
    <div className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="Logo" className="navbar__logo__icon" />
        <h2 className="navbar__logo__title">Paper Prep</h2>
      </div>
      <BiMenu
        className="navbar__menu-btn"
        size={"30px"}
        onClick={handleMenuClick}
      />
      <div className={`navbar__navigation ${!menuOpen && "hide"}`}>
        <BiX
          className={`navbar__close-btn`}
          size={"34px"}
          onClick={handleMenuClick}
        />
        <ul className="navbar__navigation__list">
          <a href="/">
            <li className="navbar__navigation__item">Home</li>
          </a>
          <a href="/">
            <li className="navbar__navigation__item">About</li>
          </a>
        </ul>
        <button className="button outlined" onClick={handleLogin}>
          Login
        </button>
        <button className="button filled" onClick={handleSignUp}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Nav;
