export interface OrderResponseSchema {
  id: number;
  createDate: Date;
  ipType: number;
  ipVersion: number;
  countryId: string;
  proxyCount: number;
  earliestDateEnd: Date;
}
