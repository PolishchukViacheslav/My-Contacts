import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  // setContacts,
  selectContacts,
  getContacts,
} from '../features/reduxSlices/contactsSlice';
import { selectIsUser, selectUser, setUser, getUser } from '../features/reduxSlices/userSlice';
import './Contacts.css';
import { URL, USER_URL } from '../features/API/config';
import Contact from './Contact';
import { NotFound } from './NotFound';

export function Contacts() {
  const dispatch = useDispatch();
  const isLogged = useSelector(selectIsUser);
  const user = useSelector(selectUser);
  const contacts = useSelector(selectContacts);

  useEffect(() => {

    if (user !== null) {
      localStorage.setItem('user', JSON.stringify(user));
    };
    
    if (!localStorage.hasOwnProperty('user')) {
      dispatch(getUser(USER_URL));
    };

    if (localStorage.hasOwnProperty('user') && user === null) {
      dispatch(setUser(JSON.parse(localStorage.getItem('user'))));
    };

    if (!contacts.length) {
      dispatch(getContacts(URL));
    };

  }, [dispatch, user, contacts]);

  return (
    <div className="App__contacts">
      <ul className="contacts">
        {contacts.map(contact => (
          <Contact key={contact.login.uuid} contact={contact}/>
        ))}
      </ul>
    </div>
  );
}
