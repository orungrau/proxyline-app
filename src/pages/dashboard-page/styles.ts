import {StyleSheet} from 'react-native';
import {Colors, Typography} from '~styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PRIMARY_BACKGROUND,
  },
  header: {
    height: 76,
    paddingTop: 20,
    paddingBottom: 40,
    alignItems: 'center',
  },
  logo: {
    width: 87.72,
    height: 16,
  },
  ipWrapper: {
    marginTop: 30,
    alignItems: 'center',
  },
  title: {
    ...Typography.SSP_Regular_15_FONT,
  },
  ip: {
    ...Typography.SSP_Bold_24_FONT,
    marginTop: 10,
  },
  countryWrapper: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  flagImage: {
    height: 12,
    width: 16,
    borderRadius: 1,
    marginLeft: 6,
  },
  country: {
    ...Typography.SSP_SemiBold_14_FONT,
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 70,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
