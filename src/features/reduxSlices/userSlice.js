import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getUser = createAsyncThunk('user/getUser', async (endpoint) => {
  const fetchPromise = await fetch(endpoint);
  console.log('res', fetchPromise);
  const { results } = await fetchPromise.json();
  return results;
  } 
);

const isUser = localStorage.hasOwnProperty('user');

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isUser,
    info: null,
    isLoading: false,
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
        isLoading: false,
      }
    }
  },
  extraReducers: {
    [getUser.fulfilled]: (state, action) => {
      return {
        ...state,
        info: action.payload[0],
        isLoading: false,
      }
    },
    [getUser.pending]: (state) => {
      state.isLoading = true;
    },
    [getUser.rejected]: (state) => {
      state.isLoading = false;
    },
  }
});

export const { setUser, setIsUser } = userSlice.actions;



export const selectUser = state => state.user.info;
export const selectIsUser = state => state.user.isUser;
export const selectIsLoading = state => state.user.isLoading;
export default userSlice.reducer;