import React, {useState} from 'react';
import {
  View,
  Text,
  ViewStyle,
  TextInput as TextInputComponent,
  TextInputProps,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from './styles';
import {Colors} from '~styles';

interface Props extends TextInputProps {
  title?: string;
  style?: ViewStyle;
  wrapStyle?: ViewStyle;
  placeholder?: string;
  isPassword?: boolean;
}

const TextInput: React.FC<Props> = props => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisible = () => setShowPassword(!showPassword);

  const {title, style, isPassword, wrapStyle} = props;
  return (
    <View style={[styles.container, style]}>
      {title ? <Text style={styles.title}>{title}</Text> : null}
      <View style={[styles.inputWrapper, wrapStyle]}>
        <TextInputComponent
          {...props}
          style={styles.inputField}
          placeholderTextColor={Colors.GRAY_333842}
          secureTextEntry={isPassword ? !showPassword : false}
        />
        {isPassword ? (
          <TouchableOpacity onPress={handleTogglePasswordVisible}>
            {showPassword ? (
              <Image
                style={styles.showHide}
                source={require('~assets/icons/hide.png')}
              />
            ) : (
              <Image
                style={styles.showHide}
                source={require('~assets/icons/show.png')}
              />
            )}
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

export default TextInput;
