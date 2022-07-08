import {AuthController} from '~libs/proxyline-sdk/controllers/auth';
import {Requester} from '~libs/proxyline-sdk/base-controller';
import {AccountController} from '~libs/proxyline-sdk/controllers/account';
import {ProxyCheckerController} from '~libs/proxyline-sdk/controllers/proxy-checker';
import {PriceController} from '~libs/proxyline-sdk/controllers/price';
import {OrdersController} from '~libs/proxyline-sdk/controllers/orders';
import {WalletController} from '~libs/proxyline-sdk/controllers/wallet';
import {ProxyController} from '~libs/proxyline-sdk/controllers/proxy';

export default class ProxyLineSDK {
  public static auth = new AuthController();
  public static account = new AccountController();
  public static proxyChecker = new ProxyCheckerController();
  public static price = new PriceController();
  public static orders = new OrdersController();
  public static wallet = new WalletController();
  public static proxy = new ProxyController();

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
