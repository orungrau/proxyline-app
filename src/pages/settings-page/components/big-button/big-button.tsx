import React from 'react';
import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';

interface Props {
  title: string;
  icon: ImageSourcePropType;
  onPress?: () => void;
}

const BigButton: React.FC<Props> = ({title, icon, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.wrapper}>
        <Text numberOfLines={2} style={styles.title}>
          {title}
        </Text>
        <Image source={icon} />
      </View>
    </TouchableOpacity>
  );
};

export default BigButton;
