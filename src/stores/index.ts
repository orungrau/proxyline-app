import {Action, applyMiddleware, combineReducers} from 'redux';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import thunkMiddleware, {ThunkAction} from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import AsyncStorage from '@react-native-async-storage/async-storage';
// @ts-ignore
import createSensitiveStorage from 'redux-persist-sensitive-storage';
import {persistReducer, persistStore} from 'redux-persist';
import {legacy_createStore as createStore} from 'redux';
// Reducers
import globalReducer from './global';
import accountReducer from './account';
import dashboardReducer from './dashboard';
import priceReducer from './price';
import newOrderReducer from './newOrder';
import orderReducer from './orders';
import proxyReducer from './proxy';

import ProxyLineSDK from '~libs/proxyline-sdk';

const sensitiveStorage = createSensitiveStorage({
  keychainService: 'proxyLineKeychain',
  sharedPreferencesName: 'proxyLineSharedPrefs',
});

const accountPersistConfig = {
  key: 'account',
  storage: sensitiveStorage,
};

const rootReducer = combineReducers({
  global: globalReducer,
  dashboard: dashboardReducer,
  price: priceReducer,
  newOrder: newOrderReducer,
  orders: orderReducer,
  proxy: proxyReducer,
  account: persistReducer(accountPersistConfig, accountReducer),
});

const persistConfig = {
  key: 'root-store',
  version: 0,
  whitelist: ['account'],
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

function configureStore() {
  const middlewares = [thunkMiddleware];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  let store = createStore(
    persistedReducer,
    composeWithDevTools(middleWareEnhancer),
  );
  let persistor = persistStore(store, {}, () => {
    const isAuth = store.getState().account.isAuth;
    if (isAuth) {
      const account = store.getState().account;
      ProxyLineSDK.setToken(account.userId + ':' + account.token);
    }
    return;
  });
  return {store, persistor};
}

export const {store, persistor} = configureStore();

export default store;

export type AppState = ReturnType<typeof rootReducer>;
export type AppThunk = ThunkAction<void, AppState, null, Action<string>>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
export const useDispatchWrap = <T>(values: T[]): T[] => {
  const dispatch = useDispatch();
  //@ts-ignore
  return values.map(i => {
    return (...any: any) => {
      //@ts-ignore
      dispatch(i(...any));
    };
  });
};
