import React from 'react';
import {View} from 'react-native';
import codePush from 'react-native-code-push';

const App = () => {
  return <View />;
};

let mainApp = codePush(App);
if (__DEV__) {
  mainApp = App;
}
export default mainApp;
