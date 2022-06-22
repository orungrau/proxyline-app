export interface ProxyResponseSchema {
  id: number;
  ip: string;
  internalIp?: string;
  countryId: string;
  ipType: number;
  ipVersion: number;
  portHttp: number;
  portSocks5: number;
  username: string;
  password: string;
  orderId: number;
  autoRenewal?: number;
  dateStart: Date;
  dateEnd: Date;
}
