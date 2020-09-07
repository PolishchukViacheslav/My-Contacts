import React from 'react';
import LoginForm from './LoginForm';
import './Login.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectPopupVisibility, setVisibility } from '../features/reduxSlices/loginPopupSlice';
import { setIsUser } from '../features/reduxSlices/contactsSlice';

const LoginPopup = () => {
  const isVisible = useSelector(selectPopupVisibility);
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    localStorage.setItem('user', JSON.stringify(event));
    dispatch(setVisibility(false));
    dispatch(setIsUser(true));
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
