import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Status = "success" | "error" | "pending";

interface PanelState {
  open: boolean;
  loading: boolean;
  massage: string;
  status: Status;
}

export const initialState: PanelState = {
  open: false,
  loading: false,
  massage: "loading...",
  status: "success",
};

export const PanelSlice = createSlice({
  name: "panel",
  initialState,
  reducers: {
    setStatus: (state, action: PayloadAction<Status>) => {
      state.status = action.payload;
    },
    setMessage: (state, action: PayloadAction<string>) => {
      state.massage = action.payload;
    },
    toggleModal: (state, action: PayloadAction<boolean>) => {
      state.open = action.payload;
    },
    setLoading: (state) => {
      state.loading = true;
    },
    closeLoading: (state) => {
      state.loading = false;
    },
  },
});

export const { setLoading, closeLoading, setStatus, setMessage, toggleModal } =
  PanelSlice.actions;

export default PanelSlice.reducer;
