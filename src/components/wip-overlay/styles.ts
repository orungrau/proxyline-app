import {StyleSheet} from 'react-native';
import {Typography} from '~styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    ...Typography.SSP_SemiBold_22_FONT,
    marginBottom: 34,
    textAlign: 'center',
  },
});
