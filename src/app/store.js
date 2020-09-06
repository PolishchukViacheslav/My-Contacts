import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from '../features/contacts/contactsSlice';
import { reducer as formFReducer } from 'redux-form';

export default configureStore({
  reducer: {
    contacts: contactsReducer,
    form: formFReducer,
  },
});
