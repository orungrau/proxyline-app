import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ImageSourcePropType} from 'react-native';
import {PROMOTE} from '~constants';
import {CountryResponseSchema} from '~libs/proxyline-sdk/models';

export interface Promote {
  bubble: string;
  title: string;
  description: string;
  image: ImageSourcePropType;
  tariff: {
    ip_type: number;
    ip_version: number;
  };
  amount?: number;
}

export interface PriceState {
  loading: boolean;
  orderPeriods?: number[];
  promotes: Promote[];
  countries: CountryResponseSchema[];
}

const initialState: PriceState = {
  loading: false,
  promotes: PROMOTE,
  countries: [],
};

const priceSlice = createSlice({
  name: 'price',
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
      return state;
    },
    setPromote(state, action: PayloadAction<Promote[]>) {
      state.promotes = action.payload;
      return state;
    },
    setCountries(state, action: PayloadAction<CountryResponseSchema[]>) {
      state.countries = action.payload;
      return state;
    },
    setOrderPeriods(state, action: PayloadAction<number[]>) {
      state.orderPeriods = action.payload;
      return state;
    },
  },
});

export const {setLoading, setPromote, setOrderPeriods, setCountries} =
  priceSlice.actions;

export default priceSlice.reducer;
