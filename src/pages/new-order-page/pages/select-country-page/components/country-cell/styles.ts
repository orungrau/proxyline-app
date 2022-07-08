import {StyleSheet} from 'react-native';
import {Colors, Typography} from '~styles';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 44,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    ...Typography.SSP_SemiBold_14_FONT,
    flex: 1,
  },
  flagImage: {
    height: 12,
    width: 16,
    borderRadius: 1,
    marginRight: 10,
  },
  selectCircle: {
    backgroundColor: '#1E2127',
    height: 20,
    width: 20,
    borderRadius: 20 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectActive: {
    backgroundColor: Colors.PRIMARY,
    height: 12,
    width: 12,
    borderRadius: 12 / 2,
  },
});
