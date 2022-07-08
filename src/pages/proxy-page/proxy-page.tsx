import React from 'react';
import {ScrollView} from 'react-native';
import styles from './styles';
import {useAppSelector} from '~stores';
import {ProxyPromoteCard} from '~components/proxy-promote-card';
import {priceFormat} from '~helpers/priceFormat';
import {useWalletNavigation} from '~hooks/useWalletNavigation';
import {NavigationService, Routes} from '~navigations';
import {reset, setPromoteIndex} from '~stores/newOrder';
import {useDispatch} from 'react-redux';
import useTabBarVisible from '~hooks/useTabBarVisible';

interface Props {}

const ProxyPage: React.FC<Props> = ({}) => {
  useTabBarVisible(true);
  useWalletNavigation();

  const dispatch = useDispatch();
  const {promotes} = useAppSelector(s => s.price);

  return (
    <ScrollView style={styles.container}>
      {promotes.map((promote, index) => (
        <ProxyPromoteCard
          key={index}
          topTitle={promote.bubble}
          title={promote.title}
          desc={promote.description}
          image={promote.image}
          price={priceFormat(promote.amount!)}
          onPress={() => {
            dispatch(reset());
            dispatch(setPromoteIndex(index));
            NavigationService.navigate(Routes.App.NewOrderPage);
          }}
        />
      ))}
    </ScrollView>
  );
};

export default ProxyPage;
