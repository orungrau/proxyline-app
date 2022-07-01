import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import {TextInput} from '~components/text-input';
import {Colors} from '~styles';
import {Button} from '~components/button';
import useTabBarVisible from '~hooks/useTabBarVisible';

interface Props {}

const ChangePasswordPage: React.FC<Props> = ({}) => {
  useTabBarVisible(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Новый пароль</Text>
      <TextInput
        style={styles.textInput}
        placeholder={'пароль'}
        isPassword={true}
        textContentType={'password'}
        autoCapitalize="none"
      />
      <Text style={styles.title}>Повторите новый пароль</Text>
      <TextInput
        style={styles.textInput}
        placeholder={'пароль'}
        isPassword={true}
        textContentType={'password'}
        autoCapitalize="none"
      />
      <Button
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
