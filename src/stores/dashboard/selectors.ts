import {AppState} from '~stores';
import {DashboardState} from '~stores/dashboard';

export const getDashboardSelector =
  () =>
  (store: AppState): DashboardState =>
    store.dashboard;
