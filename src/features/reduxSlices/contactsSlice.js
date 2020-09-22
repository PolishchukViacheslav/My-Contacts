import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { natMap } from '../iso2NatMap';

export const getContacts = createAsyncThunk(
  'contacts/getContacts', 
  async (endpoint, { dispatch }) => {
    const fetchPromise = await fetch(endpoint);
    const { results } = await fetchPromise.json();
    const statistic = {
      collectionSize: results.length,
      males: 0,
      females: 0,
      indeterminate: 0,
      predominate: '',
      nationalities: {},
    };

    results.forEach(({ gender, nat }) => {

      statistic.nationalities.hasOwnProperty(natMap[nat]) ? statistic.nationalities[natMap[nat]]++ : statistic.nationalities[natMap[nat]] = 1;

      if (gender === 'male') {
        statistic.males++;
      }

      if (gender === 'female') {
        statistic.females++;
      }

      if (gender === 'indeterminate') {
        statistic.indeterminate++;
      }

    });

    statistic.predominate = +statistic.males > +statistic.females ? 'male' : +statistic.males < +statistic.females ? 'female' : 'friend';

    dispatch(setDefaultValue(results));
    dispatch(setInitialStat(statistic));

    return results;
    } 
);

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    defaultValue: [],
    value: [],
    initialStat: {},
    isLoading: false,
  },
  reducers: {
    setDefaultValue: (state, action) => {

      state.defaultValue = action.payload
      
    },
    setContacts: (state, action) => {

      state.value = [...action.payload]

    },
    setInitialStat: (state, action) => {

      state.initialStat = action.payload;

    }
  },
  extraReducers: {
    [getContacts.fulfilled]: (state, action) => {
      return {
        ...state,
        value: action.payload,
        isLoading: false,
      }
    },
    [getContacts.pending]: (state) => {
      state.isLoading = true;
    },
    [getContacts.rejected]: (state) => {
      state.isLoading = false;
    },

  }
});

export const { setInitialStat, setDefaultValue, setContacts } = contactsSlice.actions;



export const selectContacts = state => state.contacts.value;
export const selectInitialStat = state => state.contacts.initialStat;
export const selectIsLoading = state => state.contacts.isLoading;
export default contactsSlice.reducer;