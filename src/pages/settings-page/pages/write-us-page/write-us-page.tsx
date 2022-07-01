import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import {TextInput} from '~components/text-input';
import useTabBarVisible from '~hooks/useTabBarVisible';
import {Button} from '~components/button';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {Colors, Styles} from '~styles';

interface Props {}

const WriteUsPage: React.FC<Props> = ({}) => {
  useTabBarVisible(false);

  const insets = useSafeAreaInsets();
  const bottomInsert = {marginBottom: insets.bottom === 0 ? 14 : 0};

  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <Text style={styles.title}>Тема</Text>
      <TextInput
        style={styles.textInput}
        placeholder={'тема'}
        autoCapitalize="none"
      />
      <Text style={styles.title}>Сообщение</Text>
      <TextInput
        style={styles.textInput}
        placeholder={'сообщение'}
        autoCapitalize="none"
        multiline={true}
        wrapStyle={styles.wrap}
      />
      <Text style={styles.desc}>{data}</Text>
      <View style={Styles.flex} />
      <Button
        style={{...bottomInsert, ...styles.button}}
        textColor={Colors.BLACK}
        title={'Отправить'}
      />
    </SafeAreaView>
  );
};

const data = `
Пишите нам в онлайн чат, он находиться с правой стороны в углу.
Онлайн чат работает каждый день круглосуточно.

Если вопросы связаны:
Заменой адреса
Возвратом заказов на баланс аккаунта
Пишите только в онлайн чат, поддержка отвечает в течение 1 минуты, ответ на тикет может задержаться до 72ч.
`;

export default WriteUsPage;
