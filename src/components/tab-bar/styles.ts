import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    height: 60,
    borderRadius: 14,
    backgroundColor: '#1D2026',
    left: 14,
    right: 14,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  tab: {
    height: '100%',
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabWrapper: {
    width: 60,
    height: 60,
  },
});
