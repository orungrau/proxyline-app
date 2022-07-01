import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';

interface Props {
  defaultIndex: number;
  tabs: string[];
  onChangeIndex: (index: number) => void;
}

const SegmentBar: React.FC<Props> = ({tabs, defaultIndex, onChangeIndex}) => {
  const [index, setIndex] = useState(defaultIndex);

  const handleChangeIndex = (_index: number) => {
    setIndex(_index);
    onChangeIndex(_index);
  };

  return (
    <View style={styles.container}>
      {tabs.map((i, n) => (
        <TouchableOpacity
          onPress={() => handleChangeIndex(n)}
          key={String(n)}
          style={[
            styles.tabWrapper,
            index === n ? styles.tabWrapperSelect : null,
          ]}>
          <Text
            style={index === n ? styles.selectedText : styles.unselectedText}>
            {i}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default SegmentBar;
