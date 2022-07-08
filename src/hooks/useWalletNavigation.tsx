import {useNavigation} from '@react-navigation/native';
import {useAppSelector} from '~stores';
import {NavigationService, Routes} from '~navigations';
import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {priceFormat} from '~helpers/priceFormat';
import {Colors} from '~styles';

export const useWalletNavigation = () => {
  const navigation = useNavigation();

  const wallet = useAppSelector(s => s.account.wallet);

  const handleOpenWallet = () => {
    NavigationService.navigate(Routes.App.Wallet);
  };

  useEffect(
    function () {
      navigation.setOptions({
        headerRight: () => (
          <TouchableOpacity
            style={styles.headerWrapper}
            onPress={handleOpenWallet}>
            <Text style={styles.header}>$ {priceFormat(wallet!.balance)}</Text>
            <Image source={require('~assets/icons/wallet.png')} />
          </TouchableOpacity>
        ),
      });
    },
    [wallet],
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 15,
    fontFamily: 'SourceSansPro-Bold',
    color: Colors.WHITE,
    textAlign: 'right',
    textAlignVertical: 'center',
    marginRight: 6,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
