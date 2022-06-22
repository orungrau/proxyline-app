import {PaymentSystemMethodSchema} from './payment-system-method-schema';

export interface PaymentSystemSchema {
  name: string;
  descriptionEn: string;
  descriptionRu: string;
  logoPath?: string;
  methods: Array<PaymentSystemMethodSchema>;
}
