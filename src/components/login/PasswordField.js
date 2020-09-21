import React, { useState } from 'react';
import { hiddenInputFieldIcon, lockIcon, visibleInputFieldIcon } from '../../icons/icons';

export const PasswordField = ({ input, meta: { touched, error, active } }) => {
  const [ fieldType, setFieldType ] = useState('password');
  const [isPasswordVisibleIcon, setIsPasswordVisibleIcon] = useState(visibleInputFieldIcon);

  const handlePasswordVisibility = () => {
    if (fieldType === 'password') {
    setFieldType('text');
    setIsPasswordVisibleIcon(hiddenInputFieldIcon);
    } else {
    setFieldType('password');
    setIsPasswordVisibleIcon(visibleInputFieldIcon);
    }
  };
    return (<>
      <div className="login-form__input-wrapper">
        <span role="img" aria-label="lock" className="">{lockIcon}</span>
        <label htmlFor="password">
          <input {...input} type={`${fieldType}`} name="password" placeholder="Password" className="login-form__input" autoComplete="current-password"/>
        </label>
        <span role="img" aria-label="hidden-password" className="login-form__password" onClick={handlePasswordVisibility}>{isPasswordVisibleIcon}</span>
      </div>
      {(!touched || active  || !error) && <div className="login-form__input-instructions">Type valid Password min 8</div>}
      {(touched && !active) && ((error && <div className="login-form__input-instructions--error">{error}</div>))}
    </>)
};