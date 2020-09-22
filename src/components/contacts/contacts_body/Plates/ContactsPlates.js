import React from 'react'
import { useSelector } from 'react-redux';
import { selectPrepContSlice } from '../../../../features/reduxSlices/paginationSlice';
import { ContactPlate } from './ContactPlate';

export const ContactsPlates = () => {
  const contacts = useSelector(selectPrepContSlice);

  return (
    <ul className="contacts">
      {contacts?.map(contact => (
        <ContactPlate key={contact.login.uuid} contact={contact}/>
      ))}
    </ul>
  )
};
