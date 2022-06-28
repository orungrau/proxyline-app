import {StyleSheet} from 'react-native';
import {Colors, Typography} from '~styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: Colors.PRIMARY_BACKGROUND,
  },
  header: {
    height: 44,
    flexDirection: 'column-reverse',
    alignItems: 'center',
  },
  wrapper: {
    flex: 1,
    //alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    marginVertical: 8,
  },
  title: {
    ...Typography.SSP_SemiBold_22_FONT,
    marginBottom: 34,
    textAlign: 'center',
  },
  resetPasswordWrapper: {
    alignItems: 'flex-end',
  },
  resetPasswordText: {
    ...Typography.SSP_SemiBold_13_FONT,
    textDecorationLine: 'underline',
  },
  subButton: {
    alignItems: 'center',
    marginBottom: 24,
  },
  subButtonText: {
    ...Typography.SSP_Regular_14_FONT,
  },
  subButtonUnderline: {
    ...Typography.SSP_SemiBold_14_FONT,
    textDecorationLine: 'underline',
  },
});
