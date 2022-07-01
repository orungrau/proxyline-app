import {AppState} from '~stores';
import {GlobalState} from '~stores/global/index';

export const getGlobal =
  () =>
  (store: AppState): GlobalState =>
    store.global;

export const getTabBarShow =
  () =>
  (store: AppState): boolean =>
    store.global.tabBarShow;
