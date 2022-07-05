import {StyleSheet} from 'react-native';
import * as Colors from '~styles/colors';

export default StyleSheet.create({
  container: {
    margin: 20,
    borderRadius: 14,
    overflow: 'hidden',
  },
  body: {
    backgroundColor: '#1D2026',
    height: 78,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  currencyText: {
    fontSize: 20,
    fontFamily: 'SourceSansPro-SemiBold',
    color: Colors.GRAY_CBCBCB,
    marginRight: 10,
  },
  balanceText: {
    fontSize: 40,
    fontFamily: 'SourceSansPro-SemiBold',
    color: Colors.WHITE,
  },
  footer: {
    backgroundColor: '#1D2026',
    height: 44,
    marginTop: 2,
  },
  button: {
    height: 44,
  },
});
