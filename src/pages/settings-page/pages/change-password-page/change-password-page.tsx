import React, {useState} from 'react';
import {Alert, Text, View} from 'react-native';
import styles from './styles';
import {TextInput} from '~components/text-input';
import {Colors} from '~styles';
import {Button} from '~components/button';
import useTabBarVisible from '~hooks/useTabBarVisible';
import {useAppSelector} from '~stores';
import {getAccountSelector} from '~stores/account/selectors';
import {useDispatch} from 'react-redux';
import {setGlobalLoading} from '~stores/global/actions';
import ProxyLineSDK from '~libs/proxyline-sdk';
import {setPasswordAction} from '~stores/account/actions';
import {NavigationService} from '~navigations';

interface Props {}

const ChangePasswordPage: React.FC<Props> = ({}) => {
  useTabBarVisible(false);
  const dispatch = useDispatch();
  const account = useAppSelector(getAccountSelector());

  const [newPassword, setNewPassword] = useState('');
  const [repeatNewPassword, setRepeatNewPassword] = useState('');

  const handleChangePassword = () => {
    if (newPassword.length < 8) {
      Alert.alert('Ошибка', 'Слишком короткий пароль');
      return;
    }
    if (newPassword === account.email) {
      Alert.alert('Ошибка', 'Пароль похож на email');
      return;
    }
    if (/^[A-Z]*$/.test(newPassword) && /^[A-Z]*$/.test(newPassword)) {
      Alert.alert(
        'Ошибка',
        'Пароль должен содержать прописные и строчные буквы',
      );
      return;
    }
    if (/^\d*$/.test(newPassword)) {
      Alert.alert('Ошибка', 'Пароль должен содержать хотя бы одну цифру');
      return;
    }
    if (newPassword !== repeatNewPassword) {
      Alert.alert('Ошибка', 'Пароли не совпадают');
      return;
    }

    dispatch(setGlobalLoading(true));
    ProxyLineSDK.account
      .resetPasswordCode(newPassword)
      .then(_ => {
        Alert.alert('Успешно', 'Пароль изменен');
        dispatch(setPasswordAction(newPassword));
        NavigationService.back();
      })
      .catch(_ => {
        Alert.alert('Ошибка', 'Некорректный пароль');
      })
      .finally(() => dispatch(setGlobalLoading(false)));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Новый пароль</Text>
      <TextInput
        value={newPassword}
        onChangeText={setNewPassword}
        style={styles.textInput}
        placeholder={'пароль'}
        isPassword={true}
        textContentType={'password'}
        autoCapitalize="none"
      />
      <Text style={styles.title}>Повторите новый пароль</Text>
      <TextInput
        value={repeatNewPassword}
        onChangeText={setRepeatNewPassword}
        style={styles.textInput}
        placeholder={'пароль'}
        isPassword={true}
        textContentType={'password'}
        autoCapitalize="none"
      />
      <Button
        onPress={handleChangePassword}
        style={styles.button}
        textColor={Colors.PRIMARY}
        tintColor={Colors.GRAY_1E2127}
        title={'Применить'}
      />
      <Text style={styles.desc}>
        {desc}
        <Text style={styles.descRegular}>{reg}</Text>
      </Text>
    </View>
  );
};

const desc = 'Требования к паролю:';

const reg = `

1. 8 и более символов.
2. Непохож на email.
3. Прописные и строчые буквы.
4. Хотя бы одна цифра.
`;

export default ChangePasswordPage;
