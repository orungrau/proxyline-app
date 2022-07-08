import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {CountryResponseSchema} from '~libs/proxyline-sdk/models';

interface Props {
  data: CountryResponseSchema;
  active?: boolean;
  onPress?: () => void;
}

const CountryCell: React.FC<Props> = ({data, active, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image style={styles.flagImage} source={{uri: data.flag_url}} />
      <Text style={styles.title}>{data.name_ru}</Text>
      <View style={styles.selectCircle}>
        {active ? <View style={styles.selectActive} /> : null}
      </View>
    </TouchableOpacity>
  );
};

export default CountryCell;
