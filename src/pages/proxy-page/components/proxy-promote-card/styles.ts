import {StyleSheet} from 'react-native';
import {Colors, Typography} from '~styles';

export default StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 15,
  },
  header: {
    borderTopRightRadius: 14,
    borderTopLeftRadius: 14,
    height: 66,
    backgroundColor: '#1D2026',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  titleText: {
    ...Typography.SSP_Bold_18_FONT,
  },
  descText: {
    ...Typography.SSP_Regular_12_FONT,
    color: Colors.GRAY_CBCBCB,
  },
  body: {
    marginTop: 2,
    height: 44,
    backgroundColor: '#1D2026',
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  dayText: {
    flex: 1,
    ...Typography.SSP_Bold_16_FONT,
  },
  priceText: {
    ...Typography.SSP_Bold_16_FONT,
  },
  footer: {
    marginTop: 2,
    height: 44,
    backgroundColor: '#1D2026',
    borderBottomRightRadius: 14,
    borderBottomLeftRadius: 14,
  },
  button: {
    height: 44,
  },
  badgeWrapper: {
    top: -11,
    position: 'absolute',
    alignSelf: 'center',
    backgroundColor: Colors.PRIMARY,
    paddingHorizontal: 14,
    paddingVertical: 3,
    borderRadius: 8,
  },
  badgeText: {
    ...Typography.SSP_SemiBold_12_FONT,
    color: Colors.BLACK,
  },
});
