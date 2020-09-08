import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, getContacts } from '../features/reduxSlices/contactsSlice';
import { selectUser, setUser, getUser } from '../features/reduxSlices/userSlice';
import './Contacts.css';
import { URL, USER_URL } from '../features/API/config';
import Contact from './Contact';

export function Contacts() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const contacts = useSelector(selectContacts);

  useEffect(() => {

    if (!contacts.length) {
      dispatch(getContacts(URL));
    };

  }, [contacts.length, dispatch]);

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
