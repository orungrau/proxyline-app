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
import {Colors, Styles} from '~styles';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {TextInput} from '~components/text-input';
import {Button} from '~components/button';
import {NavigationService, Routes} from '~navigations';
import {useDispatch} from 'react-redux';
import {setGlobalLoading} from '~stores/global/actions';
import ProxyLineSDK from '~libs/proxyline-sdk';
import {ApiError} from '~libs/proxyline-sdk/base-controller';

interface Props {}

const SignUpPage: React.FC<Props> = ({}) => {
  const insets = useSafeAreaInsets();
  const bottomInsert = {marginBottom: insets.bottom === 0 ? 14 : 0};

  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const handleOpenPublicOffer = () => {
    NavigationService.navigate(Routes.Auth.Agreement, {
      type: 'po',
    });
  };
  const handleOpenPrivacyPolicy = () => {
    NavigationService.navigate(Routes.Auth.Agreement, {
      type: 'pp',
    });
  };

  const handleOpenSignIn = () => {
    NavigationService.back();
  };

  const handleSignUp = () => {
    if (email === '') {
      Alert.alert('Ошибка', 'Не указан email и/или пароль', [{text: 'Ok'}]);
      return;
    }

    dispatch(setGlobalLoading(true));
    ProxyLineSDK.auth
      .verificationCode(email)
      .then(() => {
        NavigationService.navigate(Routes.Auth.VerificationPage, {
          email: email,
          type: 'signup',
        });
      })
      .catch((reason: ApiError) => {
        Alert.alert('Ошибка', reason.error ? reason.error.code : 'UNKNOWN', [
          {text: 'Ok'},
        ]);
      })
      .finally(() => {
        dispatch(setGlobalLoading(false));
      });
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
              <Text style={styles.title}>Регистрация</Text>
              <Text style={styles.subTitle}>
                Пароль будет отправлен на Ваш email
              </Text>
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
              <Text style={styles.bottomTitle}>
                Регистрируясь вы принимаете{' '}
                <Text
                  onPress={handleOpenPublicOffer}
                  style={styles.textUnderline}>
                  публичную оферту
                </Text>
                <Text> и </Text>
                <Text
                  onPress={handleOpenPrivacyPolicy}
                  style={styles.textUnderline}>
                  политику конфиденциальности
                </Text>
              </Text>
            </View>
          </View>
          <TouchableOpacity onPress={handleOpenSignIn} style={styles.subButton}>
            <Text style={styles.subButtonText}>
              Уже есть аккаунт?{' '}
              <Text style={styles.subButtonUnderline}>Авторизация</Text>
            </Text>
          </TouchableOpacity>
          <Button
            style={bottomInsert}
            onPress={handleSignUp}
            title={'Зарегистрироваться'}
            textColor={Colors.BLACK}
          />
        </SafeAreaView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default SignUpPage;
