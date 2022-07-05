import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Hyperlink from 'react-native-hyperlink';
import styles from './styles';

interface Props {
  data: {
    title: string;
    answer: string;
  };
}

const FAQCell: React.FC<Props> = ({data}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <TouchableOpacity onPress={handleOpen} style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{data.title}</Text>
        <Image source={require('~assets/icons/arrow-down.png')} />
      </View>
      {open ? (
        <Hyperlink linkDefault={true}>
          <Text style={styles.answer}>{data.answer}</Text>
        </Hyperlink>
      ) : null}
    </TouchableOpacity>
  );
};

export default FAQCell;
