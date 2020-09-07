import React from 'react';
import './Contact.css';

function Contact(props) {
  const { contact } = props;
  console.log('cont', contact);
  return (
    <li className="contacts__item">{contact.name.first}</li>
  )
};

export default Contact;
