import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import {Button} from '~components/button';
import {logoutAction} from '~stores/account/actions';
import {useDispatch} from 'react-redux';

interface Props {}

const SettingsPage: React.FC<Props> = ({}) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutAction());
  };
  return (
    <View style={styles.container}>
      <Button title={'Logout'} onPress={handleLogout} />
    </View>
  );
};

export default SettingsPage;
