import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface GlobalState {
  loading: boolean;
  tabBarShow: boolean;
  wakeupMatrix: number;
}

const initialState: GlobalState = {
  loading: false,
  tabBarShow: true,
  wakeupMatrix: 0,
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
      return state;
    },
    updateWakeMatrix(state) {
      state.wakeupMatrix = state.wakeupMatrix + 1;
      return state;
    },
    setTabBarShow(state, action: PayloadAction<boolean>) {
      state.tabBarShow = action.payload;
      return state;
    },
  },
});

export const {setLoading, setTabBarShow, updateWakeMatrix} =
  globalSlice.actions;

export default globalSlice.reducer;
