import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import {ConnectionCard} from '~pages/dashboard-page/components/connection-card';
import {useAppSelector} from '~stores';
import {LoadingOverlay} from '~components/loading-overlay';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import useTabBarVisible from '~hooks/useTabBarVisible';

interface Props {}

const DashboardPage: React.FC<Props> = ({}) => {
  useTabBarVisible(true);
  const dashboard = useAppSelector(s => s.dashboard);

  const insets = useSafeAreaInsets();
  const topInsert = {marginTop: insets.bottom === 0 ? 20 : 0};

  return (
    <ImageBackground
      resizeMode={'cover'}
      source={require('~assets/images/background-main.png')}
      style={styles.container}>
      <SafeAreaView style={topInsert}>
        <View style={styles.header}>
          <Image
            style={styles.logo}
            source={require('~assets/icons/logo-simple.png')}
          />
        </View>
        {dashboard.country ? (
          <View style={styles.ipWrapper}>
            <Text style={styles.title}>Ваш IP</Text>
            <Text style={styles.ip}>{dashboard.country!.ip}</Text>
            <View style={styles.countryWrapper}>
              <Text style={styles.country}>{dashboard.country!.country}</Text>
              <Image
                style={styles.flagImage}
                source={{
                  uri: `https://countryflagsapi.com/png/${
                    dashboard.country!.countryTag
                  }`,
                }}
              />
            </View>
          </View>
        ) : null}
        <View style={styles.buttonWrapper}>
          <TouchableOpacity>
            <Image
              source={require('~assets/icons/dashboard-button-disable.png')}
            />
          </TouchableOpacity>
        </View>
        <ConnectionCard />
      </SafeAreaView>
      {dashboard.loading ? (
        <View style={styles.overlay}>
          <LoadingOverlay />
        </View>
      ) : null}
    </ImageBackground>
  );
};

export default DashboardPage;
