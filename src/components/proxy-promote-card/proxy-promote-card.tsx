import React from 'react';
import {Image, ImageSourcePropType, Text, View, ViewStyle} from 'react-native';
import styles from './styles';
import {Colors, Styles} from '~styles';
import {Button} from '~components/button';

interface Props {
  topTitle: string;
  title: string;
  desc: string;
  image: ImageSourcePropType;
  price: string;
  short?: boolean;
  style?: ViewStyle;
  onPress?: () => void;
}

const ProxyPromoteCard: React.FC<Props> = ({
  topTitle,
  title,
  desc,
  image,
  price,
  short,
  style,
  onPress,
}) => {
  const shortStyle = {
    borderRadius: 14,
  };

  return (
    <View style={[styles.container, style]}>
      <View style={[styles.header, !short ? {} : shortStyle]}>
        <View style={Styles.row}>
          <View style={Styles.flex}>
            <Text style={styles.titleText}>{title}</Text>
            <Text style={styles.descText}>{desc}</Text>
          </View>
          <Image source={image} />
        </View>
      </View>
      {!short ? (
        <>
          <View style={styles.body}>
            <Text style={styles.dayText}>5 дней</Text>
            <Text style={styles.priceText}>$ {price}</Text>
          </View>
          <View style={styles.footer}>
            <Button
              onPress={onPress}
              style={styles.button}
              title={'Подробнее'}
              textColor={Colors.PRIMARY}
              tintColor={Colors.CLEAN}
            />
          </View>
        </>
      ) : null}
      <View style={styles.badgeWrapper}>
        <Text style={styles.badgeText}>{topTitle}</Text>
      </View>
    </View>
  );
};

export default ProxyPromoteCard;
