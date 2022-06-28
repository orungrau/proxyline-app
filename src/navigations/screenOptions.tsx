import React from 'react';
import {TransitionPresets} from '@react-navigation/stack';
import {NavigationHeader} from '~components/navigation-header';

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
  gestureEnabled: true,
  ...TransitionPresets.SlideFromRightIOS,
  ...Header,
};
