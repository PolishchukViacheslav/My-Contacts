import React from 'react';
import LoginForm from './LoginForm';
import './LoginPopup.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectPopupVisibility, setVisibility } from '../features/reduxSlices/loginPopupSlice';
import { setIsUser, getUser, selectUser } from '../features/reduxSlices/userSlice';
import { useHistory } from 'react-router-dom';
import { USER_URL } from '../features/API/config';

const LoginPopup = () => {
  const isVisible = useSelector(selectPopupVisibility);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = () => {
    dispatch(getUser(USER_URL));
    dispatch(setIsUser(true));
    dispatch(setVisibility(false));
    history.push('/contacts')
  };
  
  return (
    <div className={`login__popup${isVisible ? '' : '--hidden'}`}>
      <div className="login__popup-wrapper">
        <h6 className="login__header">Sign In</h6>
        <LoginForm  onSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default LoginPopup;
