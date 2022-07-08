import {BaseController} from '~libs/proxyline-sdk/base-controller';
import {OrderResponseSchema} from '~libs/proxyline-sdk/models';

export class WalletController extends BaseController {
  public async payment(data: {
    amount: number;
    payment_method: number;
  }): Promise<{
    redirect_url: string;
    payment_id: number;
  }> {
    return await this.requester.exec(
      '/projectapi/v1/{project_id}/user/{user_token}/payment/',
      'POST',
      {
        body: data,
      },
    );
  }

  public async completePayment(
    paymentId: number,
  ): Promise<OrderResponseSchema[]> {
    return await this.requester.exec(
      '/projectapi/v1/{project_id}/user/{user_token}/payment/{payment_id}/',
      'POST',
      {
        pathParams: {
          payment_id: String(paymentId),
        },
      },
    );
  }
}
