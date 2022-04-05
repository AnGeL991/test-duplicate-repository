import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DishType } from '../inventory';

export interface UpgradeType {
  amount: number;
  id: string;
}

export interface OrderState {
  order: DishType[] | [];
  loading: boolean;
  error: any;
}

export const initialState: OrderState = {
  order: [],
  loading: false,
  error: null,
};

export const OrderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    orderLoading: (state) => {
      state.loading = true;
    },
    orderData: (state, action: PayloadAction<any>) => {
      const { data } = action.payload;
    },
    addDish: (state, action: PayloadAction<DishType>) => {
      state.order = [...state.order, action.payload];
    },
    removeDish: (state, action: PayloadAction<DishType['id']>) => {
      const orders = state.order.filter(({ id }) => id !== action.payload);
      state.order = orders;
    },
    incrementAmount: (state, action: PayloadAction<UpgradeType>) => {
      const currentOrders = state.order.map((dish) => {
        if (dish.id === action.payload.id) {
          dish.amount += action.payload.amount;
          return dish;
        }
        return dish;
      });
      state.order = currentOrders;
    },
    decrementAmount: (state, action: PayloadAction<UpgradeType>) => {
      const currentOrders = state.order.map((dish) => {
        if (dish.id === action.payload.id) {
          dish.amount -= action.payload.amount;
          return dish;
        }
        return dish;
      });
      state.order = currentOrders;
    },
  },
});

export const {
  orderLoading,
  orderData,
  decrementAmount,
  incrementAmount,
  removeDish,
  addDish,
} = OrderSlice.actions;

export default OrderSlice.reducer;
