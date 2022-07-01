import axios from 'axios';
import {BaseController} from '~libs/proxyline-sdk/base-controller';
import {ProxyCheckResult} from '~libs/proxyline-sdk/models/proxy-check-result';

export class ProxyCheckerController extends BaseController {
  public async check(proxy_list: string): Promise<ProxyCheckResult[]> {
    const bodyFormData = new FormData();
    bodyFormData.append('proxy_list', proxy_list);

    const response = await axios.post(
      'https://proxy-checker.net/api/proxy-checker/',
      bodyFormData,
    );
    return response.data;
  }
}
