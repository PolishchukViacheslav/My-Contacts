import { createSlice } from '@reduxjs/toolkit';

export const paginationSlice = createSlice({
  name: 'paginationSlice',
  initialState: {
    prepContSlice: [],
    perPage: 12,
    pagesCount: 0,
  },
  reducers: {
    setPrepContSlice: (state, action) => {

      return {
        ...state,
        prepContSlice: [...action.payload],
      };
    },
    setPerPage: (state, action) => {
      state.perPage = action.payload
    },
    setPagesCount: (state, action) => {
      state.pagesCount = action.payload
    },
  },
});

export const { setPrepContSlice, setPerPage, setPagesCount } = paginationSlice.actions;



export const selectPrepContSlice = state => state.pagination.prepContSlice;
export const selectPerPage = state => state.pagination.perPage;
export const selectPagesCount = state => state.pagination.pagesCount;

export default paginationSlice.reducer;