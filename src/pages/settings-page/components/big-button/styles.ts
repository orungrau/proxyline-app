import {StyleSheet} from 'react-native';
import {Colors, Typography} from '~styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    height: 64,
    borderRadius: 14,
    backgroundColor: Colors.GRAY_1E2127,
    marginHorizontal: 7,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    marginRight: 14,
    ...Typography.SSP_SemiBold_14_FONT,
    color: Colors.PRIMARY,
  },
});
