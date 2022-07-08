import React, {useEffect, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {Colors, Styles} from '~styles';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {logoutAction} from '~stores/account/actions';
import {ActionCell} from '~components/action-cell';
import {Button} from '~components/button';
import {NavigationService, Routes} from '~navigations';
import useTabBarVisible from '~hooks/useTabBarVisible';
import {setTabBarShowAction} from '~stores/global/actions';
import {useAppSelector} from '~stores';
import {getAccountSelector} from '~stores/account/selectors';

interface Props {}

const AccountPage: React.FC<Props> = ({}) => {
  const account = useAppSelector(getAccountSelector());
  const [showPassword, setShowPassword] = useState(false);

  useTabBarVisible(false);

  console.log(account);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutAction());
    dispatch(setTabBarShowAction(true));
  };

  const handleChangePassword = () => {
    NavigationService.navigate(Routes.App.ChangePassword);
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={handleLogout}>
          <Text style={Styles.headerButtonText}>Выйти</Text>
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Данные аккаунта</Text>
      <ActionCell title={'Логин'} value={account.email} />
      <ActionCell
        title={'Пароль'}
        view={
          <>
            <Text style={styles.password}>
              {showPassword ? account.password : '•••••••••••••'}
            </Text>
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              {showPassword ? (
                <Image
                  style={styles.showHide}
                  source={require('~assets/icons/hide.png')}
                />
              ) : (
                <Image
                  style={styles.showHide}
                  source={require('~assets/icons/show.png')}
                />
              )}
            </TouchableOpacity>
          </>
        }
      />
      <Button
        onPress={handleChangePassword}
        style={styles.button}
        textColor={Colors.PRIMARY}
        tintColor={Colors.GRAY_1E2127}
        title={'Сменить пароль'}
      />
    </View>
  );
};

export default AccountPage;
