import {StyleSheet} from 'react-native';
import {Colors, Typography} from '~styles';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    marginTop: 1,
    backgroundColor: Colors.GRAY_1E2127,
    paddingHorizontal: 20,
  },
  title: {
    ...Typography.SSP_SemiBold_15_FONT,
    flex: 1,
    color: Colors.GRAY_CBCBCB,
  },
  value: {
    ...Typography.SSP_Bold_14_FONT,
  },
});
