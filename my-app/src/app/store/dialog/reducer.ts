import { createSlice } from '@reduxjs/toolkit';

interface DialogState {
  registerDialog: boolean;
  loginDialog: boolean;
}

export const initialState: DialogState = {
  registerDialog: false,
  loginDialog: false,
};

export const DialogSlice = createSlice({
  name: 'dialog',
  initialState,
  reducers: {
    openLoginDialog: (state) => {
      state.loginDialog = true;
      state.registerDialog = false;
    },
    openRegisterDialog: (state) => {
      state.loginDialog = false;
      state.registerDialog = true;
    },
    closeDialog: (state) => {
      state.loginDialog = false;
      state.registerDialog = false;
    },
  },
});

export const { openRegisterDialog, closeDialog, openLoginDialog } =
  DialogSlice.actions;

export default DialogSlice.reducer;
