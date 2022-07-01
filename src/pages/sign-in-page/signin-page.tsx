import React, {useState} from 'react';
import {
  Alert,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {Button} from '~components/button';
import {TextInput} from '~components/text-input';
import {Colors, Styles} from '~styles';
import {NavigationService, Routes} from '~navigations';
import {setGlobalLoading} from '~stores/global/actions';
import {useDispatch} from 'react-redux';
import ProxyLineSDK from '~libs/proxyline-sdk';
import {ApiError} from '~libs/proxyline-sdk/base-controller';
import {setAuthAction} from '~stores/account/actions';

interface Props {}

const SignInPage: React.FC<Props> = ({}) => {
  const insets = useSafeAreaInsets();
  const bottomInsert = {marginBottom: insets.bottom === 0 ? 14 : 0};

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleOpenSignUp = () => {
    NavigationService.navigate(Routes.Auth.SignUp);
  };
  const handleSignIn = () => {
    if (email === '' || password === '') {
      Alert.alert('Ошибка', 'Не указан email и/или пароль', [{text: 'Ok'}]);
      return;
    }

    dispatch(setGlobalLoading(true));
    ProxyLineSDK.auth
      .singIn(email.replace(' ', '').toLocaleLowerCase(), password)
      .then(response => {
        if (!response.success) {
          Alert.alert('Ошибка', 'Неверный email или пароль', [{text: 'Ok'}]);
          return;
        }
        dispatch(
          setAuthAction(
            String(response.user.user_id),
            response.user.token,
            email,
            password,
          ),
        );
      })
      .catch((reason: ApiError) => {
        console.log(reason.errorBody);
        Alert.alert('Ошибка', reason.error ? reason.error.code : 'UNKNOWN', [
          {text: 'Ok'},
        ]);
      })
      .finally(() => {
        dispatch(setGlobalLoading(false));
      });
  };
  const handleResetPassword = () => {
    NavigationService.navigate(Routes.Auth.PasswordReset);
  };

  return (
    <ImageBackground
      resizeMode={'cover'}
      source={require('~assets/images/background-main.png')}
      style={styles.container}>
      <KeyboardAvoidingView behavior="padding" style={Styles.flex}>
        <SafeAreaView style={[Styles.flex]}>
          <View style={styles.header}>
            <Image source={require('~assets/images/big-logo.png')} />
          </View>
          <View style={styles.wrapper}>
            <View>
              <Text style={styles.title}>Авторизация</Text>
              <TextInput
                value={email}
                blurOnSubmit={true}
                style={styles.textInput}
                title={'Email'}
                placeholder={'email'}
                onChangeText={setEmail}
                keyboardType={'email-address'}
                textContentType={'emailAddress'}
                autoCapitalize="none"
              />
              <TextInput
                value={password}
                style={styles.textInput}
                title={'Пароль'}
                placeholder={'пароль'}
                onChangeText={setPassword}
                isPassword={true}
                textContentType={'password'}
                autoCapitalize="none"
              />
              <TouchableOpacity
                onPress={handleResetPassword}
                style={styles.resetPasswordWrapper}>
                <Text style={styles.resetPasswordText}>Забыли пароль?</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity onPress={handleOpenSignUp} style={styles.subButton}>
            <Text style={styles.subButtonText}>
              Нет аккаунта?{' '}
              <Text style={styles.subButtonUnderline}>Регистрация</Text>
            </Text>
          </TouchableOpacity>
          <Button
            style={bottomInsert}
            onPress={handleSignIn}
            title={'Войти'}
            textColor={Colors.BLACK}
          />
        </SafeAreaView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default SignInPage;
