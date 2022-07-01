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
  button: {
    margin: 20,
  },
  desc: {
    ...Typography.SSP_SemiBold_15_FONT,
    color: Colors.GRAY_CBCBCB,
    margin: 20,
  },
  descRegular: {
    ...Typography.SSP_Regular_15_FONT,
    color: Colors.GRAY_CBCBCB,
    margin: 20,
  },
});
