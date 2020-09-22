import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sorter } from '../../../../features/functions';
import { selectContacts, setContacts } from '../../../../features/reduxSlices/contactsSlice';
import { selectSortType } from '../../../../features/reduxSlices/filterSlice';
import { selectPrepContSlice } from '../../../../features/reduxSlices/paginationSlice';
import { arrowUp, arrowDown } from '../../../../icons/icons';
import './ContactsTable.css';
import { Row } from './Row';

export const ContactsTable = () => {
  const contacts = useSelector(selectPrepContSlice);
  const contactsForSort = useSelector(selectContacts);
  const dispatch = useDispatch();
  const activeSortType = useSelector(selectSortType);

  const handleSort = () => {
    let sortedContacts = sorter(contactsForSort, activeSortType)
    dispatch(setContacts(sortedContacts));
  }

  return (
    <div className="contactsTable">
      <table className="contactsTable__wrapper">
        <thead>
          <tr className="contactsTable__row">
            <th scope="col" className="contactsTable__avatar"><span className="contactsTable__headers--center">Avatar</span></th>
            <th scope="col" className="contactsTable__cursor-area" onClick={handleSort}>
              <span className="contactsTable__headers--clickable">Full name</span>
              <span className="contactsTable__sort">
                <span className={`contactsTable__arrow-up${activeSortType === 'asc' ? '--active' : ''}`}>{arrowUp}</span>
                <span className={`contactsTable__arrow-down${activeSortType === 'desc' ? '--active' : ''}`}>{arrowDown}</span>
              </span>
            </th>
            <th scope="col"><span className="contactsTable__headers">Birthday</span></th>
            <th scope="col"><span className="contactsTable__headers">E-mail</span></th>
            <th scope="col"><span className="contactsTable__headers">Phone</span></th>
            <th scope="col"><span className="contactsTable__headers">Location</span></th>
            <th scope="col"><span className="contactsTable__headers">Nationality</span></th>
          </tr>
        </thead>
        <tbody>
          {contacts?.map(contact => <Row key={contact.login.uuid} {...contact}/>)}
        </tbody>
      </table>
    </div>
  )
};