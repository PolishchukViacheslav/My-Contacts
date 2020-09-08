import React from 'react'
import { signInIcon } from '../icons/icons'
import LoginPopup from './LoginPopup'
import { useDispatch, useSelector } from 'react-redux';
import { setVisibility, selectPopupVisibility } from '../features/reduxSlices/loginPopupSlice';

export const SignIn = () => {
  const dispatch = useDispatch();
  const isPopupVisible = useSelector(selectPopupVisibility);
  const handleLogin = () => {
    dispatch(setVisibility(!isPopupVisible));
  };

  return (
    <div className="header__login login">
      <button type="button" className="login__button" onClick={handleLogin}>
        <span role="img" aria-label="login" className="login__icon">
          {signInIcon}
        </span>
          <span>Sign In</span>
      </button>
      <LoginPopup />
    </div>
  )
}

export default SignIn
