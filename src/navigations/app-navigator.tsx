import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from '~navigations/routes';
import {DashboardPage} from '~pages/dashboard-page';
import {SettingsPage} from '~pages/settings-page';
import {screenOptions} from '~navigations/screenOptions';

interface Props {
  initialRouteName: string;
}

export function AppNavigator(props: Props) {
  const StackNavigator = createStackNavigator();
  return (
    <StackNavigator.Navigator
      screenOptions={screenOptions}
      initialRouteName={props.initialRouteName}>
      <StackNavigator.Screen
        options={{
          headerShown: false,
        }}
        name={Routes.App.Dashboard}
        component={DashboardPage}
      />
      <StackNavigator.Screen
        options={{
          title: 'Настройки',
        }}
        name={Routes.App.Settings}
        component={SettingsPage}
      />
    </StackNavigator.Navigator>
  );
}
