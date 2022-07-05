import {StyleSheet} from 'react-native';
import {Colors, Typography} from '~styles';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.GRAY_1E2127,
    marginVertical: 1,
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
  header: {
    flexDirection: 'row',
  },
  title: {
    flex: 1,
    ...Typography.SSP_SemiBold_15_FONT,
    color: Colors.GRAY_CBCBCB,
    marginRight: 10,
  },
  answer: {
    ...Typography.SSP_Regular_12_FONT,
    marginTop: 10,
  },
});
