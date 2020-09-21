import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    preparedContacts: null,
    activeName: null,
    activeNat: null,
    activeGender: null,
    isContactsWereUpdated: false,
    sortType: 'default',
    statistic: {
      collectionSize: '',
      males: 0,
      females: 0,
      indeterminate: 0,
      predominate: '',
      nationalities: {},
    },
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
    },
    setSortType: (state, action) => {
      return {
        ...state,
        sortType: action.payload,
      }
    },
    setStatistic: (state, action) => {
      
      state.statistic = action.payload

    }
  }
});

export const {
  setSortType,
  setIsContactsWereUpdated,
  setActiveName,
  setActiveGender,
  setActiveNat,
  setDefaultFilteredContacts,
  setStatistic,
  } = filterSlice.actions;



export const selectPreparedContacts = state => state.filters.preparedContacts;
export const selectNationalities = state => state.filters.nationalitiesList;
export const selectActiveNat = state => state.filters.activeNat;
export const selectActiveName = state => state.filters.activeName;
export const selectActiveGender = state => state.filters.activeGender;
export const selectIsContactsUpdated = state => state.filters.isContactsWereUpdated;
export const selectSortType = state => state.filters.sortType;
export const selectStatistic = state => state.filters.statistic;

export default filterSlice.reducer;