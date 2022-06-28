import React from 'react';
import {NavigationService} from '~navigations/service';
import {
  NavigationContainer as NavigationContainerComponent,
  NavigationContainerProps,
} from '@react-navigation/native';
import {NavigationTheme} from '~navigations/theme';

export const NavigationContainer: React.FC<NavigationContainerProps> = ({
  children,
}) => {
  return (
    <NavigationContainerComponent
      theme={NavigationTheme}
      ref={NavigationService.shared().navigationRef}>
      {children}
    </NavigationContainerComponent>
  );
};
