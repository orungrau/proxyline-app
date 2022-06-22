import React, {useEffect} from 'react';
import codePush from 'react-native-code-push';
import RNBootSplash from 'react-native-bootsplash';
import {DebugPage} from '~pages/debug-page';
import {StatusBar} from 'react-native';
import {Colors} from '~styles';

const App = () => {
  useEffect(() => {
    RNBootSplash.hide({fade: true}).then();
  }, []);

  return (
    <>
      <StatusBar translucent={true} backgroundColor={Colors.CLEAN} />
      <DebugPage />
    </>
  );
};

export default !__DEV__ ? codePush(App) : App;
