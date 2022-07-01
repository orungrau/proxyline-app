import React, {useState} from 'react';
import {Alert, Text, View} from 'react-native';
import styles from './styles';
import useTabBarVisible from '~hooks/useTabBarVisible';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {TextInput} from '~components/text-input';
import {Colors, Styles} from '~styles';
import {Button} from '~components/button';
import {NavigationService, Routes} from '~navigations';
import {useDispatch} from 'react-redux';
import {setGlobalLoading} from '~stores/global/actions';
import ProxyLineSDK from '~libs/proxyline-sdk';

interface Props {}

const ProxyCheckPage: React.FC<Props> = ({}) => {
  const [proxyList, setProxyList] = useState('');

  const dispatch = useDispatch();
  useTabBarVisible(false);

  const handleCheck = async () => {
    dispatch(setGlobalLoading(true));
    ProxyLineSDK.proxyChecker
      .check(proxyList)
      .then(result =>
        NavigationService.navigate(Routes.App.ProxyCheckResult, {data: result}),
      )
      .catch(_ => {
        Alert.alert('Ошибка', 'Данные указанны в некорректном формате');
      })
      .finally(() => {
        dispatch(setGlobalLoading(false));
      });
  };

  const insets = useSafeAreaInsets();
  const bottomInsert = {marginBottom: insets.bottom === 0 ? 14 : 0};

  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <Text style={styles.title}>Список прокси</Text>
      <TextInput
        value={proxyList}
        onChangeText={setProxyList}
        style={styles.textInput}
        placeholder={'список прокси'}
        autoCapitalize="none"
        multiline={true}
        wrapStyle={styles.wrap}
      />
      <Text style={styles.descOneText}>{desc1}</Text>
      <View style={Styles.flex} />
      <View style={styles.descTwoWrapper}>
        <Text style={styles.descTwoText}>{desc2}</Text>
      </View>
      <Button
        onPress={handleCheck}
        style={{...bottomInsert, ...styles.button}}
        textColor={Colors.BLACK}
        title={'Отправить'}
      />
    </SafeAreaView>
  );
};

const desc1 = `Если у вас публичные прокси (без логина и пароля), то IP:PORT

Если у вас Индивидуальные/Приватные (авторизация по логину и паролю), тогда IP:PORT:LOGIN:PASW
`;

const desc2 = `•  Проверка IPv4 прокси
•  Проверка приватных прокси и нет
•  Проверка HTTP(S) и SOCKS(4,5)
•  Определение протокола, страны и города
•  Высокая скорость проверки`;

export default ProxyCheckPage;
