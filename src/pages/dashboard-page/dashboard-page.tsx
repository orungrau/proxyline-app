import React, {useEffect} from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import {IpApiSdk} from '~libs/ip-api-sdk';

interface Props {}

const DashboardPage: React.FC<Props> = ({}) => {
  useEffect(() => {
    IpApiSdk.getIpData().then();
  }, []);

  return (
    <ImageBackground
      resizeMode={'cover'}
      source={require('~assets/images/background-main.png')}
      style={styles.container}>
      <SafeAreaView>
        <View style={styles.header}>
          <Image
            style={styles.logo}
            source={require('~assets/icons/logo-simple.png')}
          />
        </View>
        <View style={styles.ipWrapper}>
          <Text style={styles.title}>Ваш IP</Text>
          <Text style={styles.ip}>136.117.121.183</Text>
          <View style={styles.countryWrapper}>
            <Text style={styles.country}>United States of America</Text>
          </View>
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity>
            <Image
              source={require('~assets/icons/dashboard-button-disable.png')}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default DashboardPage;
