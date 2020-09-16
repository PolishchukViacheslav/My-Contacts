import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { contactsPreparator, getPieceOfData } from '../../../features/functions';
import { selectContacts } from '../../../features/reduxSlices/contactsSlice';
import { selectActiveGender, selectActiveName, selectActiveNat, selectPreparedContacts, setActiveGender, setDefaultFilteredContacts, setIsContactsWereUpdated } from '../../../features/reduxSlices/filterSlice'

export const FilterByGender = () => {
  const dispatch = useDispatch();
  const activeNat = useSelector(selectActiveNat);
  const activeName = useSelector(selectActiveName);
  const activeGender = useSelector(selectActiveGender);
  const initialValue = activeGender ? activeGender : 'all';
  const [value, setValue] = useState(initialValue);
  const initialContacts = useSelector(selectContacts);
  const contacts = useSelector(selectPreparedContacts);
  const genders = getPieceOfData(contacts, 'gender');

  const handleChange = ({target: { value }}) => {
    console.log('value', value);
    const reduxValue = (value.toLowerCase() === 'all') ? null : value.toLowerCase();
    const stateValue = (value.toLowerCase() === 'all') ? 'all' : value.toLowerCase();
    const filteredContacts = contactsPreparator(initialContacts, activeName, reduxValue, activeNat);
console.log('reduxValue', reduxValue);

    setValue(stateValue);
    dispatch(setActiveGender(reduxValue));
    dispatch(setDefaultFilteredContacts(filteredContacts));
    dispatch(setIsContactsWereUpdated(true));
  }

  useEffect(() => {
    dispatch(setIsContactsWereUpdated(false));
  }, [dispatch])

  return (
    <select className="search-bar__item" name="gender" value={value} onChange={handleChange}>
      <option value="all">Gender</option>
      {genders?.map(gender => (
        <option
          key={gender}
          value={gender}
        >
          {gender.toUpperCase()}
        </option>
      ))}
    </select>
  )
};
