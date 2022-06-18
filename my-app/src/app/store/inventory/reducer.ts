import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InventoryState } from "./type";

export const initialState: InventoryState = {
  inventory: [],
  loading: false,
  error: null,
};

export const inventorySlice = createSlice({
  name: "inventory",
  initialState,
  reducers: {
    inventoryLoading: (state) => {
      state.loading = false;
    },
    setInventoryData: (state, action: PayloadAction<any>) => {
      state.inventory = action.payload;
    },
    inventoryError: (state) => {
      state.error = {
        error: "Error",
        message: "We have trouble with uploading data",
      };
    },
  },
});

export const { setInventoryData, inventoryError, inventoryLoading } =
  inventorySlice.actions;

export default inventorySlice.reducer;
