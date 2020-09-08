import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from '../features/reduxSlices/contactsSlice';
import loginPopupReducer from '../features/reduxSlices/loginPopupSlice';
import userReducer from '../features/reduxSlices/userSlice';
import { reducer as formFReducer } from 'redux-form';

export default configureStore({
  reducer: {
    contacts: contactsReducer,
    loginPopup: loginPopupReducer,
    user: userReducer,
    form: formFReducer,
  },
});