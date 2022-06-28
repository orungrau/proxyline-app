import React from 'react';
import {ColorValue, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

interface Props {
  title: string;
  onPress?: () => void;
  tintColor?: ColorValue;
  textColor?: ColorValue;
}

const Button: React.FC<Props> = ({title, onPress, tintColor, textColor}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...styles.container,
        ...(tintColor ? {backgroundColor: tintColor} : {}),
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
