import {BaseController} from '~libs/proxyline-sdk/base-controller';
import {CountryResponseSchema} from '~libs/proxyline-sdk/models';

export class PriceController extends BaseController {
  public async countries(): Promise<CountryResponseSchema[]> {
    return await this.requester.exec(
      '/projectapi/v1/{project_id}/countries/',
      'GET',
      {},
    );
  }

  public async countryAvailability(): Promise<{
    [key: string]: {
      '1:4': boolean;
      '1:6': boolean;
      '2:4': boolean;
      '2:6': boolean;
    };
  }> {
    return await this.requester.exec(
      '/projectapi/v1/{project_id}/country-availability/',
      'GET',
      {},
    );
  }

  public async orderLimits(): Promise<{
    default_limit: number;
    limits: [
      {
        limit: number;
        params: {
          country_id: string;
          ip_type: number;
          ip_version: number;
        };
      },
    ];
  }> {
    return await this.requester.exec(
      '/projectapi/v1/{project_id}/order-limits/',
      'GET',
      {},
    );
  }

  public async orderPeriods(): Promise<number[]> {
    return await this.requester.exec(
      '/projectapi/v1/{project_id}/order-periods/',
      'GET',
      {},
    );
  }

  public async proxyPrices(): Promise<{
    rub: number;
    prices: {
      [key: string]: any[];
    };
  }> {
    return await this.requester.exec(
      '/projectapi/v1/{project_id}/proxy-prices/',
      'GET',
      {},
    );
  }

  public async orderAmount(data: {
    quantity: number;
    ip_type: number;
    ip_version: number;
    country: string;
    period: number;
    coupon?: string;
  }): Promise<{amount: number}> {
    return await this.requester.exec(
      '/projectapi/v1/{project_id}/order-amount/',
      'POST',
      {
        body: data,
      },
    );
  }
}
