import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DishType, DishTypes } from '../inventory';

interface paymentDetails {
  email: string;
}

interface PaymentState {
  orders: DishType[] | [];
  details: paymentDetails;
  paymentId: string;
  tip: number;
  totalPayment: number;
  discount: number;
}

const initialState: PaymentState = {
  orders: [],
  details: {
    email: '',
  },
  paymentId: '',
  totalPayment: 0,
  tip: 0,
  discount: 0,
};

export const PaymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    preparePayment: (state, action: PayloadAction<DishType[]>) => {
      const orders = action.payload;
      state.orders = orders;
      state.totalPayment = state.totalPayment = orders.reduce(
        (acc: number, curr: DishType) => {
          return acc + curr.amount * curr.price;
        },
        0
      );
    },
    addTip: (state, action: PayloadAction<number>) => {
      state.tip = action.payload;
    },
    addDiscount: (state, action: PayloadAction<number>) => {
      state.discount = action.payload;
    },
  },
});

export const { preparePayment, addTip, addDiscount } = PaymentSlice.actions;

export default PaymentSlice.reducer;
