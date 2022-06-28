import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './routes';
import {SignInPage} from '~pages/sign-in-page';
import {SignUpPage} from '~pages/sign-up-page';
import {VerificationPage} from '~pages/verification-page';
import {PasswordResetPage} from '~pages/password-reset-page';
import {AgreementPage} from '~pages/agreement-page';
import {screenOptions} from '~navigations/screenOptions';

export function AuthNavigator() {
  const StackNavigator = createStackNavigator();
  return (
    <StackNavigator.Navigator
      screenOptions={{
        headerShown: false,
        ...screenOptions,
      }}>
      <StackNavigator.Screen name={Routes.Auth.SignIn} component={SignInPage} />
      <StackNavigator.Screen name={Routes.Auth.SignUp} component={SignUpPage} />
      <StackNavigator.Screen
        name={Routes.Auth.VerificationPage}
        component={VerificationPage}
      />
      <StackNavigator.Screen
        name={Routes.Auth.PasswordReset}
        component={PasswordResetPage}
      />
      <StackNavigator.Screen
        options={{
          headerShown: true,
          title: 'Политика конфиденциальности',
        }}
        name={Routes.Auth.Agreement}
        component={AgreementPage}
      />
    </StackNavigator.Navigator>
  );
}
