import { configureStore } from '@reduxjs/toolkit';

import InventoryReducer from './inventory/reducer';
import PaymentReducer from './payment/reducer';
import AuthReducer from './auth/reducer';
import NotificationsReducer from './notifications/reducer';
import OrderReducer from './order/reducer';

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: {
    inventory: InventoryReducer,
    auth: AuthReducer,
    notifications: NotificationsReducer,
    orders: OrderReducer,
    payment: PaymentReducer,
  },
});
