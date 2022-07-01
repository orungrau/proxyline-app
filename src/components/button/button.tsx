import React from 'react';
import {ColorValue, Text, TouchableOpacity, ViewStyle} from 'react-native';
import styles from './styles';

interface Props {
  style?: ViewStyle | ViewStyle[];
  title: string;
  onPress?: () => void;
  tintColor?: ColorValue;
  textColor?: ColorValue;
}

const Button: React.FC<Props> = ({
  title,
  onPress,
  tintColor,
  textColor,
  style,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...styles.container,
        ...(tintColor ? {backgroundColor: tintColor} : {}),
        ...style,
      }}>
      <Text
        style={{
          ...styles.label,
          ...(textColor ? {color: textColor} : {}),
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
