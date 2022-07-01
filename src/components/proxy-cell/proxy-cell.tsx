import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

interface Props {}

const ProxyCell: React.FC<Props> = ({}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text>United States of America</Text>
        <View>
          <Text>136.117.121.183</Text>
        </View>
      </View>
    </View>
  );
};

export default ProxyCell;
