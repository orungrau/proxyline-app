import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {OrderResponseSchema} from '~libs/proxyline-sdk/models';

export interface PriceState {
  orders: OrderResponseSchema[];
}

const initialState: PriceState = {
  orders: [],
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    setOrders(state, action: PayloadAction<OrderResponseSchema[]>) {
      state.orders = action.payload;
      return state;
    },
  },
});

export const {setOrders} = ordersSlice.actions;

export default ordersSlice.reducer;
