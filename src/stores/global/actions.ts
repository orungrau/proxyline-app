import {AppThunk} from '~stores';
import {setLoading, setTabBarShow} from '~stores/global/index';

export const setGlobalLoading =
  (loading: boolean): AppThunk =>
  async dispatch => {
    dispatch(setLoading(loading));
  };

export const setTabBarShowAction =
  (show: boolean): AppThunk =>
  async dispatch => {
    dispatch(setTabBarShow(show));
  };
