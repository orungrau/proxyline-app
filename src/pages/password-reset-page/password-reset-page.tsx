import React, {useState} from 'react';
import {
  Alert,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Text,
  View,
} from 'react-native';
import styles from './styles';
import {NavigationService, Routes} from '~navigations';
import {Colors, Styles} from '~styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TextInput} from '~components/text-input';
import {Button} from '~components/button';
import {useDispatch} from 'react-redux';
import {setGlobalLoading} from '~stores/global/actions';
import ProxyLineSDK from '~libs/proxyline-sdk';
import {ApiError} from '~libs/proxyline-sdk/base-controller';

interface Props {}

const PasswordResetPage: React.FC<Props> = ({}) => {
  const [email, setEmail] = useState();
  const dispatch = useDispatch();

  const handleReset = () => {
    if (email === '') {
      Alert.alert('Ошибка', 'Не указан email и/или пароль', [{text: 'Ok'}]);
      return;
    }

    dispatch(setGlobalLoading(true));
    ProxyLineSDK.auth
      .resetPasswordCode(email)
      .then(() => {
        NavigationService.navigate(Routes.Auth.VerificationPage, {
          email: email,
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
  const handleCancel = () => {
    NavigationService.back();
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
              <Text style={styles.title}>Восстановление пароля</Text>
              <Text style={styles.subTitle}>
                На Ваш email будет выслан проверочный код для сброса текущего
                пароля
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
            </View>
          </View>
          <Button
            onPress={handleReset}
            title={'Отправить'}
            textColor={Colors.BLACK}
          />
          <Button
            onPress={handleCancel}
            title={'Отменить'}
            textColor={Colors.WHITE}
            tintColor={Colors.CLEAN}
          />
        </SafeAreaView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default PasswordResetPage;
