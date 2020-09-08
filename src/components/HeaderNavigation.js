import React from 'react';
import './HeaderNavigation.css';
import { useSelector } from 'react-redux';
import { selectIsUser } from '../features/reduxSlices/userSlice';
import { NavLink } from 'react-router-dom';

function HeaderNavigation() {
  const isUser = useSelector(selectIsUser);
  const activeStyle = {color: "black", cursor: "default"};

  return (
    <nav className="header__navigation nav">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink 
            to="/"
            className="nav__link"
            activeStyle={activeStyle}

          >
            Home
          </NavLink>
        </li>
        {isUser && 
          <li className="nav__item">
            <NavLink 
            to="/contacts"
            className="nav__link"
            activeStyle={activeStyle}
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
