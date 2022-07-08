import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {Colors, Styles} from '~styles';
import {Button} from '~components/button';
import {useAppSelector} from '~stores';
import {ProxyCell} from '~components/proxy-cell';
import {NavigationService, Routes} from '~navigations';

interface Props {}

const ConnectionCard: React.FC<Props> = ({}) => {
  const {proxies} = useAppSelector(s => s.proxy);
  const {selectProxyId} = useAppSelector(s => s.dashboard);

  const selectProxy = selectProxyId
    ? proxies.filter(f => f.id === selectProxyId)[0]
    : undefined;

  const showSpeed = false;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerWrapper}>
          <View style={Styles.row}>
            <Image
              source={
                selectProxy
                  ? require('~assets/icons/connection-deactive.png')
                  : require('~assets/icons/connection-null.png')
              }
            />
            <Text style={styles.title}>Нет подключения</Text>
          </View>
          <Text style={styles.subtitle}>
            {selectProxy
              ? 'Нажмите на кнопку чтобы подключить'
              : 'Приобретите прокси для подключения'}
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
        {selectProxy ? (
          <TouchableOpacity
            onPress={() => NavigationService.navigate(Routes.App.Proxies)}>
            <ProxyCell isArrow={true} proxy={selectProxy} />
          </TouchableOpacity>
        ) : (
          <Button
            style={Styles.flex}
            title={'Купить прокси'}
            tintColor={Colors.CLEAN}
            textColor={Colors.PRIMARY}
          />
        )}
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
