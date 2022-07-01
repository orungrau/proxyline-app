import {StyleSheet} from 'react-native';
import {Colors, Typography} from '~styles';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.GRAY_1E2127,
    height: 32,
    borderRadius: 32 / 2,
    marginHorizontal: 20,
    marginVertical: 10,
    alignItems: 'center',
  },
  tabWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 24,
    margin: 4,
  },
  tabWrapperSelect: {
    backgroundColor: '#FFF2',
    borderRadius: 32 / 2,
  },
  unselectedText: {
    ...Typography.SSP_SemiBold_12_FONT,
    color: Colors.GRAY_CBCBCB,
    textAlign: 'center',
  },
  selectedText: {
    ...Typography.SSP_SemiBold_12_FONT,
    textAlign: 'center',
  },
});
