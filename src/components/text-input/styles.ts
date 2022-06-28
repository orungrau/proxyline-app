import {StyleSheet} from 'react-native';
import {Colors, Typography} from '~styles';

export default StyleSheet.create({
  container: {
    // flex: 1,
  },
  title: {
    ...Typography.SSP_SemiBold_16_FONT,
    marginBottom: 8,
  },
  inputWrapper: {
    height: 44,
    backgroundColor: Colors.GRAY_1E2127,
    borderColor: Colors.GRAY_333842,
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  inputField: {
    color: Colors.WHITE,
  },
});
