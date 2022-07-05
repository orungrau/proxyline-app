import {StyleSheet} from 'react-native';
import {Colors, Typography} from '~styles';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionHeader: {
    ...Typography.SSP_Bold_18_FONT,
    marginHorizontal: 20,
  },
  noWrapper: {
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: '#3E361E',
    padding: 20,
    borderRadius: 14,
  },
  noTitle: {
    ...Typography.SSP_Bold_18_FONT,
    color: Colors.PRIMARY,
  },
  noDesc: {
    marginTop: 6,
    ...Typography.SSP_Regular_12_FONT,
  },
});
