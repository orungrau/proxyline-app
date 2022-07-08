import React from 'react';
import {TransitionPresets} from '@react-navigation/stack';
import {NavigationHeader} from '~components/navigation-header';
import {Platform} from 'react-native';

export const Header = {
  header: (params: any) => {
    const {scene, previous, navigation} = params;
    const {options} = scene.descriptor;
    const title =
      options.headerTitle !== undefined
        ? options.headerTitle
        : options.title !== undefined
        ? options.title
        : scene.route.name;
    return (
      <NavigationHeader
        title={title}
        previous={!!previous}
        navigation={navigation}
        headerRight={options.headerRight}
        headerLeft={options.headerLeft}
        headerStyle={options.headerStyle}
      />
    );
  },
};

export const screenOptions = {
  gestureEnabled: Platform.OS === 'ios',
  ...TransitionPresets.SlideFromRightIOS,
  ...Header,
};
