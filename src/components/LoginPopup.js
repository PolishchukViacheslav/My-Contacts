import React from 'react';
import { Field, reduxForm } from 'redux-form'

let LoginForm = (props) => {
  console.log('props', props);
  const { handleSubmit } = props;
  console.log('submit', handleSubmit);
  debugger;
  return (
    <form onSubmit={ handleSubmit }>
      <div>
        <label htmlFor="email">Email</label>
        <Field name="email" component="input" type="email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <Field name="password" component="input" type="password" />
      </div>
      <button>Submit</button>
    </form>
  )
}

const LoginReduxForm = reduxForm({
  // a unique name for the form
  form: 'loginForm'
})(LoginForm);

const LoginPopup = (props) => {
  console.log('props', props);
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm />
    </div>
  );
}

export default LoginPopup;
