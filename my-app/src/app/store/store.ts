import { configureStore } from '@reduxjs/toolkit';

import InventoryReducer from './inventory/reducer';
import AuthReducer from './auth/reducer';
import NotificationsReducer from './notifications/reducer';

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: {
    inventory: InventoryReducer,
    auth: AuthReducer,
    notifications: NotificationsReducer,
  },
});
