import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import ProxyLineSDK from '~libs/proxyline-sdk';

export interface Wallet {
  balance: number;
  partner_balance: number;
}

export interface AccountState {
  isAuth: boolean;
  userId?: string;
  token?: string;
  email?: string;
  password?: string;
  wallet?: Wallet;
}

const initialState: AccountState = {
  isAuth: false,
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setAuth(
      state,
      action: PayloadAction<{
        userId: string;
        token: string;
        email: string;
        password: string;
      }>,
    ) {
      state.isAuth = true;
      state.userId = action.payload.userId;
      state.token = action.payload.token;
      state.email = action.payload.email;
      state.password = action.payload.password;
      ProxyLineSDK.setToken(state.userId + ':' + state.token);
      return state;
    },
    setPassword(state, action: PayloadAction<string>) {
      state.password = action.payload;
      return state;
    },
    setWallet(state, action: PayloadAction<Wallet>) {
      state.wallet = action.payload;
      return state;
    },
    logout() {
      ProxyLineSDK.setToken(undefined);
      return initialState;
    },
  },
});

export const {setAuth, logout, setPassword, setWallet} = accountSlice.actions;

export default accountSlice.reducer;
