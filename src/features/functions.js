import store from "../app/store";
import { setSortType, setStatistic } from "./reduxSlices/filterSlice";
import { setPagesCount, setPrepContSlice } from "./reduxSlices/paginationSlice";

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
 * @param {Array} array used for pagination
 */
const pagesCounter = (array) => {
  const pages = (array.length <= store.getState().pagination.perPage)
  ?
  1
  :
  Math.ceil(array.length/store.getState().pagination.perPage);

  return pages;
} 

/**
 * 
 * @param {Array} array from slice will created 
 * @param {Number} start index from what to start
 * @param {Number} end index for end (this index wouldn't be include)
 */
const createPrepContactSlice = (array, start, end) => {
  const perPage = store.getState().pagination.perPage;
  const startIndex = start || 0;
  const endIndex = end || (startIndex + perPage); 
  const contactsSlice = array.slice(startIndex, endIndex);

  return contactsSlice;

}

/**
 * 
 * @param {Array} array 
 * 
 * @param {String} name 
 * 
 * @param {String} gender 
 * 
 * @param {String} nationality 
 */
export const contactsPreparator = (array, name, gender, nationality) => {

  if (name === null && gender === null && nationality === null) {
    
    if (array.length) {
      const pagesCount = pagesCounter(array);
      const contactsPerPage = store.getState().pagination.perPage;
      const contactsSlice = pagesCount <= 1 ? array : array.slice(0 ,contactsPerPage); 

      store.dispatch(setStatistic(store.getState().contacts.initialStat));
      store.dispatch(setPagesCount(pagesCount));
      store.dispatch(setPrepContSlice(contactsSlice));
      console.log('pagesCount', store.dispatch(setPagesCount(pagesCount)));
    }
    return array;
  }

  const statistic = {
    collectionSize: '',
    males: 0,
    females: 0,
    indeterminate: 0,
    predominate: '',
    nationalities: {},
  };

  const preparedContacts = array.filter(
    ({ nat: contactNat, gender: contactGender, name: dirtyName }) => {

    if (name === null && gender === null && nationality !== null) {
      const isNatEqual = contactNat.toLowerCase() === nationality.toLowerCase();

      if (isNatEqual) {
        contactGender === 'male' ? statistic.males++ : contactGender === 'female' ? statistic.females++ : statistic.indeterminate++;
        console.log('gender', contactGender, );
        contactGender === 'male' ? statistic.males++ : contactGender === 'female' ? statistic.females++ : statistic.indeterminate++;

        if (statistic.nationalities.hasOwnProperty(contactNat)) {
          statistic.nationalities[contactNat]++;
        }
  
        if (!statistic.nationalities.hasOwnProperty(contactNat)) {
          statistic.nationalities[contactNat] = 1;
        }

      }

      return isNatEqual ? true : false;
    }

    if (name === null && gender !== null && nationality !== null) {
      const isNatEqual = contactNat.toLowerCase() === nationality.toLowerCase();
      const isGenderEqual = contactGender.toLowerCase() === gender.toLowerCase();
      const isEqual = isNatEqual && isGenderEqual;

      if (isEqual) {
        contactGender === 'male' ? statistic.males++ : contactGender === 'female' ? statistic.females++ : statistic.indeterminate++;
        console.log('gender', contactGender, );
        contactGender === 'male' ? statistic.males++ : contactGender === 'female' ? statistic.females++ : statistic.indeterminate++;

        if (statistic.nationalities.hasOwnProperty(contactNat)) {
          statistic.nationalities[contactNat]++;
        }
  
        if (!statistic.nationalities.hasOwnProperty(contactNat)) {
          statistic.nationalities[contactNat] = 1;
        }

      }

      return isEqual ? true : false;
    }

    if (name === null && gender !== null && nationality === null) {
      const isGenderEqual = contactGender.toLowerCase() === gender.toLowerCase();

      if (isGenderEqual) {
        contactGender === 'male' ? statistic.males++ : contactGender === 'female' ? statistic.females++ : statistic.indeterminate++;

        if (statistic.nationalities.hasOwnProperty(contactNat)) {
          statistic.nationalities[contactNat]++;
        }
  
        if (!statistic.nationalities.hasOwnProperty(contactNat)) {
          statistic.nationalities[contactNat] = 1;
        }

      }

      return isGenderEqual ? true : false;
    }

    if (name !== null && gender === null && nationality === null) {
      const contactName = Object.values(dirtyName).join(' ').toLowerCase();
      const isNameContains = contactName.toLowerCase().includes(name);

      if (isNameContains) {
        contactGender === 'male' ? statistic.males++ : contactGender === 'female' ? statistic.females++ : statistic.indeterminate++;
        console.log('gender', contactGender, );
        contactGender === 'male' ? statistic.males++ : contactGender === 'female' ? statistic.females++ : statistic.indeterminate++;

        if (statistic.nationalities.hasOwnProperty(contactNat)) {
          statistic.nationalities[contactNat]++;
        }
  
        if (!statistic.nationalities.hasOwnProperty(contactNat)) {
          statistic.nationalities[contactNat] = 1;
        }

      }

      return isNameContains;
    }

    if (name !== null && gender === null && nationality !== null) {
      const contactName = Object.values(dirtyName).join(' ').toLowerCase();
      const isNameContains = contactName.toLowerCase().includes(name);
      const isNatEqual = contactNat.toLowerCase() === nationality.toLowerCase();
      const isEqual = isNameContains && isNatEqual;

      if (isEqual) {
        contactGender === 'male' ? statistic.males++ : contactGender === 'female' ? statistic.females++ : statistic.indeterminate++;
        console.log('gender', contactGender, );
        contactGender === 'male' ? statistic.males++ : contactGender === 'female' ? statistic.females++ : statistic.indeterminate++;

        if (statistic.nationalities.hasOwnProperty(contactNat)) {
          statistic.nationalities[contactNat]++;
        }
  
        if (!statistic.nationalities.hasOwnProperty(contactNat)) {
          statistic.nationalities[contactNat] = 1;
        }

      }

      return isEqual ? true : false;
    }
    
    if (name !== null && gender !== null && nationality !== null) {
      const contactName = Object.values(dirtyName).join(' ').toLowerCase();
      const isNameContains = contactName.toLowerCase().includes(name);
      const isNatEqual = contactNat.toLowerCase() === nationality.toLowerCase();
      const isGenderEqual = contactGender.toLowerCase() === gender.toLowerCase();
      const isEqual = isNameContains && isNatEqual && isGenderEqual;

      if (isEqual) {
        contactGender === 'male' ? statistic.males++ : contactGender === 'female' ? statistic.females++ : statistic.indeterminate++;
        console.log('gender', contactGender, );
        contactGender === 'male' ? statistic.males++ : contactGender === 'female' ? statistic.females++ : statistic.indeterminate++;

        if (statistic.nationalities.hasOwnProperty(contactNat)) {
          statistic.nationalities[contactNat]++;
        }
  
        if (!statistic.nationalities.hasOwnProperty(contactNat)) {
          statistic.nationalities[contactNat] = 1;
        }

      }


      return isEqual ? true : false;
    }

    if (name !== null && gender !== null && nationality === null) {
      const contactName = Object.values(dirtyName).join(' ').toLowerCase();
      const isNameContains = contactName.toLowerCase().includes(name);
      const isGenderEqual = contactGender.toLowerCase() === gender.toLowerCase();
      const isEqual = isNameContains && isGenderEqual;

      if (isEqual) {
        contactGender === 'male' ? statistic.males++ : contactGender === 'female' ? statistic.females++ : statistic.indeterminate++;
        console.log('gender', contactGender, );
        contactGender === 'male' ? statistic.males++ : contactGender === 'female' ? statistic.females++ : statistic.indeterminate++;

        if (statistic.nationalities.hasOwnProperty(contactNat)) {
          statistic.nationalities[contactNat]++;
        }
  
        if (!statistic.nationalities.hasOwnProperty(contactNat)) {
          statistic.nationalities[contactNat] = 1;
        }

      }

      return isEqual ? true : false;
    }

    return null;
  });

  statistic.collectionSize = preparedContacts.length;
  statistic.predominate = +statistic.males > +statistic.females ? 'male' : +statistic.males < +statistic.females ? 'female' : 'friend';
  store.dispatch(setPagesCount(pagesCounter(preparedContacts)));
  store.dispatch(setPrepContSlice(createPrepContactSlice(preparedContacts)));

  store.dispatch(setStatistic(statistic));

  return preparedContacts
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