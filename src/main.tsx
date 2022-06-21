import React from 'react';
import codePush from 'react-native-code-push';
import {DebugPage} from '~pages/debug-page';

const App = () => {
  return <DebugPage />;
};

let mainApp = codePush(App);
if (__DEV__) {
  mainApp = App;
}
export default mainApp;
