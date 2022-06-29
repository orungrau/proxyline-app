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
import {NavigationService} from '~navigations';
import {Colors, Styles} from '~styles';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {TextInput} from '~components/text-input';
import {Button} from '~components/button';
import {setGlobalLoading} from '~stores/global/actions';
import ProxyLineSDK from '~libs/proxyline-sdk';
import {ApiError} from '~libs/proxyline-sdk/base-controller';
import {useDispatch} from 'react-redux';
import {RouteProp} from '@react-navigation/native';
import {AccessTokenSchema} from '~libs/proxyline-sdk/models';
import {setAuthAction} from '~stores/account/actions';

interface Props {
  route?: RouteProp<any, any>;
}

const VerificationPage: React.FC<Props> = ({route}) => {
  const insets = useSafeAreaInsets();
  const bottomInsert = {marginBottom: insets.bottom === 0 ? 14 : 0};

  const dispatch = useDispatch();
  const [code, setCode] = useState('');

  const {email, type} = route!.params!;

  const handleVerify = () => {
    if (code === '') {
      Alert.alert('Ошибка', 'Не указан код подтверждения', [{text: 'Ok'}]);
      return;
    }

    dispatch(setGlobalLoading(true));
    const request =
      type === 'signup'
        ? ProxyLineSDK.auth.signUp(email, code)
        : ProxyLineSDK.auth.resetPassword(email, code);
    request
      .then(response => {
        console.log(response);
        if (type === 'signup') {
          // @ts-ignore
          const _r: AccessTokenSchema = response;
          dispatch(setAuthAction(String(_r.user_id), _r.token));
        } else {
          // @ts-ignore
          const _r: {user: AccessTokenSchema} = response;
          dispatch(setAuthAction(String(_r.user.user_id), _r.user.token));
        }
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
    NavigationService.popToTop();
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
              <Text style={styles.title}>Проверочный код</Text>
              <Text style={styles.subTitle}>
                На Ваш email будует выслан новый пароль
              </Text>
              <TextInput
                value={code}
                onChangeText={setCode}
                blurOnSubmit={true}
                style={styles.textInput}
                title={'Код подтверждения'}
                placeholder={'Код подтверждения'}
              />
            </View>
          </View>
          <Button
            onPress={handleVerify}
            title={'Отправить'}
            textColor={Colors.BLACK}
          />
          <Button
            style={bottomInsert}
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

export default VerificationPage;
