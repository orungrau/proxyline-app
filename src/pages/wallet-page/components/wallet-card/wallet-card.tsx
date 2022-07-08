import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import {Button} from '~components/button';
import {Colors} from '~styles';
import {useAppSelector} from '~stores';
import {priceFormat} from '~helpers/priceFormat';
import {useDispatch} from 'react-redux';
import {setGlobalLoading} from '~stores/global/actions';
import ProxyLineSDK from '~libs/proxyline-sdk';
import {fetchAccountData} from '~stores/account/actions';

interface Props {}

const WalletCard: React.FC<Props> = ({}) => {
  const dispatch = useDispatch();
  const wallet = useAppSelector(s => s.account.wallet);
  const handleAdd = async () => {
    dispatch(setGlobalLoading(true));
    const payment = await ProxyLineSDK.wallet.payment({
      amount: 100,
      payment_method: 40,
    });

    await ProxyLineSDK.wallet.completePayment(payment.payment_id);
    dispatch(fetchAccountData());
    dispatch(setGlobalLoading(false));
  };

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.currencyText}>$</Text>
        <Text style={styles.balanceText}>{priceFormat(wallet!.balance)}</Text>
      </View>
      <View style={styles.footer}>
        <Button
          onPress={handleAdd}
          style={styles.button}
          title={'Пополнить'}
          textColor={Colors.PRIMARY}
          tintColor={Colors.CLEAN}
        />
      </View>
    </View>
  );
};

export default WalletCard;
