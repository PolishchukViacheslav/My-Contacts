import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, setIsUser, setUser, getUser } from '../features/reduxSlices/userSlice';
import { USER_URL } from '../features/API/config';
import './UserDashboard.css';
import { arrow } from '../icons/icons';

export const UserDashboard = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  console.log('user', user);

  useEffect(() => {

    if (user !== null) {
      localStorage.setItem('user', JSON.stringify(user));
      console.log('1');
    };
    
    if (!localStorage.hasOwnProperty('user')) {
      dispatch(getUser(USER_URL));
      console.log('2');
    };

    if (localStorage.hasOwnProperty('user') && user === null) {
      dispatch(setUser(JSON.parse(localStorage.getItem('user'))));
      console.log('3');
    };
  }, [dispatch, user]);

  return (
    <div className="header__login user-dashboard">
      <div className="user-dashboard__wrapper">
        {user 
          ?
          <>
            <span className="user-dashboard__text">
            {`Hello ${user?.name?.title} ${user?.name?.first} ${user?.name?.last}`}
            </span>
            <span className="user-dashboard__arrow">{arrow}</span>
            <img 
              src={user?.picture?.large} 
              alt="user foto" 
              className="user-dashboard__image" 
            />
          </>
          :
          <div>Loading...</div> }
      </div>
    </div>
  )
};

