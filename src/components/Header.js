import React from 'react';
import { mainLogoIcon } from '../icons/icons';
import './Header.css';
import HeaderNavigation from './HeaderNavigation';
import { SignIn } from './SignIn';
import { useSelector } from 'react-redux';
import { selectIsUser } from '../features/reduxSlices/userSlice';
import { UserDashboard } from './UserDashboard';

export const Header = () => {
  const isLogged = useSelector(selectIsUser);
  console.log('isLogged', isLogged);

  return (
    <header className="App__header header">
        <div className="header__wrapper">
          <span >{mainLogoIcon}</span>
          <HeaderNavigation />
        </div>
        {isLogged ? <UserDashboard /> : <SignIn />}
      </header>
  )
};
