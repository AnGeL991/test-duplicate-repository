import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DishType, DishTypes } from '../inventory';

export interface UpgradeType {
  amount: number;
  id: string;
}

export interface OrderState {
  orders: DishType[] | [];
  totalPayment: number;
  loading: boolean;
  error: any;
}

export const initialState: OrderState = {
  orders: [
    {
      id: '1',
      name: 'Steak&chips',
      price: 39.95,
      image:
        'https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3RlYWt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      ingredients: ['mięso', 'test', 'awokado'],
      type: DishTypes.steaksChops,
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiasreiciendis perferendis ut nostrum ipsam quae consectetur, recusandaeillum, natus aut optio! Placeat quaerat at alias est eveniet cumqueinventore vero.',
      amount: 1,
      status: 'done',
    },
    {
      id: '1',
      name: 'Steak&chips',
      price: 59.95,
      image:
        'https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3RlYWt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      ingredients: ['mięso', 'test', 'awokado'],
      type: DishTypes.steaksChops,
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiasreiciendis perferendis ut nostrum ipsam quae consectetur, recusandaeillum, natus aut optio! Placeat quaerat at alias est eveniet cumqueinventore vero.',
      amount: 2,
      status: 'in Prepare',
    },
  ],
  totalPayment: 0,
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
      state.orders = [...state.orders, action.payload];
    },
    removeDish: (state, action: PayloadAction<DishType['id']>) => {
      const orders = state.orders.filter(({ id }) => id !== action.payload);
      state.orders = orders;
    },
    incrementAmount: (state, action: PayloadAction<UpgradeType>) => {
      const currentOrders = state.orders.map((dish) => {
        if (dish.id === action.payload.id) {
          dish.amount += action.payload.amount;
          return dish;
        }
        return dish;
      });
      state.orders = currentOrders;
    },
    decrementAmount: (state, action: PayloadAction<UpgradeType>) => {
      const currentOrders = state.orders.map((dish) => {
        if (dish.id === action.payload.id) {
          dish.amount -= action.payload.amount;
          return dish;
        }
        return dish;
      });
      state.orders = currentOrders;
    },
    countTotalPayment: (state) => {
      const orders = state.orders as DishType[];

      state.totalPayment = orders.reduce((acc: number, curr: DishType) => {
        return acc + curr.amount * curr.price;
      }, 0);
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
  countTotalPayment,
} = OrderSlice.actions;

export default OrderSlice.reducer;
