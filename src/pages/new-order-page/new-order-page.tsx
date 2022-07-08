import React, {useEffect, useState} from 'react';
import {Dimensions, Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {useAppSelector} from '~stores';
import useTabBarVisible from '~hooks/useTabBarVisible';
import {SegmentBar} from '~components/segment-bar';
import {Colors, Styles} from '~styles';
import {Button} from '~components/button';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ProxyPromoteCard} from '~components/proxy-promote-card';
import Carousel from 'react-native-snap-carousel';
import {priceFormat} from '~helpers/priceFormat';
import Slider from './components/slider/slider';
import ProxyLineSDK from '~libs/proxyline-sdk';
import {
  reset,
  setCount,
  setPeriodValue,
  setPromoteIndex,
} from '~stores/newOrder';
import {useDispatch} from 'react-redux';
import {useBottomInsertStyle} from './hooks';
import {Promote} from '~stores/price';
import {useWalletNavigation} from '~hooks/useWalletNavigation';
import {NavigationService, Routes} from '~navigations';
import {setGlobalLoading} from '~stores/global/actions';
import {appWakeup} from '~stores/actions';

interface Props {}

const NewOrderPage: React.FC<Props> = ({}) => {
  useTabBarVisible(false);
  useWalletNavigation();
  const bottomInsertStyle = useBottomInsertStyle();
  const dispatch = useDispatch();

  const {count, periodValue, promoteIndex, countryIndex} = useAppSelector(
    s => s.newOrder,
  );

  const {promotes, orderPeriods, countries} = useAppSelector(s => s.price);

  const [onePrice, setOnePrice] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);

  useEffect(() => {
    Promise.all([
      ProxyLineSDK.price.orderAmount({
        ip_type: promotes[promoteIndex].tariff.ip_type,
        ip_version: promotes[promoteIndex].tariff.ip_version,
        quantity: count,
        period: orderPeriods![periodValue],
        country: countries[countryIndex].code,
      }),
      ProxyLineSDK.price.orderAmount({
        ip_type: promotes[promoteIndex].tariff.ip_type,
        ip_version: promotes[promoteIndex].tariff.ip_version,
        quantity: 1,
        period: orderPeriods![periodValue],
        country: countries[countryIndex].code,
      }),
    ]).then(r => {
      setFinalPrice(r[0].amount);
      setOnePrice(r[1].amount);
    });
  }, [periodValue, count, countryIndex, promoteIndex]);

  const handleBuy = () => {
    dispatch(setGlobalLoading(true));
    ProxyLineSDK.orders
      .order({
        ip_type: promotes[promoteIndex].tariff.ip_type,
        ip_version: promotes[promoteIndex].tariff.ip_version,
        quantity: count,
        period: orderPeriods![periodValue],
        country: countries[countryIndex].code,
      })
      .then(r => {
        console.log(r);
      })
      .catch()
      .finally(() => {
        dispatch(reset());
        NavigationService.popToTop();
        dispatch(appWakeup());
        dispatch(setGlobalLoading(false));
      });
  };

  const handleOpenCountrySelect = () => {
    NavigationService.navigate(Routes.App.SelectCountry);
  };

  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <Carousel<Promote>
        data={promotes}
        containerCustomStyle={[Styles.flexGrowNull]}
        renderItem={({item}) => (
          <ProxyPromoteCard
            style={styles.proxyCard}
            topTitle={item.bubble}
            title={item.title}
            desc={item.description}
            image={item.image}
            price={priceFormat(item.amount!)}
            short={true}
          />
        )}
        layout={'default'}
        firstItem={promoteIndex}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={Dimensions.get('window').width - 30 * 2}
        removeClippedSubviews={true}
        onSnapToItem={i => dispatch(setPromoteIndex(i))}
      />
      <TouchableOpacity onPress={handleOpenCountrySelect} style={styles.cell}>
        <Text style={styles.cellTitle}>Страна</Text>
        <Text style={styles.cellValue}>{countries[countryIndex].name_ru}</Text>
        <Image
          style={styles.flagImage}
          source={{
            uri: countries[countryIndex].flag_url,
          }}
        />
        <Image source={require('~assets/icons/action-arrow.png')} />
      </TouchableOpacity>
      <View style={styles.periodWrapper}>
        <Text style={styles.periodActiveText}>{orderPeriods![0]} дней</Text>
        <Text style={styles.periodMaxText}>
          {orderPeriods![orderPeriods!.length - 1]} дней
        </Text>
      </View>
      <Slider
        min={0}
        max={orderPeriods!.length - 1}
        padding={30}
        onChangeValue={i => dispatch(setPeriodValue(i))}
      />
      <View style={styles.cell}>
        <Text style={styles.cellTitle}>Период</Text>
        <Text style={styles.cellValue}>{orderPeriods![periodValue]} дней</Text>
      </View>
      <View style={styles.cell}>
        <Text style={styles.cellTitle}>Тип</Text>
        <SegmentBar
          style={styles.typeSelector}
          defaultIndex={0}
          tabs={['HTTP(S)', 'SOCKS5']}
          onChangeIndex={() => {}}
        />
      </View>
      <View style={styles.cell}>
        <Text style={styles.cellTitle}>Количество</Text>
        <View style={styles.countWrapper}>
          <TouchableOpacity
            style={styles.countBlock}
            onPress={() => {
              if (count >= 2) {
                dispatch(setCount(count - 1));
              }
            }}>
            <Text style={styles.countText}>-</Text>
          </TouchableOpacity>
          <View style={styles.countBlock}>
            <Text style={styles.countText}>{count}</Text>
          </View>
          <TouchableOpacity
            style={styles.countBlock}
            onPress={() => {
              // TODO: Max
              dispatch(setCount(count + 1));
            }}>
            <Text style={styles.countText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.cell}>
        <Text style={styles.cellTitle}>Цена за штуку</Text>
        <Text style={styles.cellValue}>$ {priceFormat(onePrice)}</Text>
      </View>
      <View style={Styles.flex} />
      <View style={styles.cell}>
        <Text style={styles.cellTitle}>Итого к оплате</Text>
        <Text style={styles.finalPriceValue}>$ {priceFormat(finalPrice)}</Text>
      </View>
      <Button
        onPress={handleBuy}
        style={{...bottomInsertStyle, ...styles.button}}
        textColor={Colors.BLACK}
        title={'Купить прокси'}
      />
    </SafeAreaView>
  );
};

export default NewOrderPage;
