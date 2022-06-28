import {AuthController} from '~libs/proxyline-sdk/controllers/auth';
import {Requester} from '~libs/proxyline-sdk/base-controller';

export default class ProxyLineSDK {
  public static auth = new AuthController();
  private static instance: ProxyLineSDK;

  private constructor() {}

  public static shared(): ProxyLineSDK {
    if (!ProxyLineSDK.instance) {
      ProxyLineSDK.instance = new ProxyLineSDK();
    }
    return ProxyLineSDK.instance;
  }

  static setProject(id: string, key: string) {
    Requester.shared().setProject(id, key);
  }

  static setToken(token: string | undefined) {
    Requester.shared().setToken(token);
  }
}
