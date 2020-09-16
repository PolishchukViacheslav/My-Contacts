import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactsPreparator, getPieceOfData } from '../../../features/functions';
import { selectContacts } from '../../../features/reduxSlices/contactsSlice';
import { selectActiveGender, selectActiveName, selectActiveNat, selectIsContactsUpdated, selectPreparedContacts, setActiveNat, setDefaultFilteredContacts as setPreparedContacts, setIsContactsWereUpdated} from '../../../features/reduxSlices/filterSlice';

export const FilterByNationality = () => {
  const dispatch = useDispatch();
  const activeNat = useSelector(selectActiveNat);
  const activeName = useSelector(selectActiveName);
  const activeGender = useSelector(selectActiveGender);
  const initialValue = activeNat ? activeNat : 'all';
  const updateDep = useSelector(selectIsContactsUpdated)

  const [value, setValue] = useState(initialValue);
  const contacts = useSelector(selectPreparedContacts);
  const initialContact = useSelector(selectContacts);
  const nationalities = getPieceOfData(contacts, 'nat');

  const handleChange = ({target: { value }}) => {
    const reduxValue = (value.toLowerCase() === 'all') ? null : value.toLowerCase();
    const stateValue = (value.toLowerCase() === 'all') ? 'all' : value.toLowerCase();
    const filteredContacts = contactsPreparator(initialContact, activeName, activeGender, reduxValue);

    setValue(stateValue);
    dispatch(setActiveNat(reduxValue));
    dispatch(setPreparedContacts(filteredContacts))
    dispatch(setIsContactsWereUpdated(true));
  }

  useEffect(() => {
  // const filteredContacts = contactsPreparator(contacts, activeName, activeGender, value);
    dispatch(setIsContactsWereUpdated(false));
  // dispatch(setPreparedContacts(filteredContacts))
  }, [dispatch, updateDep])
  return (
    
    <select className="search-bar__item" name="nationality" value={value} onChange={handleChange}>
      <option className="search-bar__nationality" value="all">All Nationalities</option>
      {nationalities?.map(nat => (
        <option 
          key={nat}
          className="search-bar__nationality" 
          value={nat.toLowerCase()}
        >
          {nat}
        </option>
        
      ))}
    </select>
  )
}
