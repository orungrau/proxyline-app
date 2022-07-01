import React, {useEffect} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import useTabBarVisible from '~hooks/useTabBarVisible';
import {Styles} from '~styles';
import {useNavigation} from '@react-navigation/native';
import {NavigationService, Routes} from '~navigations';

interface Props {}

const FAQPage: React.FC<Props> = ({}) => {
  useTabBarVisible(false);
  const navigation = useNavigation();

  const handleWriteUs = () => {
    NavigationService.navigate(Routes.App.WriteUs);
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={handleWriteUs}>
          <Text numberOfLines={1} style={Styles.headerButtonText}>
            Написать нам
          </Text>
        </TouchableOpacity>
      ),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <View style={styles.container} />;
};

export default FAQPage;
