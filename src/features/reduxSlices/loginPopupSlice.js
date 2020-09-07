import { createSlice } from '@reduxjs/toolkit';

export const loginPopupSlice = createSlice({
  name: 'loginPopup',
  initialState: {
    value: false,
  },
  reducers: {
    setVisibility: (state, action) => {
      state.value = action.payload
    },
  },
});

export const { setVisibility } = loginPopupSlice.actions;



export const selectPopupVisibility = state => state.loginPopup.value;
export default loginPopupSlice.reducer;