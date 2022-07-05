import axios from 'axios';

export class IpApiSdk {
  static async getIpData(): Promise<any> {
    const response = await axios.get('http://ip-api.com/json/');
    return response.data;
  }
}
