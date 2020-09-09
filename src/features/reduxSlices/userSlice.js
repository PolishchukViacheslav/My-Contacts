import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getUser = createAsyncThunk('user/getUser', async (endpoint) => {
  const fetchPromise = await fetch(endpoint);
  const { results } = await fetchPromise.json();
  return results;
  } 
);

// const isUser = localStorage.hasOwnProperty('user');
// console.log('Store', typeof isUser);

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isUser: true,
    info: null,
  },
  reducers: {
    setUser: (state, action) => {
      return {...state,
      info: action.payload,
      }
    },
    setIsUser: (state, action) => {
      return {
        ...state,
        isUser: action.payload,
      }
    }
  },
  extraReducers: {
    [getUser.fulfilled]: (state, action) => {
      state.info = action.payload[0]
    }
  }
});

export const { setUser, setIsUser } = userSlice.actions;



export const selectUser = state => state.user.info;
export const selectIsUser = state => state.user.isUser;
export default userSlice.reducer;