import React from 'react';
import './HeaderNavigation.css';
import { useSelector } from 'react-redux';
import { selectIsUser } from '../features/reduxSlices/contactsSlice';

function HeaderNavigation() {
  const isUser = useSelector(selectIsUser);
  return (
    <nav className="header__navigation nav">
      <ul className="nav__list">
        <li className="nav__item">Home</li>
        {isUser && <li className="nav__item">Contacts</li>}
      </ul>
    </nav>
  )
};

export default HeaderNavigation;
