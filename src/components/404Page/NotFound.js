import React from 'react';
import { useHistory } from 'react-router-dom';
import './NotFound.css';

export const NotFound = () => {
  const history = useHistory();
  console.log('history', history);
  return (
    <div className="not-found">
      <span className="not-found__title">Not Found</span>
    </div>
  )
};
