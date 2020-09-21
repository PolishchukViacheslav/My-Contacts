import React from 'react';
import { useHistory } from 'react-router-dom';
import { natMap } from '../../../../features/iso2NatMap';
import './Row.css';

export const Row = (props) => {
  const history = useHistory();
  const { login, nat, location, phone, email, picture, name: { title, first,last }, dob } = props;
  const date = new Date (dob.date);
  const dateOptions = {
    weekday: 'long',
    year: 'numeric', month: 'numeric', day: 'numeric',
    hour: 'numeric', minute: 'numeric', second: 'numeric',
  }
  const preparedDate = new Intl.DateTimeFormat('en-US', dateOptions).format(date)

  const handleClick = () => {
    history.push(`/${login.uuid}`)
  }

  return (
    <>
      <tr className="contact-row">
        <th className="contact-row__header">
          <img src={picture.large} className="contact-row__image" alt="contact foto"/>
        </th>
        <td><span onClick={handleClick} className="contact-row__name">{`${title} ${first} ${last}`}</span></td>
        <td>
          <span className="contact-row__age">{`${preparedDate}`}</span>
          <div>{`${dob.age} years`}</div>
        </td>
        <td><a href={`mailto:${email}`}>{email}</a></td>
        <td><a href={`tel:${phone}`} className="contact-row__tel">{phone}</a></td>
        <td>
          <span className="contact-row__location">
            {`${location.postcode}, ${location.state}, ${location.street.name} ${location.street.number}`}
          </span>
        </td>
        <td><span className="contact-row__nationality">{natMap[nat]}</span></td>
      </tr>
    </>
  )
};
