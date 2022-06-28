import {StyleSheet} from 'react-native';
import {Colors} from '~styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PRIMARY_BACKGROUND,
  },
  buttonsWrapper: {
    flexDirection: 'row',
    paddingHorizontal: 13,
    marginTop: 10,
    marginBottom: 20,
  },
  space: {
    height: 10,
  },
  logout: {
    marginHorizontal: 20,
  },
});
