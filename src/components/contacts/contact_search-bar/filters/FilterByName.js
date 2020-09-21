import React, { useEffect, useState } from 'react'
import { batch, useDispatch, useSelector } from 'react-redux';
import { contactsPreparator } from '../../../../features/functions';
import { selectContacts } from '../../../../features/reduxSlices/contactsSlice';
import { selectActiveGender, selectActiveName, selectActiveNat, setDefaultFilteredContacts as setPreparedContacts, setActiveName, setIsContactsWereUpdated } from '../../../../features/reduxSlices/filterSlice';

export const FilterByName = () => {
  const dispatch = useDispatch();
  const initialContact = useSelector(selectContacts);
  const activeNat = useSelector(selectActiveNat);
  const activeName = useSelector(selectActiveName);
  const activeGender = useSelector(selectActiveGender);
  const initialValue = activeName ? activeName : '';

  const [inputValue, setInputValue] = useState(initialValue);

  useEffect(() => {
    setInputValue(initialValue)
  },[initialValue])

  const handleInputChange = ({ target: { value } }) => {
    const reduxValueName = (value.toLowerCase() === '') ? null : value.toLowerCase();
    const stateValueName = (value.toLowerCase() === '') ? '' : value.toLowerCase();
    const filteredContacts = contactsPreparator(initialContact, reduxValueName, activeGender, activeNat) || [];

    setInputValue(stateValueName);

    batch(() => {
      dispatch(setActiveName(reduxValueName));
      dispatch(setPreparedContacts(filteredContacts));
      dispatch(setIsContactsWereUpdated(true));
    })
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
