import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import {Button} from '~components/button';
import {Colors} from '~styles';
import {useAppSelector} from '~stores';

interface Props {}

const WalletCard: React.FC<Props> = ({}) => {
  const wallet = useAppSelector(s => s.account.wallet);

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.currencyText}>$</Text>
        <Text style={styles.balanceText}>{wallet?.balance}</Text>
      </View>
      <View style={styles.footer}>
        <Button
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
