// import { createSlice } from '@reduxjs/toolkit';

// export const counterSlice = createSlice({
//   name: 'counter',
//   initialState: {
//     value: 0,
//   },
//   reducers: {
//     increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
//       state.value += 1;
//     },
//     decrement: state => {
//       state.value -= 1;
//     },
//     incrementByAmount: (state, action) => {
//       state.value += action.payload;
//     },
//   },
// });

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = amount => dispatch => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
// export const selectCount = state => state.counter.value;

// export default counterSlice.reducer;

//____________________________-----------______________________________________________

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getContacts = createAsyncThunk('contacts/getContacts', async (endpoint) => {
  const fetchPromise = await fetch(endpoint);
  const { results } = await fetchPromise.json();
  return results;
  } 
);

const isUser = localStorage.hasOwnProperty('user');

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    isUser,
    value: [],
  },
  reducers: {
    setContacts: (state, action) => {
      state.value = [...action.payload]
    },
    setIsUser: (state, action) => {
      state.isUser = action.payload
    }
  },
  extraReducers: {
    [getContacts.fulfilled]: (state, action) => {
      state.value = [...action.payload]
    }
  }
});

export const { setContacts, setIsUser } = contactsSlice.actions;



export const selectContacts = state => state.contacts.value;
export const selectIsUser = state => state.contacts.isUser;
export default contactsSlice.reducer;