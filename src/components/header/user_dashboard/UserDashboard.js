import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, setUser, getUser } from '../../../features/reduxSlices/userSlice';
import { USER_URL } from '../../../features/API/config';
import './UserDashboard.css';
import { arrowIcon } from '../../../icons/icons';
import { Dropdown } from './Dropdown';

export const UserDashboard = () => {
  const [isDropdownShown, setIsDropdownShown] = useState(false);
  const setDropdownVisible = () => setIsDropdownShown(true);
  const setDropdownHidden = () => setIsDropdownShown(false);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {

    if (user !== null) {
      localStorage.setItem('user', JSON.stringify(user));
    };
    
    if (!localStorage.hasOwnProperty('user')) {
      dispatch(getUser(USER_URL));
    };

    if (localStorage.hasOwnProperty('user') && user === null) {
      dispatch(setUser(JSON.parse(localStorage.getItem('user'))));
      console.log('wuegsfku');
    };
  }, [dispatch, user]);

  return (
    <div className="header__login user-dashboard">
      <div className="user-dashboard__wrapper" onMouseEnter={setDropdownVisible} onMouseLeave={setDropdownHidden}>
        {user 
          ?
          <>
            <span className="user-dashboard__text">
            {`Hello ${user?.name?.title} ${user?.name?.first} ${user?.name?.last}`}
            </span>
            <span className="user-dashboard__arrow">{arrowIcon}</span>
            <img 
              src={user?.picture?.large} 
              alt="user foto" 
              className="user-dashboard__image" 
            />
            <div className="user-dashboard__dropdown dropdown">
              {isDropdownShown && <Dropdown hideAwaySelf={setDropdownHidden} />}
            </div>
          </>
          :
          <div>Loading...</div> }
      </div>
    </div>
  )
};

