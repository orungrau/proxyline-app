import {StyleSheet} from 'react-native';
import {Colors, Typography} from '~styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PRIMARY_BACKGROUND,
  },
  header: {
    fontSize: 15,
    fontFamily: 'SourceSansPro-Bold',
    color: Colors.WHITE,
    textAlign: 'right',
    textAlignVertical: 'center',
    marginRight: 6,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  cell: {
    height: 40,
    paddingHorizontal: 30,
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
  finalPriceValue: {
    ...Typography.SSP_Bold_18_FONT,
  },
  flagImage: {
    height: 12,
    width: 16,
    borderRadius: 1,
    marginLeft: 6,
    marginRight: 10,
  },
  countWrapper: {
    flexDirection: 'row',
    overflow: 'hidden',
    borderRadius: 44,
  },
  countBlock: {
    height: 30,
    width: 40,
    backgroundColor: Colors.GRAY_1E2127,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 1,
  },
  countText: {
    ...Typography.SSP_SemiBold_13_FONT,
  },
  typeSelector: {
    width: 141,
    marginHorizontal: 0,
    marginVertical: 0,
  },
  button: {
    marginHorizontal: 20,
  },
  proxyCard: {
    marginHorizontal: 0,
    marginVertical: 15,
  },
  periodWrapper: {
    flexDirection: 'row',
    marginHorizontal: 30,
    marginBottom: -10,
  },
  periodActiveText: {
    ...Typography.SSP_SemiBold_12_FONT,
    color: Colors.GRAY_CBCBCB,
    flex: 1,
    textAlign: 'left',
  },
  periodMaxText: {
    ...Typography.SSP_SemiBold_12_FONT,
    color: Colors.GRAY_CBCBCB,
    flex: 1,
    textAlign: 'right',
  },
});
