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

export const contactsPreparator = (array, name, gender, nationality) => {
  if (name === null && gender == null && nationality === null) {
    return array;
  }

  return array.filter(
    ({ nat: contactNat, gender: contactGender, name: dirtyName }) => {
    const contactName = Object.values(dirtyName).join(' ').toLowerCase();

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

  });
}

