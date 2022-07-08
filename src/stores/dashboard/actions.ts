import {AppThunk} from '~stores';
import {setCountry} from '~stores/dashboard/index';
import {IpApiSdk} from '~libs/ip-api-sdk';
import {updateWakeMatrix} from '~stores/global';

export const fetchDashboard = (): AppThunk => async dispatch => {
  // dispatch(setLoading(true));
  IpApiSdk.getIpData()
    .then(r => {
      dispatch(
        setCountry({
          country: r.country,
          countryTag: r.countryCode,
          ip: r.query,
        }),
      );
    })
    .catch()
    .finally(() => {
      dispatch(updateWakeMatrix());
    });
};
