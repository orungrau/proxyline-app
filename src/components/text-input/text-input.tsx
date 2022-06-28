import React from 'react';
import {
  View,
  Text,
  ViewStyle,
  TextInput as TextInputComponent,
  TextInputProps,
} from 'react-native';
import styles from './styles';
import {Colors} from '~styles';

interface Props extends TextInputProps {
  title?: string;
  style?: ViewStyle;
  placeholder?: string;
}

const TextInput: React.FC<Props> = props => {
  const {title, style} = props;
  return (
    <View style={[styles.container, style]}>
      {title ? <Text style={styles.title}>{title}</Text> : null}
      <View style={styles.inputWrapper}>
        <TextInputComponent
          {...props}
          style={styles.inputField}
          placeholderTextColor={Colors.GRAY_333842}
        />
      </View>
    </View>
  );
};

export default TextInput;
