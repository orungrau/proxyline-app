import {StyleSheet} from 'react-native';
import {Colors, Typography} from '~styles';

export default StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  header: {
    height: 60,
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    backgroundColor: '#1D2026',
    borderTopRightRadius: 14,
    borderTopLeftRadius: 14,
  },
  titleText: {
    ...Typography.SSP_Bold_18_FONT,
  },
  idText: {
    textAlign: 'right',
    ...Typography.SSP_Regular_12_FONT,
    color: Colors.GRAY_CBCBCB,
  },
  tdBodyText: {
    ...Typography.SSP_SemiBold_12_FONT,
    color: Colors.GRAY_CBCBCB,
  },
  createDateText: {
    ...Typography.SSP_Regular_12_FONT,
    color: Colors.GRAY_CBCBCB,
  },
  createDateBodyText: {
    ...Typography.SSP_SemiBold_12_FONT,
    color: Colors.GRAY_CBCBCB,
  },
  earliestDateEndText: {
    textAlign: 'right',
    ...Typography.SSP_Regular_12_FONT,
    color: Colors.GRAY_CBCBCB,
  },
  earliestDateEndBodyText: {
    ...Typography.SSP_SemiBold_12_FONT,
    color: Colors.GRAY_CBCBCB,
  },
  body: {
    backgroundColor: '#1D2026',
    minHeight: 20,
    marginTop: 2,
    borderBottomRightRadius: 14,
    borderBottomLeftRadius: 14,
  },
  cell: {
    height: 40,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cellTitle: {
    ...Typography.SSP_SemiBold_15_FONT,
    color: Colors.GRAY_CBCBCB,
    flex: 1,
  },
  cellValue: {
    ...Typography.SSP_Bold_14_FONT,
  },
  flagImage: {
    height: 12,
    width: 16,
    borderRadius: 1,
    marginLeft: 6,
  },
});
