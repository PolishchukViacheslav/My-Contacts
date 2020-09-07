import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  // setContacts,
  selectContacts,
  getContacts,
} from '../features/reduxSlices/contactsSlice';
import './Contacts.css';
import { URL } from '../features/API/config';
import Contact from './Contact';

export function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts(URL));
  }, [dispatch]);
  
  const contacts = useSelector(selectContacts);

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
