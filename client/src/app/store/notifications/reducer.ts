import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Status = 'error' | 'info' | 'success';

interface Notification {
  id: string;
  status: Status;
  time: string;
  message: string;
  readed: boolean;
}

export interface NotificationState {
  notifications: Notification[] | [];
  unReadedCount: number;
  message: string;
  type: Status | undefined;
}

export const initialState: NotificationState = {
  notifications: [
    {
      id: '1',
      status: 'error',
      time: '5 min ago',
      message: 'test',
      readed: false,
    },
    {
      id: '2',
      status: 'success',
      time: '5 min ago',
      message: 'test-2',
      readed: false,
    },
  ],
  unReadedCount: 0,
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
    setUnReadCount: (state) => {
      state.unReadedCount = state.notifications.filter(
        (notification) => !notification.readed
      ).length;
    },
    setReadedNotification: (state, action: PayloadAction<string>) => {
      state.notifications = state.notifications.map((notifications) => {
        if (notifications.id === action.payload) {
          notifications.readed = true;
        }
        return notifications;
      });
    },
  },
});

export const {
  setNotifications,
  clearNotifications,
  setUnReadCount,
  setReadedNotification,
} = NotificationSlice.actions;

export default NotificationSlice.reducer;
