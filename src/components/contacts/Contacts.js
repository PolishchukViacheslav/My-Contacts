import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, getContacts } from '../../features/reduxSlices/contactsSlice';
import { selectPreparedContacts, setDefaultFilteredContacts } from '../../features/reduxSlices/filterSlice';
// import { selectStringifyMode } from '../features/reduxSlices/contactsPageConfigSlice';
import { URL } from '../../features/API/config';
import { ContactsHeader } from './contacts_header/ContactsHeader';
import { ContactsSearchBar } from './contact_search-bar/ContactsSearchBar';
import './Contacts.css';
import { ContactsPlates } from './contacts_body/Plates/ContactsPlates';
import { ContactsTable } from './contacts_body/Table/ContactsTable';
import { selectStringifyMode } from '../../features/reduxSlices/contactsPageConfigSlice';

export function Contacts() {
  const dispatch = useDispatch();
  const contactsFromServer = useSelector(selectContacts);
  const contacts = useSelector(selectPreparedContacts);

  const isStringMode = useSelector(selectStringifyMode);

  useEffect(() => {
    if (!contactsFromServer.length) {
      dispatch(getContacts(URL));
    };

  }, [contactsFromServer.length, dispatch]);

  return (
    <div className="App__contacts">
      <ContactsHeader />
      <ContactsSearchBar />
      {isStringMode ? <ContactsTable /> : <ContactsPlates />}
    </div>
  );
}
