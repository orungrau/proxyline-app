import {fetchPriceData} from '~stores/price/actions';
import {fetchDashboard} from '~stores/dashboard/actions';
import {fetchAccountData} from '~stores/account/actions';
import {fetchOrders} from '~stores/orders/actions';
import {fetchProxyData} from '~stores/proxy/actions';
import {AppThunk} from '~stores/index';

export const appWakeup = (): AppThunk => async dispatch => {
  dispatch(fetchPriceData());
  dispatch(fetchDashboard());
  dispatch(fetchAccountData());
  dispatch(fetchOrders());
  dispatch(fetchProxyData());
};
