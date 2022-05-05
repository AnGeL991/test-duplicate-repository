import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Status = 'success' | 'error' | 'pending';

interface PanelState {
  open: boolean;
  loading: boolean;
  massage: string;
  status: Status;
}

export const initialState: PanelState = {
  open: false,
  loading: false,
  massage: 'loading...',
  status: 'success',
};

export const PanelSlice = createSlice({
  name: 'panel',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setStatus: (state, action: PayloadAction<Status>) => {
      state.status = action.payload;
    },
    setMessage: (state, action: PayloadAction<string>) => {
      state.massage = action.payload;
    },
    toggleModal: (state, action: PayloadAction<boolean>) => {
      state.open = action.payload;
    },
  },
});

export const { setLoading, setStatus, setMessage, toggleModal } =
  PanelSlice.actions;

export default PanelSlice.reducer;
