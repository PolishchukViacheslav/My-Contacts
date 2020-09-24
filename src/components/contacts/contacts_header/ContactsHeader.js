import React, { useEffect } from 'react';
import './ContactsHeader.css';
import { refreshIcon, platesViewIcon, tabularViewIcon } from '../../../icons/icons';
import { batch, useDispatch, useSelector } from 'react-redux';
import { getContacts, selectContacts } from '../../../features/reduxSlices/contactsSlice';
import { URL } from '../../../features/API/config';
import { setStringifyMode } from '../../../features/reduxSlices/contactsPageConfigSlice';
import { selectActiveGender, selectActiveName, selectActiveNat, setActiveGender, setActiveName, setActiveNat, setDefaultFilteredContacts, setIsContactsWereUpdated } from '../../../features/reduxSlices/filterSlice';
import { contactsPreparator } from '../../../features/functions';

export const ContactsHeader = () => {
  const dispatch = useDispatch();
  const contactsFromServer = useSelector(selectContacts);
  const activeName = useSelector(selectActiveName);
  const activeGender = useSelector(selectActiveGender);
  const activeNat = useSelector(selectActiveNat);



  const handleUserRefresh = () => {
    batch(() => {
    dispatch(getContacts(URL));
    dispatch(setIsContactsWereUpdated(true));
    dispatch(setActiveName(null));
    dispatch(setActiveNat(null));
    dispatch(setActiveGender(null));
    
    });
  }

  const handlePlatesViewMode = () => {
    localStorage.setItem('viewMode', false)
    dispatch(setStringifyMode(false));
  };

  const handleStringViewMode = () => {
    localStorage.setItem('viewMode', true)
    dispatch(setStringifyMode(true));
  }

  useEffect(()=> {
    const preparedContacts = contactsPreparator(contactsFromServer, activeName, activeGender, activeNat);
    dispatch(setDefaultFilteredContacts(preparedContacts))
  },[dispatch, contactsFromServer])


  return (
    <div className="contacts__header">
      <h1>Contacts</h1>
      <div className="contacts__button-group">
        <button type="button" className="contacts__button--dotted" onClick={handleUserRefresh}><span>{refreshIcon}</span></button>
        <button type="button" className="contacts__button" value="false" onClick={handlePlatesViewMode}>{platesViewIcon}</button>
        <button type="button" className="contacts__button" value={true} onClick={handleStringViewMode}>{tabularViewIcon}</button>
      </div>
    </div>
  )
};

