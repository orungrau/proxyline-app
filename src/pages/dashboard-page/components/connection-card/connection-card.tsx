import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';
import {Colors, Styles} from '~styles';
import {Button} from '~components/button';

interface Props {}

const ConnectionCard: React.FC<Props> = ({}) => {
  const showSpeed = false;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerWrapper}>
          <View style={Styles.row}>
            <Image source={require('~assets/icons/connection-null.png')} />
            <Text style={styles.title}>Нет подключения</Text>
          </View>
          <Text style={styles.subtitle}>
            Приобретите прокси для подключения
          </Text>
        </View>
        {showSpeed ? (
          <>
            <Text style={styles.speedCountText}>
              12.18 <Text style={styles.speedText}>Mbit/s</Text>
            </Text>
          </>
        ) : null}
      </View>
      <View style={styles.body}>
        <Button
          style={Styles.flex}
          title={'Купить прокси'}
          tintColor={Colors.CLEAN}
          textColor={Colors.PRIMARY}
        />
      </View>
      {showSpeed ? (
        <View style={styles.footer}>
          <Text style={styles.footerText}>5 дней 6 часов</Text>
        </View>
      ) : null}
    </View>
  );
};

export default ConnectionCard;
