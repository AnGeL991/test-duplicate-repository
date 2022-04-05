import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  SizeType,
  BakingType,
  DishTypes,
  ErrorMessageType,
  DishType,
  InventoryState,
} from './type';

export const initialState: InventoryState = {
  inventory: {
    steaksChops: [],
    starters: [],
    soupe: [],
    sides: [],
    onIce: [],
    mains: [],
    salads: [],
    desserts: [],
    whiteWines: [],
    redWines: [],
    bourborn: [],
  },
  loading: false,
  error: null,
};

export const inventorySlice = createSlice({
  name: 'inventory',
  initialState,
  reducers: {
    inventoryLoading: (state) => {
      state.loading = false;
    },
    inventoryData: (state, action: PayloadAction<any>) => {
      const { data } = action.payload;
    },
    inventoryError: (state) => {
      state.error = {
        error: 'Error',
        message: 'We have trouble with uploading  data',
      };
    },
  },
});

export const { inventoryData, inventoryError, inventoryLoading } =
  inventorySlice.actions;

export default inventorySlice.reducer;
