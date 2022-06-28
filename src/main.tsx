import React, {useEffect} from 'react';
import codePush from 'react-native-code-push';
import RNBootSplash from 'react-native-bootsplash';
import {StatusBar, StyleSheet, View} from 'react-native';
import {Colors} from '~styles';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import ProxyLineSDK from '~libs/proxyline-sdk';
import {PROJECT_ID, PROJECT_KEY} from '~constants';
import {NavigationContainer, AuthNavigator} from '~navigations';
import {Provider} from 'react-redux';
import store, {persistor, useAppSelector} from '~stores';
import {PersistGate} from 'redux-persist/integration/react';
import {getGlobal} from '~stores/global/selectors';
import {LoadingOverlay} from '~components/loading-overlay';
import TabBarNavigator from '~navigations/tabs-navigator';
import {getAccountSelector} from '~stores/account/selectors';

ProxyLineSDK.setProject(PROJECT_ID, PROJECT_KEY);

const App = () => {
  const {isAuth} = useAppSelector(getAccountSelector());
  const {loading} = useAppSelector(getGlobal());

  useEffect(() => {
    RNBootSplash.hide({fade: true}).then();
  }, []);

  return (
    <View style={styles.app}>
      <StatusBar
        translucent={true}
        backgroundColor={Colors.CLEAN}
        barStyle={'light-content'}
      />
      <NavigationContainer>
        {isAuth ? <TabBarNavigator /> : <AuthNavigator />}
      </NavigationContainer>
      {loading ? (
        <View style={styles.overlay}>
          <LoadingOverlay />
        </View>
      ) : null}
    </View>
  );
};

const ProvidedApp = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaProvider>
          <App />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: Colors.PRIMARY_BACKGROUND,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default !__DEV__ ? codePush(ProvidedApp) : ProvidedApp;
