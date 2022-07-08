import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface NewOrderState {
  loading: boolean;
  count: number;
  periodValue: number;
  promoteIndex: number;
  countryIndex: number;
}

const initialState: NewOrderState = {
  loading: false,
  count: 1,
  periodValue: 0,
  promoteIndex: 0,
  countryIndex: 0,
};

const newOrderSlice = createSlice({
  name: 'newOrder',
  initialState,
  reducers: {
    setCount(state, action: PayloadAction<number>) {
      state.count = action.payload;
      return state;
    },
    setPeriodValue(state, action: PayloadAction<number>) {
      state.periodValue = action.payload;
      return state;
    },
    setPromoteIndex(state, action: PayloadAction<number>) {
      state.promoteIndex = action.payload;
      return state;
    },
    setCountryIndex(state, action: PayloadAction<number>) {
      state.countryIndex = action.payload;
      return state;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
      return state;
    },
    reset() {
      return initialState;
    },
  },
});

export const {
  setLoading,
  setCountryIndex,
  setPromoteIndex,
  setCount,
  setPeriodValue,
  reset,
} = newOrderSlice.actions;

export default newOrderSlice.reducer;
