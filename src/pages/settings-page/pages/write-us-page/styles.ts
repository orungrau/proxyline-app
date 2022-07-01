import {StyleSheet} from 'react-native';
import {Colors, Typography} from '~styles';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    ...Typography.SSP_Bold_18_FONT,
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 14,
  },
  textInput: {
    marginHorizontal: 20,
  },
  wrap: {
    height: 200,
  },
  desc: {
    ...Typography.SSP_Regular_14_FONT,
    color: Colors.GRAY_CBCBCB,
    marginHorizontal: 20,
    marginTop: 24,
  },
  button: {
    marginHorizontal: 20,
  },
});
