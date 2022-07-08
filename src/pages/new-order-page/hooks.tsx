import {ViewStyle} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const useBottomInsertStyle = (): ViewStyle => {
  const insets = useSafeAreaInsets();
  return {marginBottom: insets.bottom === 0 ? 14 : 0};
};
