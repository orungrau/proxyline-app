import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import {Styles} from '~styles';
import {
  ProxyCheckResult,
  ProxyCheckResultAnonTitle,
} from '~libs/proxyline-sdk/models/proxy-check-result';

interface Props {
  data: ProxyCheckResult;
}

const CheckResultCell: React.FC<Props> = ({data}) => {
  const isInvalid = !data.valid;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={[Styles.row, Styles.flex]}>
          <Text style={styles.ipText}>{data.ip}</Text>
          <View style={styles.portWrapper}>
            <Text style={styles.portText}>{data.port}</Text>
          </View>
        </View>
        {isInvalid ? null : (
          <View style={styles.typeWrapper}>
            <Text style={styles.typeText}>
              {data.protocol.toLocaleUpperCase()}
            </Text>
          </View>
        )}
      </View>
      <View style={styles.body}>
        {isInvalid ? (
          <Text style={styles.invalidText}>Невалидный</Text>
        ) : (
          <>
            <View style={Styles.row}>
              <Text style={styles.bodyTitle}>Скорость</Text>
              <Text style={styles.bodyValue}>
                {data.data.connection_time} сек
              </Text>
            </View>
            <View style={[Styles.row, styles.space]}>
              <Text style={styles.bodyTitle}>Анонимность</Text>
              <Text style={styles.bodyValue}>
                {ProxyCheckResultAnonTitle[data.data.anonymity_level]}
              </Text>
            </View>
          </>
        )}
      </View>
    </View>
  );
};

export default CheckResultCell;
