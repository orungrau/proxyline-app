import {BaseController} from '~libs/proxyline-sdk/base-controller';
import {OrderResponseSchema} from '~libs/proxyline-sdk/models';

export class OrdersController extends BaseController {
  public async order(data: {
    quantity: number;
    ip_type: number;
    ip_version: number;
    country: string;
    period: number;
    coupon?: string;
  }): Promise<any> {
    return await this.requester.exec(
      '/projectapi/v1/{project_id}/user/{user_token}/order/',
      'POST',
      {
        body: data,
      },
    );
  }

  public async listOrder(): Promise<OrderResponseSchema[]> {
    return await this.requester.exec(
      '/projectapi/v1/{project_id}/user/{user_token}/orders/',
      'GET',
      {},
    );
  }
}
