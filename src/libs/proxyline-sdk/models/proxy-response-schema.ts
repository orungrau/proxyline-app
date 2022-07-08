export interface ProxyResponseSchema {
  id: number;
  ip: string;
  internal_ip?: string;
  country_id: string;
  ip_type: number;
  ip_version: number;
  port_http: number;
  port_socks5: number;
  username: string;
  password: string;
  order_id: number;
  auto_renewal?: number;
  date_start: Date;
  date_end: Date;
}
