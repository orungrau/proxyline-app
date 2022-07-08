import React from 'react';
import {FlatList} from 'react-native';
import {useAppSelector} from '~stores';
import {ProxyCell} from '~components/proxy-cell';
import {useDispatch} from 'react-redux';
import {setSelectProxyId} from '~stores/dashboard';
import useTabBarVisible from '~hooks/useTabBarVisible';

interface Props {}

const MyProxiesPage: React.FC<Props> = ({}) => {
  useTabBarVisible(false);
  const dispatch = useDispatch();
  const {proxies} = useAppSelector(s => s.proxy);
  const {selectProxyId} = useAppSelector(s => s.dashboard);

  return (
    <FlatList
      data={proxies}
      renderItem={({item}) => (
        <ProxyCell
          selectorActive={item.id === selectProxyId}
          selectorShow={true}
          proxy={item}
          selectorOnPress={() => dispatch(setSelectProxyId(item.id))}
        />
      )}
    />
  );
};

export default MyProxiesPage;
