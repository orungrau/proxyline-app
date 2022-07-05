import React from 'react';
import {Image, ImageSourcePropType, Text, View} from 'react-native';
import styles from './styles';
import {Colors, Styles} from '~styles';
import {Button} from '~components/button';

interface Props {
  topTitle: string;
  title: string;
  desc: string;
  image: ImageSourcePropType;
  price: string;
}

const ProxyPromoteCard: React.FC<Props> = ({
  topTitle,
  title,
  desc,
  image,
  price,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={Styles.row}>
          <View style={Styles.flex}>
            <Text style={styles.titleText}>{title}</Text>
            <Text style={styles.descText}>{desc}</Text>
          </View>
          <Image source={image} />
        </View>
      </View>
      <View style={styles.body}>
        <Text style={styles.dayText}>5 дней</Text>
        <Text style={styles.priceText}>$ {price}</Text>
      </View>
      <View style={styles.footer}>
        <Button
          style={styles.button}
          title={'Подробнее'}
          textColor={Colors.PRIMARY}
          tintColor={Colors.CLEAN}
        />
      </View>
      <View style={styles.badgeWrapper}>
        <Text style={styles.badgeText}>{topTitle}</Text>
      </View>
    </View>
  );
};

export default ProxyPromoteCard;
