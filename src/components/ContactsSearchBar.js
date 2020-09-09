import React from 'react';
import './ContactsSearchBar.css';

export const ContactsSearchBar = () => {
  return (
    <div className="contacts__search-bar search-bar">
      <form className="search-bar__wrapper">
        <div>
          <label htmlFor="name">
            <input type="text" name="name" placeholder="Search by full name" />
          </label>
        </div>
        <select name="gender" value={'default'}>
          <option value="default" disabled>Gender</option>
          <option value="">Male</option>
          <option value="">Female</option>
          <option value="">Indeterminate</option>
        </select>
        <label htmlFor="">
          <input type="text" placeholder="Nationality"/>
        </label>
        <label htmlFor="">
          <input type="checkbox" />
          <span>I am creator</span>
        </label>
        <button type="Submit" className="search-bar__button">X Clear</button>
      </form>
    </div>
  )
};

