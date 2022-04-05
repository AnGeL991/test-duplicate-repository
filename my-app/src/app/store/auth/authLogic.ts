import { AuthState } from './reducer';
import { PayloadAction } from '@reduxjs/toolkit';

export class UserReduxProcess {
  static userLoading(state: AuthState, action: PayloadAction<boolean>) {
    state.loading = action.payload;
  }
  static userLoaded(
    state: AuthState,
    action: PayloadAction<AuthState['user']>
  ) {
    state.user = action.payload;
  }
  static setToken(state: AuthState, action: PayloadAction<string>) {
    state.token = action.payload;
  }
  static loginRequest(state: AuthState) {
    state.loading = true;
  }
  static loginSuccess(state: AuthState) {
    state.loading = false;
    state.isAuthenticated = true;
    state.error = null;
  }
  static logOut(state: AuthState) {
    state.token = '';
    state.isAuthenticated = false;
    state.user = {};
    state.orders = [];
    state.payments = [];
    state.reviews = [];
  }
}
