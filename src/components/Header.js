import React from 'react';
// import logo from '../icons/logo.svg';
import { signInIcon, mainLogoIcon } from '../icons/icons';
import './Header.css';
import LoginPopup from './LoginPopup';
import { useDispatch, useSelector } from 'react-redux';
import { setVisibility, selectPopupVisibility } from '../features/reduxSlices/loginPopupSlice';
import store from '../app/store';

function Header() {
  const dispatch = useDispatch();
  const isPopupVisible = useSelector(selectPopupVisibility);

  const handleLogin = () => {
    dispatch(setVisibility(!isPopupVisible));
  };

  console.log('store', store.contacts);

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
          <button type="button" className="login__button" onClick={handleLogin}>
            <span role="img" aria-label="login" className="login__icon">
              {signInIcon}
            </span>
              <span>Sign In</span>
          </button>
          <LoginPopup />
        </div>
      </header>
  )
}

export default Header
