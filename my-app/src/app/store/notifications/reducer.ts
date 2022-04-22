import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ErrorType = 'error' | 'info' | 'success';

export interface NotificationState {
  message: string;
  type: ErrorType | undefined;
}

export const initialState: NotificationState = {
  message: '',
  type: undefined,
};

export const NotificationSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    setNotifications: (state, action: PayloadAction<NotificationState>) => {
      state = action.payload;
    },
    clearNotifications: (state) => {
      state = initialState;
    },
  },
});

export const { setNotifications, clearNotifications } =
  NotificationSlice.actions;

export default NotificationSlice.reducer;
