import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import {Colors} from '~styles';
import {Button} from '~components/button';

interface Props {}

const OrdersPage: React.FC<Props> = ({}) => {
  return (
    <View style={styles.container}>
      <View style={styles.noWrapper}>
        <View style={styles.noHeader}>
          <Text style={styles.noTitle}>Нет ни одного заказа</Text>
          <Text style={styles.noDesc}>
            На данный момент вы не совершали ни одного заказа
          </Text>
        </View>
        <View style={styles.noBody}>
          <Button
            style={styles.noButton}
            title={'Подробнее'}
            textColor={Colors.PRIMARY}
            tintColor={Colors.CLEAN}
          />
        </View>
      </View>
    </View>
  );
};

export default OrdersPage;
