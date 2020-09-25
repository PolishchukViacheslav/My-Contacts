import React, { useEffect } from 'react';
import './Contacts.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, getContacts } from '../../features/reduxSlices/contactsSlice';
import { URL } from '../../features/API/config';
import { ContactsHeader } from './contacts_header/ContactsHeader';
import { ContactsSearchBar } from './contact_search-bar/ContactsSearchBar';
import { ContactsPlates } from './contacts_body/Plates/ContactsPlates';
import { ContactsTable } from './contacts_body/Table/ContactsTable';
import { selectStringifyMode, setStringifyMode } from '../../features/reduxSlices/contactsPageConfigSlice';
import { Statistic } from './statistic/Statistic';
import { PaginationRounded } from '../Pagination';

export function Contacts() {
  const dispatch = useDispatch();
  const contactsFromServer = useSelector(selectContacts);
  const isLocalViewMode = localStorage.hasOwnProperty('viewMode');
  const localViewMode = (/true/i).test(localStorage.getItem('viewMode'));
  const reduxViewMode = useSelector(selectStringifyMode);
  const isTableMode = isLocalViewMode ? localViewMode : reduxViewMode;

  useEffect(() => {
    if(isLocalViewMode) {
      dispatch(setStringifyMode(localViewMode));
    }
  })

  useEffect(() => {
    if (!contactsFromServer.length) {
      dispatch(getContacts(URL));
    };

  }, [contactsFromServer.length, dispatch, reduxViewMode]);

  return (
    <div className="App__contacts">
      <ContactsHeader />
      <ContactsSearchBar />
      {isTableMode ? <ContactsTable /> : <ContactsPlates />}
      <Statistic />
      <PaginationRounded />
    </div>
  );
}
