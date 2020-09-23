import React, { useEffect } from 'react';
import './Profile.css';
import { useSelector } from 'react-redux';
import { selectIsLoading, selectUser } from '../features/reduxSlices/userSlice';
import { selectPreparedContacts } from '../features/reduxSlices/filterSlice';
import { useHistory } from 'react-router-dom';
import { Loading } from './contacts/Loading';

export const Profile = ({ match: { params } }) => {
  const history = useHistory();
  let user = useSelector(selectUser);
  const contacts = useSelector(selectPreparedContacts);
  const isContact = params.hasOwnProperty('contactId');
  const isLoading = useSelector(selectIsLoading);

  if (isContact && (params.contactId !== 'myContacts')) {
    user = contacts?.find(({ login }) => login.uuid === params.contactId)
  }

  return (
      <>
        <div className="profile">
          <h1 className="profile__title">Profile</h1>
          <div className="profile__wrapper">
            <img src={user?.picture?.large} alt="user" className="profile__foto"/>
            <div className="profile__text-area">
              <span className="profile__name">
                {`${user?.name.title}. ${user?.name.first} ${user?.name.last} (${user?.dob.age} years)`}
              </span>
              <span><a href={`mailto:${user?.email}`} className="profile__link">{user?.email}</a></span>
              <span><a href={`tel:${user?.phone}`} className="profile__link">{user?.phone}</a></span>
              <span>{`/${user?.location.country}/`}</span>
              <span>{`${user?.location.postcode}, ${user?.location.state}, ${user?.location.street.name} ${user?.location.street.number}`}</span>
              <span className="profile__nationality">{user?.nat}</span>
            </div>
          </div>
        </div>
        {isContact && <button type="button" className="profile__button" onClick = {() => history.push('/contacts')}>Back to contacts</button>}
        <Loading isVisible={isLoading} />
      </>
  )
}
