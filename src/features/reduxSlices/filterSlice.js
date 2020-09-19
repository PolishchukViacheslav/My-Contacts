import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    preparedContacts: null,
    activeName: null,
    activeNat: null,
    activeGender: null,
    isContactsWereUpdated: false,
  },
  reducers: {
    setDefaultFilteredContacts: (state, action) => {
      return {
      ...state,
      preparedContacts: [...action.payload],
      }
    },
    setActiveNat: (state, action) => {
      return {
        ...state,
        activeNat: action.payload,
      }
    },
    setActiveGender: (state, action) => {
      return {
        ...state,
        activeGender: action.payload,
      }
    },
    setActiveName: (state, action) => {
      return {
        ...state,
        activeName: action.payload,
      }
    },
    setIsContactsWereUpdated: (state, action) => {
      return {
        ...state,
        isContactsWereUpdated: action.payload,
      }
    }
  }
});

export const { setIsContactsWereUpdated, setActiveName, setActiveGender, setActiveNat, setDefaultFilteredContacts } = filterSlice.actions;



export const selectPreparedContacts = state => state.filters?.preparedContacts;
export const selectNationalities = state => state.filters.nationalitiesList;
export const selectActiveNat = state => state.filters.activeNat;
export const selectActiveName = state => state.filters.activeName;
export const selectActiveGender = state => state.filters.activeGender;
export const selectIsContactsUpdated = state => state.filters.isContactsWereUpdated;
export default filterSlice.reducer;