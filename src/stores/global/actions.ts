import {AppThunk} from '~stores';
import {setLoading} from '~stores/global/index';

export const setGlobalLoading =
  (loading: boolean): AppThunk =>
  async dispatch => {
    dispatch(setLoading(loading));
  };
