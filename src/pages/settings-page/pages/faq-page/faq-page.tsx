import React, {useEffect} from 'react';
import {FlatList, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import useTabBarVisible from '~hooks/useTabBarVisible';
import {Styles} from '~styles';
import {useNavigation} from '@react-navigation/native';
import {NavigationService, Routes} from '~navigations';
import {faq} from '~pages/settings-page/pages/faq-page/data/faq';
import {FAQCell} from '~pages/settings-page/pages/faq-page/components/faq-cell';

interface Props {}

const FAQPage: React.FC<Props> = ({}) => {
  useTabBarVisible(false);
  const navigation = useNavigation();

  let _faq = faq;

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

  // _faq = _faq.filter(item => item.title.indexOf('IPV4') !== -1);

  return (
    <FlatList
      style={styles.container}
      data={_faq}
      renderItem={({item}) => <FAQCell data={item} />}
    />
  );
};

export default FAQPage;
