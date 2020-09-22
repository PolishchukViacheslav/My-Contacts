import React from 'react';
import { batch, useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectInitialStat } from '../../../features/reduxSlices/contactsSlice';
import { setActiveGender, setActiveName, setActiveNat, setDefaultFilteredContacts, setIsContactsWereUpdated, setStatistic } from '../../../features/reduxSlices/filterSlice';
import { selectPerPage, setPrepContSlice } from '../../../features/reduxSlices/paginationSlice';
import './ContactsSearchBar.css';
import { FilterByGender } from './filters/FilterByGender';
import { FilterByName } from './filters/FilterByName';
import { FilterByNationality } from './filters/FilterByNationality';

export const ContactsSearchBar = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const contactsPerPage = useSelector(selectPerPage);
  const initStat = useSelector(selectInitialStat);



  const handleReset = (event) => {
    event.preventDefault();

    const prepContSlice = contacts.slice(0, contactsPerPage);

    batch(() => {
      dispatch(setActiveName(null));
      dispatch(setActiveNat(null));
      dispatch(setActiveGender(null));
      dispatch(setDefaultFilteredContacts(contacts));
      dispatch(setPrepContSlice(prepContSlice));
      dispatch(setIsContactsWereUpdated(true));
      dispatch(setStatistic(initStat));
    });
    
  }
  
  return (
    <div className="contacts__search-bar search-bar">
      <form className="search-bar__wrapper" onSubmit={handleReset}>
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

