import React from 'react';
import { Field, reduxForm } from 'redux-form';
import './LoginForm.css'
import { userIcon, lockIcon } from '../icons/icons';

let LoginForm = (props) => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <div className="login-form__input-wrapper">
        <span role="img" aria-label="user" class="">{userIcon}</span>
        <label htmlFor="email">
          <Field name="email" component="input" type="email" placeholder="Email" className="login-form__input" />
        </label>
      </div>
      <div className="login-form__input-instructions">Type valid Email</div>
      <div className="login-form__input-wrapper">
        <span role="img" aria-label="lock" class="">{lockIcon}</span>
        <label htmlFor="password">
          <Field name="password" component="input" type="password" placeholder="Password" className="login-form__input" />
        </label>
      </div>
      <div className="login-form__input-instructions">Type valid Password min 8</div>
      <button type="Submit">Submit</button>
    </form>
  )
}

LoginForm = reduxForm({
  form: 'loginForm'
})(LoginForm);

export default LoginForm;