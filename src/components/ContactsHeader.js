import React from 'react';
import './ContactsHeader.css';
import { refreshIcon, platesViewIcon, tabularViewIcon } from '../icons/icons';
import { useDispatch } from 'react-redux';
import { getContacts } from '../features/reduxSlices/contactsSlice';
import { URL } from '../features/API/config';
import { setStringifyMode } from '../features/reduxSlices/contactsPageConfigSlice';

export const ContactsHeader = () => {
  const dispatch = useDispatch();

  const handleUserRefresh = () => {
    dispatch(getContacts(URL));
  }

  const handlePlatesViewMode = () => {
    dispatch(setStringifyMode(false));
  };

  const handleStringViewMode = () => {
    dispatch(setStringifyMode(true));
  }


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

