import {AppThunk} from '~stores';
import {setCountry, setLoading} from '~stores/dashboard/index';
import {IpApiSdk} from '~libs/ip-api-sdk';

export const fetchDashboard = (): AppThunk => async dispatch => {
  dispatch(setLoading(true));
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
      dispatch(setLoading(false));
    });
};
