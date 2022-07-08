import React from 'react';
import {View} from 'react-native';
import styles from './styles';

interface Props {
  value: number;
  current: number;
  big: boolean;
}

const Item: React.FC<Props> = ({value, current, big}) => {
  const checkActive = () => {
    return value <= current;
  };

  const bigStyle = {
    width: 4,
  };

  return (
    <>
      {checkActive() ? (
        <View style={[styles.active, big ? bigStyle : {}]} />
      ) : (
        <View style={[styles.normal, big ? bigStyle : {}]} />
      )}
    </>
  );
};

export default Item;
