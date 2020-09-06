import React from 'react';
import LoginForm from './LoginForm';
import './Login.css';

const LoginPopup = () => {
  const handleSubmit = (event) => {
    localStorage.setItem('user', JSON.stringify(event));
  };
  return (
    <div className="login__popup">
      <h6 className="login__header">Sign In</h6>
      <LoginForm  onSubmit={handleSubmit} />
    </div>
  );
}

export default LoginPopup;
