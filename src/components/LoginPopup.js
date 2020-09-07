import React from 'react';
import LoginForm from './LoginForm';
import './Login.css';
import { useSelector } from 'react-redux';
import { selectPopupVisibility } from '../features/reduxSlices/loginPopupSlice';

const LoginPopup = () => {
  const isVisible = useSelector(selectPopupVisibility);
  const handleSubmit = (event) => {
    localStorage.setItem('user', JSON.stringify(event));
  };
  return (
    <div className={`login__popup-wrapper${isVisible ? '' : '--hidden'}`}>
      <div className="login__popup">
        <h6 className="login__header">Sign In</h6>
        <LoginForm  onSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default LoginPopup;
