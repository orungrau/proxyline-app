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
  button: {
    margin: 20,
  },
  password: {
    ...Typography.SSP_Bold_14_FONT,
    marginRight: 8,
  },
  showHide: {
    tintColor: Colors.WHITE,
  },
});
