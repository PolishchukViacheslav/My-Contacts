import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getContacts = createAsyncThunk(
  'contacts/getContacts', 
  async (endpoint, { dispatch }) => {
    const fetchPromise = await fetch(endpoint);
    const { results } = await fetchPromise.json();
    dispatch(setDefaultValue(results))
    return results;
    } 
);

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    defaultValue: [],
    value: [],
  },
  reducers: {
    setDefaultValue: (state, action) => {
      state.defaultValue = action.payload
    },
    setContacts: (state, action) => {
      state.value = [...action.payload]
    },
  },
  extraReducers: {
    [getContacts.fulfilled]: (state, action) => {
      return {
        ...state,
        value: action.payload,
      }
    }
  }
});

export const { setDefaultValue, setContacts } = contactsSlice.actions;



export const selectContacts = state => state.contacts.value;
export default contactsSlice.reducer;