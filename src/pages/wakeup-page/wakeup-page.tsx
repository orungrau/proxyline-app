import React, {useEffect} from 'react';
import TabBarNavigator from '~navigations/tabs-navigator';
import {appWakeup} from '~stores/actions';
import {useDispatch} from 'react-redux';
import {useAppSelector} from '~stores';
import {LoadingOverlay} from '~components/loading-overlay';

interface Props {}

const WakeupPage: React.FC<Props> = ({}) => {
  const dispatch = useDispatch();
  const {wakeupMatrix} = useAppSelector(s => s.global);

  useEffect(() => {
    dispatch(appWakeup());
  }, []);

  if (wakeupMatrix < 5) {
    return <LoadingOverlay />;
  }

  return <TabBarNavigator />;
};

export default WakeupPage;
