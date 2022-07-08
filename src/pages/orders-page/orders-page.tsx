import React from 'react';
import {FlatList, Text, View} from 'react-native';
import styles from './styles';
import {Colors} from '~styles';
import {Button} from '~components/button';
import {NavigationService, Routes} from '~navigations';
import useTabBarVisible from '~hooks/useTabBarVisible';
import {useAppSelector} from '~stores';
import {OrderResponseSchema} from '~libs/proxyline-sdk/models';
import {OrderCard} from '~pages/orders-page/components/order-card';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface Props {}

const OrdersPage: React.FC<Props> = ({}) => {
  useTabBarVisible(true);
  const insets = useSafeAreaInsets();

  const {orders} = useAppSelector(s => s.orders);

  const handleNewOrder = () => {
    NavigationService.navigate(Routes.App.NewOrderPage);
  };

  if (orders.length === 0) {
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
              onPress={handleNewOrder}
              style={styles.noButton}
              title={'Подробнее'}
              textColor={Colors.PRIMARY}
              tintColor={Colors.CLEAN}
            />
          </View>
        </View>
      </View>
    );
  }

  return (
    <FlatList<OrderResponseSchema>
      contentInset={{
        bottom: insets.bottom + 80,
      }}
      data={orders}
      renderItem={({item}) => <OrderCard order={item} />}
    />
  );
};

export default OrdersPage;
