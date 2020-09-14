import React from 'react';
import { userIcon } from '../icons/icons';

export const EmailField = ({ input, meta: { touched, error, active } }) => {
    return (<>
      <div className="login-form__input-wrapper">
        <span role="img" aria-label="user" className="">{userIcon}</span>
        <label htmlFor="email">
          <input {...input} name="email" placeholder="Email" className="login-form__input" />
        </label>
      </div>
      {(!touched || active  || !error) && <div className="login-form__input-instructions">Type Email here</div>}
      {(touched && !active) && ((error && <div className="login-form__input-instructions--error">{error}</div>))}
    </>)
};
