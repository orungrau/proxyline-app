export enum ProxyCheckResultAnonLevel {
  transparent = 0,
  anonymous = 1,
  highAnonymity = 2,
}

export const ProxyCheckResultAnonTitle = ['Низкая', 'Высокая', 'Очень высокая'];

export interface ProxyCheckResult {
  ip: string;
  port: number;
  initial: string;
  valid: boolean;
  data: {
    connection_time: number;
    anonymity_level: ProxyCheckResultAnonLevel;
  };
  protocol: string;
}
