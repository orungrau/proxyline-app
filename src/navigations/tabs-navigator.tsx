import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Routes} from '~navigations/routes';
import {AppNavigator} from '~navigations/app-navigator';
import {Colors} from '~styles';
import {TabBar} from '~components/tab-bar';

const Tab = createBottomTabNavigator();

export default function TabBarNavigator() {
  return (
    <Tab.Navigator
      tabBar={props => <TabBar {...props} />}
      tabBarOptions={{
        style: {
          backgroundColor: Colors.PRIMARY_BACKGROUND,
          elevation: 0,
          shadowOpacity: 0,
          borderTopWidth: 0,
        },
      }}>
      <Tab.Screen name={Routes.Tabs.DashboardTab}>
        {props => (
          <AppNavigator initialRouteName={Routes.App.Dashboard} {...props} />
        )}
      </Tab.Screen>
      <Tab.Screen name={Routes.Tabs.ProxiesTab}>
        {props => (
          <AppNavigator initialRouteName={Routes.App.Proxy} {...props} />
        )}
      </Tab.Screen>
      <Tab.Screen name={Routes.Tabs.OrdersTab}>
        {props => (
          <AppNavigator initialRouteName={Routes.App.Orders} {...props} />
        )}
      </Tab.Screen>
      <Tab.Screen name={Routes.Tabs.SettingsTab}>
        {props => (
          <AppNavigator initialRouteName={Routes.App.Settings} {...props} />
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
