import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import {WalletCard} from '~pages/wallet-page/components/wallet-card';

interface Props {}

const WalletPage: React.FC<Props> = ({}) => {
  return (
    <View style={styles.container}>
      <WalletCard />
      <Text style={styles.sectionHeader}>Операции</Text>
      <View style={styles.noWrapper}>
        <Text style={styles.noTitle}>Нет ни одной операции</Text>
        <Text style={styles.noDesc}>
          На данный момент вы не совершали никаких операций или операция в
          обработке
        </Text>
      </View>
    </View>
  );
};

export default WalletPage;
