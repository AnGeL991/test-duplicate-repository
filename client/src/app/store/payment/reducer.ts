import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DishType } from "../inventory";

interface paymentDetails {
  email: string;
}

interface PaymentState {
  dishes: DishType[] | [];
  details: paymentDetails;
  paymentId: string;
  tip: number;
  paymentMethod: string;
  totalPayment: number;
  discount: number;
}

const initialState: PaymentState = {
  dishes: [],
  details: {
    email: "",
  },
  paymentMethod: "",
  paymentId: "",
  totalPayment: 0,
  tip: 0,
  discount: 0,
};

export const PaymentSlice = createSlice({
  name: "payment",
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
    addDiscount: (state, action: PayloadAction<string>) => {
      if (action.payload === "rabat") {
        state.discount = 100;
      }
    },
    setPaymentMethod: (state, action: PayloadAction<string>) => {
      state.paymentMethod = action.payload;
    },
  },
});

export const { preparePayment, addTip, addDiscount, setPaymentMethod } =
  PaymentSlice.actions;

export default PaymentSlice.reducer;
