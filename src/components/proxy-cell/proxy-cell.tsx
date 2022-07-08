import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {ProxyResponseSchema} from '~libs/proxyline-sdk/models';
import {useAppSelector} from '~stores';
import {Styles} from '~styles';
import moment from 'moment';

interface Props {
  proxy: ProxyResponseSchema;
  selectorShow?: boolean;
  selectorOnPress?: () => void;
  selectorActive?: boolean;
  isArrow?: boolean;
}

const ProxyCell: React.FC<Props> = ({
  proxy,
  selectorShow,
  selectorOnPress,
  selectorActive,
  isArrow,
}) => {
  const {countries} = useAppSelector(s => s.price);
  const country = countries.filter(i => i.code === proxy.country_id)[0];

  return (
    <View style={styles.container}>
      <Image style={styles.flagImage} source={{uri: country.flag_url}} />
      <View style={Styles.flex}>
        <View style={[Styles.row, Styles.alignItems]}>
          <Text style={styles.countryText}>{country.name_ru}</Text>
          <View style={styles.daysWrapper}>
            <Text style={styles.daysText}>
              {moment(proxy.date_end).toNow(true)}
            </Text>
          </View>
        </View>
        <View style={[Styles.row, Styles.alignItems]}>
          <View style={styles.ipTypeWrapper}>
            <Text style={styles.ipTypeText}>
              {proxy.ip_version === 4 ? 'IPv4' : 'IPv6'}
            </Text>
          </View>
          <Text style={styles.ipText}>{proxy.ip}</Text>
        </View>
      </View>
      {selectorShow ? (
        <TouchableOpacity
          onPress={selectorOnPress}
          style={styles.selectTouchZone}>
          <View style={styles.selectCircle}>
            {selectorActive ? <View style={styles.selectActive} /> : null}
          </View>
        </TouchableOpacity>
      ) : null}
      {isArrow ? (
        <Image
          style={styles.arrow}
          source={require('~assets/icons/action-arrow.png')}
        />
      ) : null}
    </View>
  );
};

export default ProxyCell;
