import axios from 'axios';

export class IpApiSdk {
  static async getIpData() {
    const response = await axios.get('http://ip-api.com/json/');
    console.log(response.data);
  }
}
