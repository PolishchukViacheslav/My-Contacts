import React from 'react';
// import logo from '../icons/logo.svg';
import { signInIcon, mainLogoIcon } from '../icons/icons';
import './Header.css';
import LoginPopup from './LoginPopup';

function Header() {

  return (
    <header className="App__header header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div className="header__wrapper">
          <span >{mainLogoIcon}</span>
          <nav className="header__navigation nav">
            <ul className="nav__list">
              <li className="nav__item">Home</li>
              <li className="nav__item">Home</li>
            </ul>
          </nav>
        </div>
        <div className="header__login login">
          <button type="button" className="login__button">
            <span role="img" aria-label="login" className="login__icon">
              {signInIcon}
            </span>
              <span>Sign In</span>
          </button>
          <div className="login__popup-wrapper">
            <LoginPopup />
          </div>
        </div>
      </header>
  )
}

export default Header
