import React, {ReactNode} from 'react';
import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import styles from './styles';

interface Props {
  title: string;
  isArrow?: boolean;
  icon?: ImageSourcePropType;
  value?: string;
  style?: ViewStyle;
  view?: ReactNode;
  onPress?: () => void;
}

const ActionCell: React.FC<Props> = ({
  title,
  value,
  style,
  isArrow,
  icon,
  onPress,
  view,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <Text style={styles.title}>{title}</Text>
      {value ? <Text style={styles.value}>{value}</Text> : null}
      {isArrow ? (
        <Image source={require('~assets/icons/action-arrow.png')} />
      ) : null}
      {icon ? <Image source={icon} /> : null}
      {view ? view : null}
    </TouchableOpacity>
  );
};

export default ActionCell;
