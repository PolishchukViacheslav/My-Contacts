import React from 'react';
import './HeaderNavigation.css';
import { useSelector } from 'react-redux';
import { selectIsUser } from '../../../features/reduxSlices/userSlice';
import { NavLink } from 'react-router-dom';

function HeaderNavigation() {
  const isUser = useSelector(selectIsUser);


  return (
    <nav className="header__navigation nav">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink 
            to="/"
            className="nav__link"
            activeClassName="nav__link--active"
            isActive={({ url }) => {
              console.log('ur');
              return url === '/' ? true : false
            }}
          >
            Home
          </NavLink>
        </li>
        {isUser && 
          <li className="nav__item">
            <NavLink 
            to="/contacts"
            className="nav__link"
            activeClassName="nav__link--active"
            isActive={(params) => {
              return params?.url === '/contacts' ? true : false
            }}
            >
              Contacts
            </NavLink>
          </li>
        }
      </ul>
    </nav>
  )
};

export default HeaderNavigation;
