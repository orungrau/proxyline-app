import React, {ReactNode} from 'react';
import {Image, Text, TouchableOpacity, View, ViewStyle} from 'react-native';
import styles from './styles';
import {StackNavigationProp} from '@react-navigation/stack';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface Props {
  title: string;
  previous: boolean;
  navigation: StackNavigationProp<Record<string, object | undefined>>;
  headerLeft?:
    | ((props: {tintColor?: string | undefined}) => ReactNode)
    | undefined;
  headerRight?:
    | ((props: {tintColor?: string | undefined}) => ReactNode)
    | undefined;
  headerStyle?: ViewStyle;
}

const NavigationHeader = (props: Props) => {
  const insets = useSafeAreaInsets();
  const _s = {marginHorizontal: props.previous ? 0 : 24};

  return (
    <View style={{...styles.container, ...{height: 44 + insets.top}}}>
      <View style={styles.wrapper}>
        <View style={styles.blockWrapper}>
          {props.previous ? (
            <TouchableOpacity
              style={styles.backWrapper}
              onPress={() => {
                props.navigation.goBack();
              }}>
              <Image source={require('~assets/icons/back-arrow.png')} />
              <Text style={styles.backText}>Назад</Text>
            </TouchableOpacity>
          ) : null}
        </View>
        <View style={styles.centralWrapper}>
          <Text
            textBreakStrategy={'highQuality'}
            numberOfLines={2}
            style={[styles.titleLabel, _s]}>
            {props.title}
          </Text>
        </View>
        <View style={styles.blockWrapper} />
      </View>
    </View>
  );
};

export default NavigationHeader;
