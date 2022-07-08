import {AppThunk} from '~stores';
import ProxyLineSDK from '~libs/proxyline-sdk';
import {setProxies} from '~stores/proxy/index';
import {setSelectProxyId} from '~stores/dashboard';
import {updateWakeMatrix} from '~stores/global';

export const fetchProxyData = (): AppThunk => async (dispatch, getState) => {
  ProxyLineSDK.proxy
    .proxies()
    .then(r => {
      dispatch(setProxies(r));
      if (!getState().dashboard.selectProxyId && r.length > 0) {
        dispatch(setSelectProxyId(r[0].id));
      }
    })
    .finally(() => dispatch(updateWakeMatrix()));
};
