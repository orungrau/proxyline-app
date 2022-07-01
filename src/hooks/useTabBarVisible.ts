import {useFocusEffect} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {setTabBarShowAction} from '~stores/global/actions';

const useTabBarVisible = (visible: boolean) => {
  const dispatch = useDispatch();

  useFocusEffect(() => {
    setTimeout(() => {
      dispatch(setTabBarShowAction(visible));
    });
  });
};

export default useTabBarVisible;
