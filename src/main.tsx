import React, {useEffect} from 'react';
import codePush from 'react-native-code-push';
import RNBootSplash from 'react-native-bootsplash';
import {StyleSheet, View} from 'react-native';
import {Colors} from '~styles';

const ProvidedApp = () => {
  useEffect(() => {
    RNBootSplash.hide({fade: true}).then();
  }, []);

  return <View style={styles.app} />;
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: Colors.BLACK,
  },
});

export default !__DEV__ ? codePush(ProvidedApp) : ProvidedApp;
