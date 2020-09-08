import React from 'react';
import { mainLogoIcon } from '../icons/icons';
import './Header.css';
import HeaderNavigation from './HeaderNavigation';
import SignIn from './SignIn';

function Header() {

  return (
    <header className="App__header header">
        <div className="header__wrapper">
          <span >{mainLogoIcon}</span>
          <HeaderNavigation />
        </div>
        <SignIn />
      </header>
  )
}

export default Header
