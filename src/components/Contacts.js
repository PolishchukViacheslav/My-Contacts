import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, getContacts } from '../features/reduxSlices/contactsSlice';
import { selectPreparedContacts, setDefaultFilteredContacts } from '../features/reduxSlices/filterSlice';
import { selectStringifyMode } from '../features/reduxSlices/contactsPageConfigSlice';
import { URL } from '../features/API/config';
import Contact from './Contact';
import { ContactsHeader } from './ContactsHeader';
import { ContactsSearchBar } from './ContactSearchBar/ContactsSearchBar';
import './Contacts.css';

export function Contacts() {
  const dispatch = useDispatch();
  const contactsFromServer = useSelector(selectContacts);
  const contacts = useSelector(selectPreparedContacts);

  const isContactsStringView = useSelector(selectStringifyMode);
  const viewModifier = isContactsStringView ? '--stringify' : '';

  useEffect(() => {
    
    if (!contactsFromServer.length) {
      dispatch(getContacts(URL));
      dispatch(setDefaultFilteredContacts(contactsFromServer));
    };

    if (!contacts.length) {
      dispatch(setDefaultFilteredContacts(contactsFromServer));
    }


  }, [contacts.length, contactsFromServer, contactsFromServer.length, dispatch]);

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
