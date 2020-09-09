import React from 'react';
import './UserProfile.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/reduxSlices/userSlice';

export const UserProfile = () => {
  const user = useSelector(selectUser);
//   if (!user) {
//     const { name } = user;
//   const { age } = user.dob;
// }
  console.log('user', user);

  return (
    <div className="user-profile">
      <h1 className="user-profile__title">Profile</h1>
      <div className="user-profile__wrapper">
        <img src={user?.picture?.large} alt="user" className="user-profile__foto"/>
        <div className="user-profile__text-area">
          <span className="user-profile__name">
            {`${user?.name.title}. ${user?.name.first} ${user?.name.last} (${user?.dob.age} years)`}
          </span>
          <span><a href={`mailto:${user?.email}`} className="user-profile__link">{user?.email}</a></span>
          <span><a href={`tel:${user?.phone}`} className="user-profile__link">{user?.phone}</a></span>
          <span>{`/${user?.location.country}/`}</span>
          <span>{`${user?.location.postcode}, ${user?.location.state}, ${user?.location.street.name} ${user?.location.street.number}`}</span>
          <span className="user-profile__nationality">{user?.nat}</span>
        </div>
      </div>
    </div>
  )
}
