import {StyleSheet} from 'react-native';
import {Colors, Typography} from '~styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PRIMARY_BACKGROUND,
    paddingHorizontal: 30,
  },
  scroll: {
    flex: 1,
    marginBottom: 8,
  },
  text: {
    ...Typography.SSP_Regular_14_FONT,
  },
});
