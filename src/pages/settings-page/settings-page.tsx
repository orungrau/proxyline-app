import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import {Button} from '~components/button';
import {logoutAction} from '~stores/account/actions';
import {useDispatch} from 'react-redux';
import {Colors} from '~styles';
import {ActionCell} from '~components/action-cell';
import {BigButton} from '~pages/settings-page/components/big-button';

interface Props {}

const SettingsPage: React.FC<Props> = ({}) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutAction());
  };
  return (
    <View style={styles.container}>
      <View style={styles.buttonsWrapper}>
        <BigButton
          title={'Проверка скорости'}
          icon={require('~assets/icons/speedtest.png')}
        />
        <BigButton
          title={'Проверка прокси'}
          icon={require('~assets/icons/proxycheck.png')}
        />
      </View>
      <ActionCell title={'Вопрос ответ'} isArrow={true} />
      <ActionCell title={'Написать нам'} isArrow={true} />
      <ActionCell
        title={'Больше возможностей'}
        icon={require('~assets/icons/more-share-icon.png')}
      />
      <View style={styles.space} />
      <ActionCell title={'Версия Proxy Line'} value={'1.0.0'} />
      <View style={styles.space} />
      <View style={styles.space} />
      <View style={styles.space} />
      <Button
        style={styles.logout}
        title={'Logout'}
        textColor={Colors.BLACK}
        onPress={handleLogout}
      />
    </View>
  );
};

export default SettingsPage;
