import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';
import {Colors, Styles} from '~styles';
import {Button} from '~components/button';

interface Props {}

const ConnectionCard: React.FC<Props> = ({}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerWrapper}>
          <View style={Styles.row}>
            <Image source={require('~assets/icons/connection-active.png')} />
            <Text style={styles.title}>Подключено</Text>
          </View>
          <Text style={styles.subtitle}>Скорость подключения</Text>
        </View>
        <Text style={styles.speedCountText}>
          12.18 <Text style={styles.speedText}>Mbit/s</Text>
        </Text>
      </View>
      <View style={styles.body}>
        <Button
          style={Styles.flex}
          title={'Купить прокси'}
          tintColor={Colors.CLEAN}
          textColor={Colors.PRIMARY}
        />
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>5 дней 6 часов</Text>
      </View>
    </View>
  );
};

export default ConnectionCard;
