import React, {useEffect} from 'react';
import {ScrollView, Text} from 'react-native';
import styles from './styles';
import {NavigationService} from '~navigations';
import {RouteProp, useNavigation} from '@react-navigation/native';
import {Button} from '~components/button';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {Colors} from '~styles';

interface Props {
  route?: RouteProp<any, any>;
}

const AgreementPage: React.FC<Props> = ({route}) => {
  const navigation = useNavigation();

  const insets = useSafeAreaInsets();
  const bottomInsert = {marginBottom: insets.bottom === 0 ? 14 : 0};

  const type = route?.params?.type;

  useEffect(() => {
    navigation.setOptions({
      title: type === 'pp' ? 'Политика конфиденциальности' : 'Публичная оферта',
    });
  }, [navigation, type]);

  const handleOk = () => {
    NavigationService.back();
  };

  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <ScrollView style={styles.scroll}>
        <Text style={styles.text}>{type === 'pp' ? data : ''}</Text>
      </ScrollView>
      <Button
        style={bottomInsert}
        title={'Принять'}
        textColor={Colors.BLACK}
        onPress={handleOk}
      />
    </SafeAreaView>
  );
};

const data = `
1. Обрабатываемые данные

1.1. Мы не осуществляем сбор ваших персональных данных с использованием Сайта.

1.2. Все данные, собираемые на Сайте, предоставляются и принимаются в обезличенной форме (далее – «Обезличенные данные»).

1.3. Обезличенные данные включают следующие сведения, которые не позволяют вас идентифицировать:

1.3.1. Информацию, которую вы предоставляете о себе самостоятельно с использованием онлайн-форм и программных модулей Сайта, включая имя или номер телефона и/или адрес электронной почты.

1.3.2. Данные, которые передаются в обезличенном виде в автоматическом режиме в зависимости от настроек используемого вами программного обеспечения.

1.4. Администрация вправе устанавливать требования к составу Обезличенных данных Пользователя, которые собираются использованием Сайта.

1.5. Если определенная информация не помечена как обязательная, ее предоставление или раскрытие осуществляется Пользователем на свое усмотрение и по собственной инициативе.

1.6. Администрация не осуществляет проверку достоверности предоставляемых данных и наличия у Пользователя необходимого согласия на их обработку в соответствии с настоящей Политикой, полагая, что Пользователь действует добросовестно, осмотрительно и прилагает все необходимые усилия к поддержанию такой информации в актуальном состоянии и получению всех необходимых согласий на ее использование.

1.7. Вы осознаете и принимаете возможность использования на Сайте программного обеспечения третьих лиц, в результате чего такие лица могут получать и передавать указанные в п.1.3 данные в обезличенном виде.

Пример! К указанному программному обеспечению третьих лиц относятся системы сбора статистики посещений Google Analytics и Яндекс.Метрика.

1.8. Состав и условия сбора обезличенных данных с использованием программного обеспечения третьих лиц определяются непосредственно их правообладателями и могут включать:

данные браузера (тип, версия, cookie);
данные устройства и место его положения;
данные операционной системы (тип, версия, разрешение экрана);
данные запроса (время, источник перехода, IP-адрес).

1.9. Администрация не несет ответственность за порядок использования Обезличенных данных Пользователя третьими лицами.
`;

export default AgreementPage;
