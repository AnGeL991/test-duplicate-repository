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
      const secializeState = JSON.stringify(state.orders);
      localStorage.setItem("order", secializeState);
    },
    removeDish: (state, action: PayloadAction<DishType["id"]>) => {
      const orders = state.orders.filter(({ id }) => id !== action.payload);
      state.orders = orders;
      const secializeState = JSON.stringify(state.orders);
      localStorage.setItem("order", secializeState);
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
      const secializeState = JSON.stringify(state.orders);
      localStorage.setItem("order", secializeState);
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
      const secializeState = JSON.stringify(state.orders);
      localStorage.setItem("order", secializeState);
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
      const secializeStateOrder = JSON.stringify(state.orders);
      localStorage.setItem("order", secializeStateOrder);
      const secializeState = JSON.stringify(palcedOrders);
      localStorage.setItem("placedOrder", secializeState);
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
    setOrdersFromLocalStorage: (state) => {
      const orders = localStorage.getItem("order");
      if (orders) {
        state.orders = JSON.parse(orders);
      }
    },
    setPlacedOrderFromLocalStorage: (state) => {
      const placedOrder = localStorage.getItem("placedOrder");
      if (placedOrder) {
        state.placedOrders = JSON.parse(placedOrder);
      }
    },
    setInitialState: (state) => {
      state.orders = initialState.orders;
      state.placedOrders = initialState.placedOrders;
      state.totalPayment = initialState.totalPayment;
      localStorage.removeItem("placedOrder");
      localStorage.removeItem("order");
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
  setOrdersFromLocalStorage,
  setPlacedOrderFromLocalStorage,
  setInitialState,
} = OrderSlice.actions;

export default OrderSlice.reducer;
