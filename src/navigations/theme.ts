import {Theme} from '@react-navigation/native/src/types';
import {Colors} from '~styles';

export const NavigationTheme: Theme = {
  dark: true,
  colors: {
    primary: Colors.PRIMARY,
    background: Colors.PRIMARY_BACKGROUND,
    card: Colors.PRIMARY_BACKGROUND,
    text: 'rgb(229, 229, 231)',
    border: 'rgb(39, 39, 41)',
    notification: 'rgb(255, 69, 58)',
  },
};
