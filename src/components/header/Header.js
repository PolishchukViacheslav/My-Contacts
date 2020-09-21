import React from 'react';
import { mainLogoIcon } from '../../icons/icons';
import './Header.css';
import HeaderNavigation from '../contacts/contacts_header/HeaderNavigation';
import { SignIn } from '../login/SignIn';
import { useSelector } from 'react-redux';
import { selectIsUser } from '../../features/reduxSlices/userSlice';
import { UserDashboard } from './user_dashboard/UserDashboard';

export const Header = () => {
  const isLogged = useSelector(selectIsUser);

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
