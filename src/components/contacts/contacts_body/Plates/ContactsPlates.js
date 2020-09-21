import React from 'react'
import { useSelector } from 'react-redux';
import { selectPreparedContacts } from '../../../../features/reduxSlices/filterSlice';
import { ContactPlate } from './ContactPlate';

export const ContactsPlates = () => {
  const contacts = useSelector(selectPreparedContacts);

  return (
    <ul className="contacts">
      {contacts?.map(contact => (
        <ContactPlate key={contact.login.uuid} contact={contact}/>
      ))}
    </ul>
  )
};
