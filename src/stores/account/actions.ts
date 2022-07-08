import {AppThunk} from '~stores';
import {setAuth, logout, setPassword, setWallet} from '~stores/account/index';
import ProxyLineSDK from '~libs/proxyline-sdk';
import {updateWakeMatrix} from '~stores/global';

export const setAuthAction =
  (userId: string, token: string, email: string, password: string): AppThunk =>
  async dispatch => {
    dispatch(setAuth({userId, token, email, password}));
  };

export const setPasswordAction =
  (password: string): AppThunk =>
  async dispatch => {
    dispatch(setPassword(password));
  };

export const fetchAccountData = (): AppThunk => async dispatch => {
  ProxyLineSDK.account
    .getBalance()
    .then(r => dispatch(setWallet(r)))
    .finally(() => dispatch(updateWakeMatrix()));
};

export const refreshIpData = (): AppThunk => async _ => {
  // dispatch(logout());
};

export const refreshAccountData = (): AppThunk => async _ => {
  // dispatch(logout());
};

export const logoutAction = (): AppThunk => async dispatch => {
  dispatch(logout());
};
