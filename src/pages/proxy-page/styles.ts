import {StyleSheet} from 'react-native';
import {Colors} from '~styles';

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
});
