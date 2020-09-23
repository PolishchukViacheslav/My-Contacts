import React from 'react';
import LoginForm from './LoginForm';
import './LoginPopup.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectPopupVisibility, setVisibility } from '../../features/reduxSlices/loginPopupSlice';
import { setIsUser } from '../../features/reduxSlices/userSlice';
import { useHistory } from 'react-router-dom';

const LoginPopup = () => {
  const isVisible = useSelector(selectPopupVisibility);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (event) => {
    dispatch(setIsUser(true));
    dispatch(setVisibility(false));
    history.push('/profile')
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
