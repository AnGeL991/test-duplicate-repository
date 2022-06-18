import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DishType } from "../inventory";

export interface UpgradeType {
  amount: number;
  id: string;
}

export interface OrderState {
  orders: DishType[] | [];
  placedOrders: DishType[] | [];
  ordersCount: number;
  totalPayment: number;
  loading: boolean;
  error: any;
}

export const initialState: OrderState = {
  orders: [],
  placedOrders: [],
  ordersCount: 0,
  totalPayment: 0,
  loading: false,
  error: null,
};

export const OrderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    orderLoading: (state) => {
      state.loading = true;
    },
    addDish: (state, action: PayloadAction<DishType>) => {
      const exist = state.orders.find(
        (order) => order.id === action.payload.id
      );
      if (exist) {
        state.orders = state.orders.map((order) => {
          if (order.id === action.payload.id) {
            order.amount += 1;
            return order;
          }
          return order;
        });
      } else {
        state.orders = [...state.orders, action.payload];
      }
    },
    removeDish: (state, action: PayloadAction<DishType["id"]>) => {
      const orders = state.orders.filter(({ id }) => id !== action.payload);
      state.orders = orders;
    },
    incrementAmount: (state, action: PayloadAction<UpgradeType>) => {
      const currentOrders = state.orders.map((dish) => {
        if (dish.id === action.payload.id) {
          dish.amount += 1;
          return dish;
        }
        return dish;
      });
      state.orders = currentOrders;
    },
    decrementAmount: (state, action: PayloadAction<UpgradeType>) => {
      const currentOrders = state.orders.map((dish) => {
        if (dish.id === action.payload.id && dish.amount > 1) {
          dish.amount -= 1;
          return dish;
        }
        return dish;
      });
      state.orders = currentOrders;
    },
    setPlacedOrder: (state) => {
      state.placedOrders = [...state.placedOrders, ...state.orders];
      state.orders = [];
      const palcedOrders = state.placedOrders as DishType[];
      state.totalPayment = palcedOrders.reduce(
        (acc: number, curr: DishType) => {
          return acc + curr.amount * curr.price;
        },
        0
      );
    },
    countTotalPayment: (state) => {
      const palcedOrders = state.placedOrders as DishType[];
      state.totalPayment = palcedOrders.reduce(
        (acc: number, curr: DishType) => {
          return acc + curr.amount * curr.price;
        },
        0
      );
    },
    setOrdersCount: (state) => {
      state.ordersCount = state.orders.length;
    },
  },
});

export const {
  orderLoading,
  decrementAmount,
  incrementAmount,
  removeDish,
  addDish,
  countTotalPayment,
  setOrdersCount,
  setPlacedOrder,
} = OrderSlice.actions;

export default OrderSlice.reducer;
