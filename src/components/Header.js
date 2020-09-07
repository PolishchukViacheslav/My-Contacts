import React from 'react';
// import logo from '../icons/logo.svg';
import { signInIcon, mainLogoIcon } from '../icons/icons';
import './Header.css';
import LoginPopup from './LoginPopup';
import { useDispatch, useSelector } from 'react-redux';
import { setVisibility, selectPopupVisibility } from '../features/reduxSlices/loginPopupSlice';
import store from '../app/store';
import HeaderNavigation from './HeaderNavigation';

function Header() {
  const dispatch = useDispatch();
  const isPopupVisible = useSelector(selectPopupVisibility);

  const handleLogin = () => {
    dispatch(setVisibility(!isPopupVisible));
  };

  console.log('store', store.contacts);

  return (
    <header className="App__header header">
        <div className="header__wrapper">
          <span >{mainLogoIcon}</span>
          <HeaderNavigation />
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
