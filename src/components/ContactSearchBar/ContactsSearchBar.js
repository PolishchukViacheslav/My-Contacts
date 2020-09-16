import React from 'react';
import './ContactsSearchBar.css';
import { FilterByGender } from './filters/FilterByGender';
import { FilterByNationality } from './filters/FilterByNationality';

export const ContactsSearchBar = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  }
  
  return (
    <div className="contacts__search-bar search-bar">
      <form className="search-bar__wrapper" onSubmit={handleSubmit}>
        <label htmlFor="name" className="search-bar__item">
          <input type="text" name="name" placeholder="Search by full name" className="search-bar__name"/>
        </label>
        <FilterByGender />
        <FilterByNationality />
        <label htmlFor="" className="search-bar__item search-bar__checkbox">
          <input type="checkbox" />
          <span>I am creator</span>
        </label>
        <button type="Submit" className="search-bar__item search-bar__button">X Clear</button>
      </form>
    </div>
  )
};

