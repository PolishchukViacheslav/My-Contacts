import React from 'react';
import { Field, reduxForm } from 'redux-form';
import './LoginForm.css'
import LoginFormFooter from './LoginFormFooter';
import { EmailField } from './EmailField';
import { PasswordField } from './PasswordField';
import { email, minLength5, minLength8, password, required } from '../../features/inputFieldsValidation';

let LoginForm = (props) => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <Field type="text"
        name="email"
        component={EmailField}
        validate={[ minLength5, required, email ]}
      />
      <Field 
        name="password"
        component={PasswordField}
        validate={[ minLength8, required, password ]}
        />
      <LoginFormFooter />
    </form>
  )
}

LoginForm = reduxForm({
  form: 'loginForm'
})(LoginForm);

export default LoginForm;