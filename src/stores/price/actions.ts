import {AppThunk} from '~stores';
import ProxyLineSDK from '~libs/proxyline-sdk';
import {setCountries, setOrderPeriods, setPromote} from '~stores/price/index';
import {updateWakeMatrix} from '~stores/global';

export const fetchPriceData = (): AppThunk => async (dispatch, getState) => {
  const promotes = getState().price.promotes;

  Promise.all([
    ProxyLineSDK.price.orderPeriods(),
    ProxyLineSDK.price.countries(),
    ...promotes.map(promote =>
      ProxyLineSDK.price.orderAmount({
        ...promote.tariff,
        country: 'ru',
        quantity: 1,
        period: 5,
      }),
    ),
  ])
    .then(r => {
      dispatch(setOrderPeriods(r[0]));
      dispatch(setCountries(r[1]));
      r.shift();
      r.shift();
      dispatch(
        setPromote(
          r.map((result, index) => {
            return {
              ...promotes[index],
              // @ts-ignore
              amount: result!.amount!,
            };
          }),
        ),
      );
    })
    .finally(() => dispatch(updateWakeMatrix()));
};
