import store from "../app/store";
import { setSortType } from "./reduxSlices/filterSlice";

/**
 * 
 * @param {array} array Array of Objects Get piece of data from 
 * 
 * @param {string} string key of object value we need
 * 
 */
export const getPieceOfData = (array, string) => {
  const uniqKeys = {};

  if (array) {array.forEach(
      (item) => {

        if(!uniqKeys.hasOwnProperty(item[string])) {
          uniqKeys[item[string]] = true;
        }

      }
    );
  }

  return Object.keys(uniqKeys) || [];
};

/**
 * 
 * @param {Array} array 
 * @param {String} name 
 * @param {String} gender 
 * @param {String} nationality 
 */
export const contactsPreparator = (array, name, gender, nationality) => {
  if (name === null && gender == null && nationality === null) {
    return array;
  }

  return array.filter(
    ({ nat: contactNat, gender: contactGender, name: dirtyName }) => {
    // const contactName = Object.values(dirtyName).join(' ').toLowerCase();

    if (name === null && gender === null && nationality !== null) {
      const isNatEqual = contactNat.toLowerCase() === nationality.toLowerCase();

      return isNatEqual ? true : false;
    }

    if (name === null && gender !== null && nationality !== null) {
      const isNatEqual = contactNat.toLowerCase() === nationality.toLowerCase();
      const isGenderEqual = contactGender.toLowerCase() === gender.toLowerCase();

      return isNatEqual && isGenderEqual ? true : false;
    }

    if (name === null && gender !== null && nationality === null) {
      const isGenderEqual = contactGender.toLowerCase() === gender.toLowerCase();

      return isGenderEqual ? true : false;
    }

    if (name !== null && gender === null && nationality === null) {
      const contactName = Object.values(dirtyName).join(' ').toLowerCase();
      const isNameContains = contactName.toLowerCase().includes(name);

      return isNameContains;
    }

    if (name !== null && gender === null && nationality !== null) {
      const contactName = Object.values(dirtyName).join(' ').toLowerCase();
      const isNameContains = contactName.toLowerCase().includes(name);
      const isNatEqual = contactNat.toLowerCase() === nationality.toLowerCase();

      return isNameContains && isNatEqual ? true : false;
    }
    
    if (name !== null && gender !== null && nationality !== null) {
      const contactName = Object.values(dirtyName).join(' ').toLowerCase();
      const isNameContains = contactName.toLowerCase().includes(name);
      const isNatEqual = contactNat.toLowerCase() === nationality.toLowerCase();
      const isGenderEqual = contactGender.toLowerCase() === gender.toLowerCase();


      return isNameContains && isNatEqual && isGenderEqual ? true : false;
    }

    if (name !== null && gender !== null && nationality === null) {
      const contactName = Object.values(dirtyName).join(' ').toLowerCase();
      const isNameContains = contactName.toLowerCase().includes(name);
      const isGenderEqual = contactGender.toLowerCase() === gender.toLowerCase();

      return isNameContains && isGenderEqual ? true : false;
    }

  });
};

/**
 * 
 * @param {Array} contacts 
 * @param {String} sortType 
 */
export const sorter = (contacts, sortType = 'default') => {
  console.log('sortType', sortType);
  const nextSortType = (sortType === 'default') ? 'asc': (sortType === 'asc') ? 'desc' : 'default';

  store.dispatch(setSortType(nextSortType));

  if (sortType === 'desc') {
    const initContacts = store.getState().contacts.defaultValue;
    return initContacts;
  }
  
  const collator = new Intl.Collator({ sensitivity: 'base' });

  return [...contacts].sort(
    ({ name: nameA }, { name: nameB }) => {
      const { title: titleA, first: firstA, last: lastA } = nameA;
      const { title: titleB, first: firstB, last: lastB } = nameB;
      const fullNameA = `${titleA} ${firstA} ${lastA}`;
      const fullNameB = `${titleB} ${firstB} ${lastB}`;

      if (sortType === 'default') {
        
        return collator.compare(fullNameA, fullNameB);
      };

      if (sortType === 'asc') {

        return collator.compare(fullNameB, fullNameA);
      }
      
      return 0;
    });

}

