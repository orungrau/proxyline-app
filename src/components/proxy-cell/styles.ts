import {StyleSheet} from 'react-native';
import {Colors, Typography} from '~styles';

export default StyleSheet.create({
  container: {
    height: 64,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1D2026',
    marginVertical: 2,
    paddingHorizontal: 30,
  },
  flagImage: {
    width: 32,
    height: 24,
    borderRadius: 4,
    marginRight: 14,
  },
  countryText: {
    ...Typography.SSP_SemiBold_14_FONT,
    marginRight: 6,
  },
  daysWrapper: {
    backgroundColor: Colors.GRAY_333842,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  daysText: {
    ...Typography.SSP_Bold_11_FONT,
    color: Colors.GRAY_CBCBCB,
  },
  ipTypeWrapper: {
    backgroundColor: Colors.PRIMARY,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 20,
    marginRight: 6,
  },
  ipTypeText: {
    ...Typography.SSP_Bold_11_FONT,
    color: Colors.BLACK,
  },
  ipText: {
    ...Typography.SSP_Regular_12_FONT,
  },
  selectTouchZone: {
    padding: 14,
    marginRight: -14,
  },
  selectCircle: {
    backgroundColor: Colors.PRIMARY_BACKGROUND,
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
  arrow: {
    tintColor: '#636363',
  },
});
