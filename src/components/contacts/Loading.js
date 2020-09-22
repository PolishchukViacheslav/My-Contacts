import React from 'react';
import { reactIcon } from '../../icons/icons';
import './Contacts.css';

export const Loading = ({ isVisible }) => {

  return (isVisible
    ?
    <div className="contacts__loading">
      <div className="contacts__loader">{reactIcon}</div>
    </div>
    :
    null
  )
}