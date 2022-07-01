import React from 'react';
import {Image, ImageRequireSource, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Routes} from '~navigations';
import {CommonActions} from '@react-navigation/native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {useAppSelector} from '~stores';
import {getTabBarShow} from '~stores/global/selectors';

const TabBar: React.FC<BottomTabBarProps> = props => {
  const show = useAppSelector(getTabBarShow());

  const insets = useSafeAreaInsets();

  const {state} = props;
  const focused = state.routeNames[state.index];

  const createTab = (
    route: string,
    normal: ImageRequireSource,
    active: ImageRequireSource,
  ) => {
    const action = () => {
      const {routeNames, index} = state;
      const {navigation} = props;

      if (routeNames[index] === route) {
        const event = navigation.emit({
          type: 'tabPress',
          canPreventDefault: true,
        });

        if (routeNames[index] !== route && !event.defaultPrevented) {
          navigation.dispatch({
            ...CommonActions.navigate(route),
          });
        }
      } else {
        props.navigation.navigate(route);
      }
    };

    return (
      <TouchableOpacity style={styles.tab} onPress={action}>
        <View style={styles.tabWrapper}>
          <Image source={focused === route ? active : normal} />
        </View>
      </TouchableOpacity>
    );
  };

  const bottomStyle = {bottom: insets.bottom === 0 ? 14 : insets.bottom};

  if (!show) {
    return null;
  }

  return (
    <>
      <View style={[styles.container, bottomStyle]}>
        <View style={styles.container}>
          {createTab(
            Routes.Tabs.DashboardTab,
            require('~assets/icons/tabs/tab-bar-dashboard-normal.png'),
            require('~assets/icons/tabs/tab-bar-dashboard-active.png'),
          )}
          {createTab(
            Routes.Tabs.ProxiesTab,
            require('~assets/icons/tabs/tab-bar-orders-normal.png'),
            require('~assets/icons/tabs/tab-bar-orders-active.png'),
          )}
          {createTab(
            Routes.Tabs.OrdersTab,
            require('~assets/icons/tabs/tab-bar-proxies-normal.png'),
            require('~assets/icons/tabs/tab-bar-proxies-active.png'),
          )}
          {createTab(
            Routes.Tabs.SettingsTab,
            require('~assets/icons/tabs/tab-bar-settings-normal.png'),
            require('~assets/icons/tabs/tab-bar-settings-active.png'),
          )}
        </View>
      </View>
    </>
  );
};

export default TabBar;
