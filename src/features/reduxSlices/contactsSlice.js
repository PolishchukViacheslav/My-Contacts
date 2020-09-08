import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getContacts = createAsyncThunk('contacts/getContacts', async (endpoint) => {
  const fetchPromise = await fetch(endpoint);
  const { results } = await fetchPromise.json();
  return results;
  } 
);

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    value: [],
  },
  reducers: {
    setContacts: (state, action) => {
      state.value = [...action.payload]
    },
  },
  extraReducers: {
    [getContacts.fulfilled]: (state, action) => {
      state.value = [...action.payload]
    }
  }
});

export const { setContacts } = contactsSlice.actions;



export const selectContacts = state => state.contacts.value;
export default contactsSlice.reducer;