import {StyleSheet} from 'react-native';
import {Typography} from '~styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  noWrapper: {
    marginHorizontal: 40,
    paddingBottom: 100,
  },
  noHeader: {
    alignItems: 'center',
    padding: 20,
    borderTopRightRadius: 14,
    borderTopLeftRadius: 14,
    backgroundColor: '#1D2026',
  },
  noBody: {
    marginTop: 2,
    borderBottomRightRadius: 14,
    borderBottomLeftRadius: 14,
    backgroundColor: '#1D2026',
  },
  noTitle: {
    ...Typography.SSP_Bold_18_FONT,
    textAlign: 'center',
  },
  noDesc: {
    marginTop: 6,
    ...Typography.SSP_Regular_12_FONT,
    textAlign: 'center',
  },
  noButton: {
    height: 44,
  },
});
