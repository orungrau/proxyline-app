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
    alignItems: 'center',
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  inputField: {
    flex: 1,
    color: Colors.WHITE,
    marginRight: 8,
  },
  showHide: {
    tintColor: Colors.WHITE,
  },
});
