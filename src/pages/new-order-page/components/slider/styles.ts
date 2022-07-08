import {StyleSheet} from 'react-native';
import {Colors} from '~styles';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  column: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // bottom: -30,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  active: {
    textAlign: 'center',
    fontSize: 20,
    color: '#5e5e5e',
  },
  inactive: {
    textAlign: 'center',
    fontWeight: 'normal',
    color: '#bdc3c7',
  },
  line: {
    textAlign: 'center',
  },
  trackStyle: {
    backgroundColor: Colors.GRAY_1E2127,
    height: 6,
  },
  selectedStyle: {
    backgroundColor: Colors.PRIMARY,
  },
  markerStyle: {
    backgroundColor: Colors.PRIMARY,
    borderColor: Colors.BLACK,
    height: 20,
    width: 20,
    top: 2,
  },
});
