import {StyleSheet} from 'react-native';
import {Colors, Typography} from '~styles';

export default StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  header: {
    height: 45,
    backgroundColor: Colors.GRAY_1E2127,
    borderTopRightRadius: 14,
    borderTopLeftRadius: 14,
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  body: {
    marginTop: 1,
    backgroundColor: Colors.GRAY_1E2127,
    borderBottomRightRadius: 14,
    borderBottomLeftRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 20,
  },
  ipText: {
    ...Typography.SSP_Bold_18_FONT,
    alignSelf: 'center',
  },
  portWrapper: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    alignSelf: 'center',
    backgroundColor: Colors.GRAY_333842,
    borderRadius: 20,
    alignItems: 'center',
    marginLeft: 6,
  },
  portText: {
    ...Typography.SSP_Bold_11_FONT,
  },
  typeWrapper: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    backgroundColor: Colors.PRIMARY,
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  typeText: {
    ...Typography.SSP_Bold_11_FONT,
    color: Colors.BLACK,
  },
  space: {
    marginTop: 14,
  },
  bodyTitle: {
    ...Typography.SSP_SemiBold_13_FONT,
    flex: 1,
    color: Colors.GRAY_CBCBCB,
  },
  bodyValue: {
    ...Typography.SSP_Bold_14_FONT,
  },
  invalidText: {
    textAlign: 'center',
    alignSelf: 'center',
    ...Typography.SSP_SemiBold_13_FONT,
    color: Colors.RED,
  },
});
