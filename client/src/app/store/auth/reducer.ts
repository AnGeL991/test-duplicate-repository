import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserReduxProcess } from "./authLogic";

export interface AuthState {
  token: string;
  isAuthenticated: boolean;
  loading: boolean;
  error: any;
  user: any;
  orders: any;
  payments: any;
  reviews: any;
}

export const initialState: AuthState = {
  token: "",
  isAuthenticated: false,
  loading: false,
  error: {},
  user: {},
  orders: [],
  payments: [],
  reviews: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLoading: (state, action: PayloadAction<boolean>) => {
      UserReduxProcess.userLoading(state, action);
    },
    userLoaded: (state, action: PayloadAction<AuthState["user"]>) => {
      UserReduxProcess.userLoaded(state, action);
    },
    setToken: (state, action: PayloadAction<string>) => {
      UserReduxProcess.setToken(state, action);
    },
    setUser: (state) => {
      UserReduxProcess.setUser(state);
    },
    loginRequest: (state) => {
      UserReduxProcess.loginRequest(state);
    },
    loginSuccess: (state) => {
      UserReduxProcess.loginSuccess(state);
    },
    logOut: (state) => {
      UserReduxProcess.logOut(state);
    },
  },
});

export const {
  logOut,
  userLoading,
  setToken,
  loginRequest,
  loginSuccess,
  userLoaded,
  setUser,
} = authSlice.actions;

export default authSlice.reducer;
