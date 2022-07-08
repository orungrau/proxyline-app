import React, {useState} from 'react';
import {FlatList} from 'react-native';
import {useAppSelector} from '~stores';
import {CountryResponseSchema} from '~libs/proxyline-sdk/models';
import {CountryCell} from '~pages/new-order-page/pages/select-country-page/components/country-cell';
import styles from '~pages/settings-page/pages/write-us-page/styles';
import {Colors, Styles} from '~styles';
import {Button} from '~components/button';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useBottomInsertStyle} from '~pages/new-order-page/hooks';
import {NavigationService} from '~navigations';
import {useDispatch} from 'react-redux';
import {setCountryIndex} from '~stores/newOrder';

interface Props {}

const SelectCountryPage: React.FC<Props> = ({}) => {
  const dispatch = useDispatch();

  const {countryIndex} = useAppSelector(s => s.newOrder);
  const {countries} = useAppSelector(s => s.price);

  const [selectIndex, setSelectIndex] = useState(countryIndex);

  const bottomInsertStyle = useBottomInsertStyle();

  const handleSelect = () => {
    dispatch(setCountryIndex(selectIndex));
    NavigationService.back();
  };

  return (
    <SafeAreaView style={Styles.flex} edges={['bottom']}>
      <FlatList<CountryResponseSchema>
        style={Styles.flex}
        data={countries}
        renderItem={({item, index}) => (
          <CountryCell
            active={index === selectIndex}
            data={item}
            onPress={() => setSelectIndex(index)}
          />
        )}
      />
      <Button
        onPress={handleSelect}
        style={{...bottomInsertStyle, ...styles.button}}
        textColor={Colors.BLACK}
        title={'Подтвердить'}
      />
    </SafeAreaView>
  );
};

export default SelectCountryPage;
