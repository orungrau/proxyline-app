import React, {useState} from 'react';
import {Dimensions, View} from 'react-native';
import styles from './styles';
import {Item} from '~pages/new-order-page/components/slider/components/item';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

interface Props {
  min: number;
  max: number;
  padding: number;
  onChangeValue: (value: number) => void;
  onValuesChangeFinish?: (value: number) => void;
}

const Slider: React.FC<Props> = ({
  min,
  max,
  padding,
  onChangeValue,
  onValuesChangeFinish,
}) => {
  const [value, setValue] = useState(min);

  const renderScale = () => {
    const items = [];
    for (let i = min; i <= max; i++) {
      items.push(
        <Item key={i} big={i === min || i === max} value={i} current={value} />,
      );
    }
    return items;
  };

  return (
    <View>
      <View
        style={[
          styles.column,
          {
            marginLeft: padding,
            marginRight: padding,
          },
        ]}>
        {renderScale()}
      </View>
      <View style={styles.container}>
        <MultiSlider
          trackStyle={styles.trackStyle}
          selectedStyle={styles.selectedStyle}
          markerStyle={styles.markerStyle}
          values={[value]}
          sliderLength={Dimensions.get('window').width - padding * 2}
          onValuesChange={values => {
            setValue(values[0]);
            onChangeValue(values[0]);
          }}
          onValuesChangeFinish={values => {
            if (onValuesChangeFinish) {
              onValuesChangeFinish(values[0]);
            }
          }}
          min={min}
          max={max}
          step={1}
          allowOverlap={false}
          snapped={true}
        />
      </View>
    </View>
  );
};

export default Slider;
