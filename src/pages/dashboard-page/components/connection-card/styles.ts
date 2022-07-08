import {StyleSheet} from 'react-native';
import {Typography} from '~styles';

export default StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  header: {
    height: 60,
    backgroundColor: '#1D2026',
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    flexDirection: 'row',
  },
  headerWrapper: {
    flex: 1,
    alignSelf: 'center',
    marginHorizontal: 20,
  },
  title: {
    marginLeft: 6,
    ...Typography.SSP_SemiBold_15_FONT,
  },
  subtitle: {
    ...Typography.SSP_Regular_12_FONT,
  },
  speedCountText: {
    ...Typography.SSP_Bold_18_FONT,
    marginHorizontal: 20,
    alignSelf: 'center',
  },
  speedText: {
    ...Typography.SSP_SemiBold_13_FONT,
  },
  body: {
    marginTop: 1,
    backgroundColor: '#1D2026',
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,
    overflow: 'hidden',
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    alignSelf: 'center',
    height: 22,
    backgroundColor: '#1D2026',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  footerText: {
    ...Typography.SSP_SemiBold_12_FONT,
  },
});
