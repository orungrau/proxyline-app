import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface CountryInfo {
  ip: string;
  country: string;
  countryTag: string;
}

export interface DashboardState {
  loading: boolean;
  country?: CountryInfo;
}

const initialState: DashboardState = {
  loading: true,
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
      return state;
    },
    setCountry(state, action: PayloadAction<CountryInfo>) {
      state.country = action.payload;
      return state;
    },
  },
});

export const {setLoading, setCountry} = dashboardSlice.actions;

export default dashboardSlice.reducer;
