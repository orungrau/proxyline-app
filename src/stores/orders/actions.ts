import {AppThunk} from '~stores';
import ProxyLineSDK from '~libs/proxyline-sdk';
import {setOrders} from '~stores/orders/index';
import {updateWakeMatrix} from '~stores/global';

export const fetchOrders = (): AppThunk => async dispatch => {
  ProxyLineSDK.orders
    .listOrder()
    .then(r => dispatch(setOrders(r)))
    .finally(() => dispatch(updateWakeMatrix()));
};
