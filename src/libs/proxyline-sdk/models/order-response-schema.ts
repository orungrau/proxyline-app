export interface OrderResponseSchema {
  id: number;
  create_date: Date;
  ip_type: number;
  ip_version: number;
  country_id: string;
  proxy_count: number;
  earliest_date_end: Date;
}
