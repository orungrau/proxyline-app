import React, {useEffect} from 'react';
import {Image, ScrollView, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {useAppSelector} from '~stores';
import {NavigationService, Routes} from '~navigations';
import ProxyPromoteCard from './components/proxy-promote-card/proxy-promote-card';

interface Props {}

const ProxyPage: React.FC<Props> = ({}) => {
  const navigation = useNavigation();

  const wallet = useAppSelector(s => s.account.wallet);

  const handleOpenWallet = () => {
    NavigationService.navigate(Routes.App.Wallet);
  };

  useEffect(function () {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={styles.headerWrapper}
          onPress={handleOpenWallet}>
          <Text style={styles.header}>$ {wallet?.balance}</Text>
          <Image source={require('~assets/icons/wallet.png')} />
        </TouchableOpacity>
      ),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ScrollView style={styles.container}>
      <ProxyPromoteCard
        topTitle={'Используют до 3-х человек'}
        title={'IPv4 Shared'}
        desc={'Подходят для любых целей и сайтов'}
        image={require('~assets/icons/p-shared.png')}
        price={'0.60'}
      />
      <ProxyPromoteCard
        topTitle={'Выдаются в одни руки'}
        title={'IPv4 Индивидуальные'}
        desc={'Подходят для любых целей и сайтов'}
        image={require('~assets/icons/p-indiv.png')}
        price={'0.88'}
      />
      <ProxyPromoteCard
        topTitle={'Выдаются в одни руки'}
        title={'IPv6 / 32'}
        desc={'Подходят для любых целей и сайтов'}
        image={require('~assets/icons/p-ipv6.png')}
        price={'1.22'}
      />
    </ScrollView>
  );
};

export default ProxyPage;
