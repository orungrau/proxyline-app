import {IPVersionEnum} from './ipversion-enum';
import {PeriodEnum} from './period-enum';
import {TypeEnum} from './type-enum';

export interface OrderAmountSchema {
  quantity: number;
  ipType: TypeEnum;
  ipVersion: IPVersionEnum;
  country: string;
  period: PeriodEnum;
  coupon?: string;
}
