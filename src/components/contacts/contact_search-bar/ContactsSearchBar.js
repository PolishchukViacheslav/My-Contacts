import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../../features/reduxSlices/contactsSlice';
import { setActiveGender, setActiveName, setActiveNat, setDefaultFilteredContacts, setIsContactsWereUpdated } from '../../../features/reduxSlices/filterSlice';
import './ContactsSearchBar.css';
import { FilterByGender } from './filters/FilterByGender';
import { FilterByName } from './filters/FilterByName';
import { FilterByNationality } from './filters/FilterByNationality';

export const ContactsSearchBar = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);


  const handleSubmit = (event) => {
    event.preventDefault();
    
    dispatch(setActiveName(null));
    dispatch(setActiveNat(null));
    dispatch(setActiveGender(null));
    dispatch(setDefaultFilteredContacts(contacts));
    dispatch(setIsContactsWereUpdated(true));
  }
  
  return (
    <div className="contacts__search-bar search-bar">
      <form className="search-bar__wrapper" onSubmit={handleSubmit}>
        <FilterByName />
        <FilterByGender />
        <FilterByNationality />
        <label htmlFor="" className="search-bar__item search-bar__checkbox">
          <input type="checkbox" />
          <span>I am creator</span>
        </label>
        <button type="Submit" className="search-bar__item">
          <span className="search-bar__button">X Clear</span>
        </button>
      </form>
    </div>
  )
};

