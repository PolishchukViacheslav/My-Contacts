import React, { useEffect, useState } from 'react';
import { batch, useDispatch, useSelector } from 'react-redux';
import { contactsPreparator, getPieceOfData } from '../../../features/functions';
import { selectContacts } from '../../../features/reduxSlices/contactsSlice';
import { selectActiveGender, selectActiveName, selectActiveNat, selectPreparedContacts, setActiveNat, setDefaultFilteredContacts as setPreparedContacts, setIsContactsWereUpdated} from '../../../features/reduxSlices/filterSlice';

export const FilterByNationality = () => {
  const dispatch = useDispatch();
  const activeNat = useSelector(selectActiveNat);
  const activeName = useSelector(selectActiveName);
  const activeGender = useSelector(selectActiveGender);
  const initialValue = activeNat ? activeNat : 'all';

  const [value, setValue] = useState(initialValue);
  const contacts = useSelector(selectPreparedContacts);
  const initialContact = useSelector(selectContacts);
  const nationalities = getPieceOfData(contacts, 'nat');

  const handleChange = ({target: { value }}) => {
    const reduxValueNat = (value.toLowerCase() === 'all') ? null : value.toLowerCase();
    const stateValueNat = (value.toLowerCase() === 'all') ? 'all' : value.toLowerCase();
    const filteredContacts = contactsPreparator(initialContact, activeName, activeGender, reduxValueNat);

    setValue(stateValueNat);
    
    batch(()=> {
      dispatch(setActiveNat(reduxValueNat));
      dispatch(setPreparedContacts(filteredContacts))
      dispatch(setIsContactsWereUpdated(true));
    });

  }

  useEffect(() => {
    dispatch(setIsContactsWereUpdated(false));
    setValue(initialValue);
  }, [dispatch, initialValue])
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
