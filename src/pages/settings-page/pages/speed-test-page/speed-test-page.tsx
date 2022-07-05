import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import useTabBarVisible from '~hooks/useTabBarVisible';
import {WIPOverlay} from '~components/wip-overlay';

interface Props {}

const SpeedTestPage: React.FC<Props> = ({}) => {
  useTabBarVisible(false);

  return (
    <View style={styles.container}>
      <WIPOverlay />
    </View>
  );
};

export default SpeedTestPage;
