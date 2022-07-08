import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface CountryInfo {
  ip: string;
  country: string;
  countryTag: string;
}

export interface DashboardState {
  loading: boolean;
  country?: CountryInfo;
  selectProxyId?: number;
}

const initialState: DashboardState = {
  loading: false,
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
      return state;
    },
    setSelectProxyId(state, action: PayloadAction<number>) {
      state.selectProxyId = action.payload;
      return state;
    },
    setCountry(state, action: PayloadAction<CountryInfo>) {
      state.country = action.payload;
      return state;
    },
  },
});

export const {setLoading, setCountry, setSelectProxyId} =
  dashboardSlice.actions;

export default dashboardSlice.reducer;
