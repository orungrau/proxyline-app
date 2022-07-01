import {StyleSheet} from 'react-native';
import {Colors, Typography} from '~styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PRIMARY_BACKGROUND,
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
    height: 180,
  },
  button: {
    marginHorizontal: 20,
  },
  descOneText: {
    ...Typography.SSP_Regular_14_FONT,
    margin: 20,
    color: Colors.GRAY_CBCBCB,
  },
  descTwoWrapper: {
    backgroundColor: Colors.GRAY_1E2127,
    margin: 20,
    padding: 20,
    borderRadius: 14,
  },
  descTwoText: {
    ...Typography.SSP_SemiBold_13_FONT,
  },
});
