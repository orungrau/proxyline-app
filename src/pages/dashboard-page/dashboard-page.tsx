import React from 'react';
import {ImageBackground} from 'react-native';
import styles from './styles';
import {WIPOverlay} from '~components/wip-overlay';

interface Props {}

const DashboardPage: React.FC<Props> = ({}) => {
  return (
    <ImageBackground
      resizeMode={'cover'}
      source={require('~assets/images/background-main.png')}
      style={styles.container}>
      <WIPOverlay />
    </ImageBackground>
  );
};

export default DashboardPage;
