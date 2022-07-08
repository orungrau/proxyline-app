import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ProxyResponseSchema} from '~libs/proxyline-sdk/models';

export interface ProxyState {
  loading: boolean;
  proxies: ProxyResponseSchema[];
}

const initialState: ProxyState = {
  loading: false,
  proxies: [],
};

const proxySlice = createSlice({
  name: 'proxy',
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
      return state;
    },
    setProxies(state, action: PayloadAction<ProxyResponseSchema[]>) {
      state.proxies = action.payload;
      return state;
    },
  },
});

export const {setLoading, setProxies} = proxySlice.actions;

export default proxySlice.reducer;
