import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import {WIPOverlay} from '~components/wip-overlay';

interface Props {}

const DashboardPage: React.FC<Props> = ({}) => {
  return (
    <View style={styles.container}>
      <WIPOverlay />
    </View>
  );
};

export default DashboardPage;
