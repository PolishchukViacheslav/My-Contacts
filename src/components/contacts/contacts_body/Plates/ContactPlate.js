import React from 'react';
import './ContactPlate.css';
import { useHistory } from 'react-router-dom';
import { natMap } from '../../../../features/iso2NatMap';

export const ContactPlate = (props) => {
  const { contact } = props;
  const history = useHistory();

  const handleClick = () => {
    history.push(`/${contact.login.uuid}`)
  }

  return (
    <li className="contacts__item contact" onClick={handleClick}>
        <img src={contact?.picture?.large} alt="contact" className="contact__foto"/>
        <div className="contact__text-area">
          <span className="contact__name">
            {`${contact?.name.title} ${contact?.name.first} ${contact?.name.last} (${contact?.dob.age} years)`}
          </span>
          <span><a href={`mailto:${contact?.email}`} className="contact__link">{contact?.email}</a></span>
          <span><a href={`tel:${contact?.phone}`} className="contact__link">{contact?.phone}</a></span>
          <span>{`/${contact?.location.country}/`}</span>
          <span>{`${contact?.location.postcode}, ${contact?.location.state}, ${contact?.location.street.name} ${contact?.location.street.number}`}</span>
          <span className="contact__nationality">{natMap[contact?.nat]}</span>
        </div>
    </li>
  )
};
