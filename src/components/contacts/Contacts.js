import React, { useEffect } from 'react';
import './Contacts.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, getContacts, selectIsLoading } from '../../features/reduxSlices/contactsSlice';
import { URL } from '../../features/API/config';
import { ContactsHeader } from './contacts_header/ContactsHeader';
import { ContactsSearchBar } from './contact_search-bar/ContactsSearchBar';
import { ContactsPlates } from './contacts_body/Plates/ContactsPlates';
import { ContactsTable } from './contacts_body/Table/ContactsTable';
import { selectStringifyMode } from '../../features/reduxSlices/contactsPageConfigSlice';
import { Statistic } from './statistic/Statistic';
import { PaginationRounded } from '../Pagination';
import { Loading } from './Loading';

export function Contacts() {
  const dispatch = useDispatch();
  const contactsFromServer = useSelector(selectContacts);

  const isStringMode = useSelector(selectStringifyMode);
  const isLoading = useSelector(selectIsLoading);

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
      <Statistic />
      <PaginationRounded />
      <Loading isVisible={isLoading}/>
    </div>
  );
}
