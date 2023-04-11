import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SearchState {
  value: string;
}

const initialState: SearchState = {
  value: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    save: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { save } = searchSlice.actions;

export default searchSlice.reducer;
