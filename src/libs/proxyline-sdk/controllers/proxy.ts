import {BaseController} from '~libs/proxyline-sdk/base-controller';
import {ProxyResponseSchema} from '~libs/proxyline-sdk/models';

export class ProxyController extends BaseController {
  public async proxies(): Promise<ProxyResponseSchema[]> {
    return await this.requester.exec(
      '/projectapi/v1/{project_id}/user/{user_token}/proxies/',
      'GET',
      {},
    );
  }
}
