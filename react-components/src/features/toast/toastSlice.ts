import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Notification } from '../../mock/notifications';

export interface ToastState {
  toastList: Notification[];
  autoClose: ReturnType<typeof setTimeout> | null;
}

const initialState: ToastState = {
  toastList: [],
  autoClose: null,
};

export const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    showSuccess: (state) => {
      const id = Math.floor(Math.random() * 100 + 1);
      const toastProperties = {
        id,
        title: 'Success',
        description: 'Form was successfully submitted',
        backgroundColor: 'rgb(0 225 0)',
      };
      state.toastList.push(toastProperties);
    },
    showError: (state) => {
      const id = Math.floor(Math.random() * 100 + 1);
      const toastProperties = {
        id,
        title: 'Error',
        description: 'Form was not submitted',
        backgroundColor: '#d9534f',
      };
      state.toastList.push(toastProperties);
    },
    closeToast: (state, action: PayloadAction<number>) => {
      state.toastList = state.toastList.filter((i) => i.id !== action.payload);
    },
  },
});

export const { showSuccess, showError, closeToast } = toastSlice.actions;

export default toastSlice.reducer;
