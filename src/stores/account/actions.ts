import {AppThunk} from '~stores';
import {setAuth, logout} from '~stores/account/index';

export const setAuthAction =
  (userId: string, token: string): AppThunk =>
  async dispatch => {
    dispatch(setAuth({userId, token}));
  };

export const logoutAction = (): AppThunk => async dispatch => {
  dispatch(logout());
};
