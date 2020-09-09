import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, getContacts } from '../features/reduxSlices/contactsSlice';
import { selectStringifyMode } from '../features/reduxSlices/contactsPageConfigSlice';
import './Contacts.css';
import { URL } from '../features/API/config';
import Contact from './Contact';
import { ContactsHeader } from './ContactsHeader';
import { ContactsSearchBar } from './ContactsSearchBar';

export function Contacts() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);


  const isContactsStringView = useSelector(selectStringifyMode);
  const viewModifier = isContactsStringView ? '--stringify' : '';

  useEffect(() => {

    if (!contacts.length) {
      dispatch(getContacts(URL));
    };

  }, [contacts.length, dispatch]);

  return (
    <div className="App__contacts">
      <ContactsHeader />
      <ContactsSearchBar />
      {contacts ? <ul className={`contacts${viewModifier}`}>
        {contacts.map(contact => (
          <Contact key={contact.login.uuid} contact={contact}/>
        ))}
      </ul> : 'Loading... Wait or click the refresh button in the upper right corner'}
    </div>
  );
}
