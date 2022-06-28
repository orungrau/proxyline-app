import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import ProxyLineSDK from '~libs/proxyline-sdk';

export interface AccountState {
  isAuth: boolean;
  userId?: string;
  token?: string;
}

const initialState: AccountState = {
  isAuth: false,
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setAuth(state, action: PayloadAction<{userId: string; token: string}>) {
      state.isAuth = true;
      state.userId = action.payload.userId;
      state.token = action.payload.token;
      ProxyLineSDK.setToken(state.userId + ':' + state.token);
      return state;
    },
    logout() {
      ProxyLineSDK.setToken(undefined);
      return initialState;
    },
  },
});

export const {setAuth, logout} = accountSlice.actions;

export default accountSlice.reducer;
