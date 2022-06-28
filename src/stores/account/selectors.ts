import {AppState} from '~stores';
import {AccountState} from '~stores/account/index';

export const getAccountSelector =
  () =>
  (store: AppState): AccountState =>
    store.account;
