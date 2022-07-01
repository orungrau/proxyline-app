import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface GlobalState {
  loading: boolean;
  tabBarShow: boolean;
}

const initialState: GlobalState = {
  loading: false,
  tabBarShow: true,
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
      return state;
    },
    setTabBarShow(state, action: PayloadAction<boolean>) {
      state.tabBarShow = action.payload;
      return state;
    },
  },
});

export const {setLoading, setTabBarShow} = globalSlice.actions;

export default globalSlice.reducer;
