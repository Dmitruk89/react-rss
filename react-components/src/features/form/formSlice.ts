import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { formData } from 'types/formData';

export interface FormState {
  users: formData[];
}

const initialState: FormState = {
  users: [],
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<formData | null>) => {
      if (action.payload) {
        state.users.push(action.payload);
      }
    },
  },
});

export const { addUser } = formSlice.actions;

export default formSlice.reducer;
