import React from 'react';
import {ScrollView, View} from 'react-native';
import styles from './styles';
import {CheckResultCell} from '~pages/settings-page/pages/proxy-check-page/pages/proxy-check-result-page/components/check-result-cell';
import {ProxyCheckResult} from '~libs/proxyline-sdk/models/proxy-check-result';
import {RouteProp} from '@react-navigation/native';
import {Styles} from '~styles';
import {SegmentBar} from '~components/segment-bar';

interface Props {
  route?: RouteProp<any, any>;
}

const ProxyCheckResultPage: React.FC<Props> = ({route}) => {
  const [tabIndex, setTabIndex] = React.useState(1);
  const data: ProxyCheckResult[] = route!.params!.data;

  let proxies: ProxyCheckResult[] = [];
  switch (tabIndex) {
    case 0:
      proxies = data.filter(i => i.valid);
      break;
    case 2:
      proxies = data.filter(i => !i.valid);
      break;
    default:
      proxies = data;
      break;
  }

  return (
    <View style={styles.container}>
      <SegmentBar
        tabs={[
          `Валидные ${data.filter(i => i.valid).length}`,
          'Все',
          `Невалидные ${data.filter(i => !i.valid).length}`,
        ]}
        defaultIndex={1}
        onChangeIndex={index => setTabIndex(index)}
      />
      <ScrollView style={Styles.flex}>
        {proxies.map(i => (
          <CheckResultCell data={i} />
        ))}
      </ScrollView>
    </View>
  );
};

export default ProxyCheckResultPage;
