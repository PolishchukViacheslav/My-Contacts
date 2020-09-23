import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { contactsPreparator } from '../../../../features/functions';
import { selectContacts } from '../../../../features/reduxSlices/contactsSlice';
import { selectActiveGender, selectActiveNat, setDefaultFilteredContacts as setPreparedContacts, setActiveName } from '../../../../features/reduxSlices/filterSlice';

export const FilterByName = () => {
  const dispatch = useDispatch();
  const initialContact = useSelector(selectContacts);
  const activeNat = useSelector(selectActiveNat);
  const activeGender = useSelector(selectActiveGender);

  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {

      const reduxValueName = (inputValue.toLowerCase() === '') ? null : inputValue.toLowerCase();
      const filteredContacts = contactsPreparator(initialContact, reduxValueName, activeGender, activeNat) || [];
      

      dispatch(setActiveName(reduxValueName));
      dispatch(setPreparedContacts(filteredContacts));
    }, 1000);

    return () => clearTimeout(timer);
  },[dispatch, inputValue]);


  const handleInputChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <label htmlFor="name" className="search-bar__item">
      <input 
        value={inputValue}
        type="text" 
        name="name" 
        placeholder="Search by full name" 
        className="search-bar__name"
        onChange={handleInputChange}
      />
    </label>
  )
};
