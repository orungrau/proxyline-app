import {AppThunk} from '~stores';
import {setAuth, logout, setPassword, setWallet} from '~stores/account/index';
import {setGlobalLoading} from '~stores/global/actions';
import ProxyLineSDK from '~libs/proxyline-sdk';

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
  dispatch(setGlobalLoading(true));
  ProxyLineSDK.account
    .getBalance()
    .then(r => dispatch(setWallet(r)))
    .finally(() => dispatch(setGlobalLoading(false)));
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
