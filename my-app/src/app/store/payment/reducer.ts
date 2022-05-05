import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DishType } from '../inventory';

interface paymentDetails {
  email: string;
}

interface PaymentState {
  dishes: DishType[] | [];
  details: paymentDetails;
  paymentId: string;
  tip: number;
  totalPayment: number;
  discount: number;
}

const initialState: PaymentState = {
  dishes: [
    {
      id: '1',
      name: 'Steak&Chips',
      price: 35.55,
      image:
        'https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3RlYWt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      ingredients: [],
      type: 'steaksChops',
      amount: 1,
      status: 'done',
    },
    {
      id: '2',
      name: 'Steak&Chips',
      price: 35.55,
      image:
        'https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3RlYWt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      ingredients: [],
      type: 'steaksChops',
      amount: 1,
      status: 'done',
    },
  ],
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
      const dishes = action.payload;
      state.dishes = dishes;
      state.totalPayment = state.totalPayment = dishes.reduce(
        (acc: number, curr: DishType) => {
          return acc + curr.amount * curr.price;
        },
        0
      );
    },
    addTip: (state, action: PayloadAction<number>) => {
      state.tip = Number(action.payload);
    },
    addDiscount: (state, action: PayloadAction<number>) => {
      console.log(action.payload);
      state.discount = Number(action.payload);
    },
  },
});

export const { preparePayment, addTip, addDiscount } = PaymentSlice.actions;

export default PaymentSlice.reducer;
