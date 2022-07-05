import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from '~navigations/routes';
import {DashboardPage} from '~pages/dashboard-page';
import {SettingsPage} from '~pages/settings-page';
import {screenOptions} from '~navigations/screenOptions';
import {AccountPage} from '~pages/settings-page/pages/account-page';
import {ChangePasswordPage} from '~pages/settings-page/pages/change-password-page';
import {WriteUsPage} from '~pages/settings-page/pages/write-us-page';
import {FAQPage} from '~pages/settings-page/pages/faq-page';
import {ProxyCheckPage} from '~pages/settings-page/pages/proxy-check-page';
import {ProxyCheckResultPage} from '~pages/settings-page/pages/proxy-check-page/pages/proxy-check-result-page';
import {SpeedTestPage} from '~pages/settings-page/pages/speed-test-page';
import {SpeedTestResultPage} from '~pages/settings-page/pages/speed-test-page/pages/speed-test-result-page';
import {ProxyPage} from '~pages/proxy-page';
import {OrdersPage} from '~pages/orders-page';
import {WalletPage} from '~pages/wallet-page';

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
          title: 'Прокси',
        }}
        name={Routes.App.Proxy}
        component={ProxyPage}
      />
      <StackNavigator.Screen
        options={{
          title: 'Заказы',
        }}
        name={Routes.App.Orders}
        component={OrdersPage}
      />
      <StackNavigator.Screen
        options={{
          title: 'Настройки',
        }}
        name={Routes.App.Settings}
        component={SettingsPage}
      />
      <StackNavigator.Screen
        options={{
          title: 'Аккаунт',
        }}
        name={Routes.App.Account}
        component={AccountPage}
      />
      <StackNavigator.Screen
        options={{
          title: 'Смена пароля',
        }}
        name={Routes.App.ChangePassword}
        component={ChangePasswordPage}
      />
      <StackNavigator.Screen
        options={{
          title: 'Написать нам',
        }}
        name={Routes.App.WriteUs}
        component={WriteUsPage}
      />
      <StackNavigator.Screen
        options={{
          title: 'Вопрос-ответ',
        }}
        name={Routes.App.FAQ}
        component={FAQPage}
      />
      <StackNavigator.Screen
        options={{
          title: 'Проверка прокси',
        }}
        name={Routes.App.ProxyCheck}
        component={ProxyCheckPage}
      />
      <StackNavigator.Screen
        options={{
          title: 'Результат',
        }}
        name={Routes.App.ProxyCheckResult}
        component={ProxyCheckResultPage}
      />
      <StackNavigator.Screen
        options={{
          title: 'Проверка скорости',
        }}
        name={Routes.App.SpeedTest}
        component={SpeedTestPage}
      />
      <StackNavigator.Screen
        options={{
          title: 'Результат',
        }}
        name={Routes.App.SpeedTestResult}
        component={SpeedTestResultPage}
      />
      <StackNavigator.Screen
        options={{
          title: 'Ваш баланс',
        }}
        name={Routes.App.Wallet}
        component={WalletPage}
      />
    </StackNavigator.Navigator>
  );
}
