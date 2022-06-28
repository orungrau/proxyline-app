import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

interface Props {}

const WIPOverlay: React.FC<Props> = ({}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Work in progress</Text>
    </View>
  );
};

export default WIPOverlay;
