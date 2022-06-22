import {IPVersionEnum} from './ipversion-enum';
import {PeriodEnum} from './period-enum';
import {TypeEnum} from './type-enum';

export interface OrderSchema {
  quantity?: number;
  ipType?: TypeEnum;
  ipVersion?: IPVersionEnum;
  country?: string;
  period: PeriodEnum;
  selectedIps?: Array<number>;
  tags?: Array<number>;
  uniqueCredentials?: boolean;
  coupon?: string;
}
