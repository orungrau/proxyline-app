import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';
import {OrderResponseSchema} from '~libs/proxyline-sdk/models';
import {PROMOTE} from '~constants';
import {Styles} from '~styles';
import moment from 'moment';
import {useAppSelector} from '~stores';

interface Props {
  order: OrderResponseSchema;
}

const OrderCard: React.FC<Props> = ({order}) => {
  const promote = PROMOTE.filter(
    f =>
      f.tariff.ip_version === order.ip_version &&
      f.tariff.ip_type === order.ip_type,
  )[0];

  const {countries} = useAppSelector(s => s.price);

  const country = countries.filter(c => c.code === order.country_id)[0];

  const days = Math.trunc(
    moment(order.earliest_date_end).diff(moment(order.create_date)) /
      1000 /
      60 /
      60 /
      24,
  );
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={[Styles.flex]}>
          <Text style={styles.titleText}>{promote.title}</Text>
          <Text style={styles.createDateText}>
            От{' '}
            <Text style={styles.createDateBodyText}>
              {moment(order.create_date).format('DD.MM.YYYY, h:mm')}
            </Text>
          </Text>
        </View>
        <View>
          <Text style={styles.idText}>
            ID <Text style={styles.tdBodyText}>{order.id}</Text>
          </Text>
          <Text style={styles.earliestDateEndText}>
            Осталось{' '}
            <Text style={styles.earliestDateEndBodyText}>
              {moment(order.earliest_date_end).toNow(true)}
            </Text>
          </Text>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.cell}>
          <Text style={styles.cellTitle}>Страна</Text>
          <Text style={styles.cellValue}>{country.name_ru}</Text>
          <Image
            style={styles.flagImage}
            source={{
              uri: country.flag_url,
            }}
          />
        </View>
        <View style={styles.cell}>
          <Text style={styles.cellTitle}>Дней</Text>
          <Text style={styles.cellValue}>{days}</Text>
        </View>
        <View style={styles.cell}>
          <Text style={styles.cellTitle}>Количество IP</Text>
          <Text style={styles.cellValue}>{order.proxy_count}</Text>
        </View>
      </View>
    </View>
  );
};

export default OrderCard;
