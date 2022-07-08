import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Linking,
  Platform,
  ScrollView,
} from 'react-native';
import styles from './styles';
import DeviceInfo from 'react-native-device-info';
import {Styles} from '~styles';
import {ActionCell} from '~components/action-cell';
import {BigButton} from '~pages/settings-page/components/big-button';
import {useNavigation} from '@react-navigation/native';
import {NavigationService, Routes} from '~navigations';
import useTabBarVisible from '~hooks/useTabBarVisible';

interface Props {}

const SettingsPage: React.FC<Props> = ({}) => {
  useTabBarVisible(true);
  const [versionCount, setVersionCount] = useState<number>(0);
  const [version, setVersion] = useState(DeviceInfo.getVersion());
  const navigation = useNavigation();

  const handleOpenAccount = () => {
    NavigationService.navigate(Routes.App.Account);
  };

  const handleSpeedCheck = () => {
    NavigationService.navigate(Routes.App.SpeedTest);
  };

  const handleProxyCheck = () => {
    NavigationService.navigate(Routes.App.ProxyCheck);
  };

  const handleFAQ = () => {
    NavigationService.navigate(Routes.App.FAQ);
  };

  const handleWriteUs = () => {
    NavigationService.navigate(Routes.App.WriteUs);
  };

  const handleMore = () => {
    Linking.openURL('https://proxyline.net').then();
  };

  const handleVersion = () => {
    setVersionCount(versionCount + 1);
    if (versionCount > 5) {
      setVersion(
        `[${Platform.OS.toLocaleUpperCase()}] [${DeviceInfo.getVersion()}] [${DeviceInfo.getBuildNumber()}]`,
      );
    }
  };

  useEffect(function () {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={handleOpenAccount}>
          <Text style={Styles.headerButtonText}>Аккаунт</Text>
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.buttonsWrapper}>
        <BigButton
          onPress={handleSpeedCheck}
          title={'Проверка скорости'}
          icon={require('~assets/icons/speedtest.png')}
        />
        <BigButton
          onPress={handleProxyCheck}
          title={'Проверка прокси'}
          icon={require('~assets/icons/proxycheck.png')}
        />
      </View>
      <ActionCell onPress={handleFAQ} title={'Вопрос ответ'} isArrow={true} />
      <ActionCell
        onPress={handleWriteUs}
        title={'Написать нам'}
        isArrow={true}
      />
      <ActionCell
        onPress={handleMore}
        title={'Больше возможностей'}
        icon={require('~assets/icons/more-share-icon.png')}
      />
      <View style={styles.space} />
      <ActionCell
        onPress={handleVersion}
        title={'Версия Proxy Line'}
        value={version}
      />
      <View style={styles.space} />
      <View style={styles.space} />
      <View style={styles.space} />
    </ScrollView>
  );
};

export default SettingsPage;
