import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  // setContacts,
  selectContacts,
  getContacts,
} from '../features/contacts/contactsSlice';
import './Contacts.css';
import { URL } from '../features/API/config';

export function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts(URL));
  }, [dispatch]);
  
  const contacts = useSelector(selectContacts);
  console.log('contacts', contacts);
  // const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <div className="contacts">
    <ul>
      {contacts.map(contact => (
        <li key={contact.login.uuid}>{contact.name.first}</li>
      ))}
    </ul>
      {/* <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
        >
          Add Async
        </button>
      </div> */}
    </div>
  );
}
