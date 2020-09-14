// eslint-disable-next-line no-control-regex
const emailPatternRFC5322 = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i;
const minLength = min => value => (
  value && value.length < min 
  ? 
  `Must be at least ${min}`
  :
  undefined
  );

const passwordValidationPattern = /[^A-Za-z0-9.\-_]+/;
export const password = value => {
  const isInValidMatches = value.match(passwordValidationPattern);

  if (value && !isInValidMatches === true) {
    return undefined;
  } else {
    return 'Latin characters, numbers and symbols " ._- " are allowed'
  }
}; 

export const minLength5 = minLength(5);
export const minLength8 = minLength(8);
export const required = value => value ? undefined : 'Required';
export const email = value =>
  value && !emailPatternRFC5322.test(value) ?
  'Invalid email address' : undefined;
