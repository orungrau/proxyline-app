import {StyleSheet} from 'react-native';
import {Colors, Typography} from '~styles';

export default StyleSheet.create({
  container: {
    flexDirection: 'column-reverse',
    paddingBottom: 4,
    paddingHorizontal: 30,
    height: 44,
    backgroundColor: Colors.PRIMARY_BACKGROUND,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 44,
  },
  row: {
    flexDirection: 'row',
  },
  height: {
    height: 44,
  },
  titleLabel: {
    ...Typography.PAGE_TITLE_FONT,
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  left: {
    height: 44,
    flexDirection: 'column-reverse',
  },
  right: {
    height: 44,
    flexDirection: 'column-reverse',
    marginRight: 30,
  },
  backWrapper: {
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backText: {
    ...Typography.SSP_SemiBold_14_FONT,
    color: Colors.GRAY_CBCBCB,
  },
  centralWrapper: {
    flex: 1,
    paddingHorizontal: 8,
  },
  blockWrapper: {
    width: '25%',
  },
});
