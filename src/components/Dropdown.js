import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { logOutIcon, userIcon } from '../icons/icons';
import './Dropdown.css';
import { useDispatch } from 'react-redux';
import { setUser, setIsUser } from '../features/reduxSlices/userSlice';
import { setContacts } from '../features/reduxSlices/contactsSlice';
import { setStringifyMode } from '../features/reduxSlices/contactsPageConfigSlice';

export const Dropdown = ({ hideAwaySelf }) => {
  const profile = 'Profile';
  const logOut = 'LogOut';
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = (event) => {
    const { target: { innerText } } = event;
    const redirectToProfile = () => history.push(`/${profile.toLowerCase()}`);
    const redirectToHome = () => {
      history.push('./')
      localStorage.clear();
      dispatch(setUser(null));
      dispatch(setIsUser(false));
      dispatch(setContacts([]));
      dispatch(setStringifyMode(false));

    };

    event.preventDefault();

    hideAwaySelf();
    innerText === profile ? redirectToProfile() : redirectToHome()
    
  }

  return (
    <>
      <NavLink to="/profile" onClick={handleClick} className="dropdown__link" value="profile">
        <span role="img" aria-label="userIcon" className="dropdown__icon">
          {userIcon}
        </span>
        <span>{profile}</span>
      </NavLink>
      <NavLink to="/" onClick={handleClick} className="dropdown__link">
        <span role="img" aria-label="logOut" className="dropdown__icon">
          {logOutIcon}
        </span>
        <span>{logOut}</span>
      </NavLink>
    </>
  )
};

