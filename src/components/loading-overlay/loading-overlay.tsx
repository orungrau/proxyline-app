import React from 'react';
import {View} from 'react-native';
// @ts-ignore
import {PulseIndicator} from 'react-native-indicators';
import styles from './styles';
import {Colors} from '~styles';

interface Props {}

const LoadingOverlay: React.FC<Props> = ({}) => {
  return (
    <View style={styles.container}>
      <PulseIndicator color={Colors.PRIMARY} />
    </View>
  );
};

export default LoadingOverlay;
