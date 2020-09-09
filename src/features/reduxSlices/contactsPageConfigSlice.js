import { createSlice } from '@reduxjs/toolkit';

export const contactsPageConfigSlice = createSlice({
  name: 'contactsPageConfig',
  initialState: {
    stringifyMode: false,
  },
  reducers: {
    setStringifyMode: (state, action) => {
      state.stringifyMode = action.payload
    },
  },
});

export const { setStringifyMode } = contactsPageConfigSlice.actions;



export const selectStringifyMode = state => state.contactsPageConfig.stringifyMode;
export default contactsPageConfigSlice.reducer;