import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import useTabBarVisible from '~hooks/useTabBarVisible';

interface Props {}

const ProxyCheckPage: React.FC<Props> = ({}) => {
  useTabBarVisible(false);

  return <View style={styles.container} />;
};

export default ProxyCheckPage;
