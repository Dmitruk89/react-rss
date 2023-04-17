import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SearchState {
  queryValue: string;
  searchInputvalue: string;
}

const initialState: SearchState = {
  queryValue: '',
  searchInputvalue: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    query: (state, action: PayloadAction<string>) => {
      state.queryValue = action.payload;
    },
    inputChange: (state, action: PayloadAction<string>) => {
      state.searchInputvalue = action.payload;
    },
  },
});

export const { query, inputChange } = searchSlice.actions;

export default searchSlice.reducer;
