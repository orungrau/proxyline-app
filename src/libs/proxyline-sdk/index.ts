import {AuthController} from '~libs/proxyline-sdk/controllers/auth';

export default class RgSdkNext {
  public static auth = new AuthController();
  private static instance: RgSdkNext;

  private constructor() {}

  public static shared(): RgSdkNext {
    if (!RgSdkNext.instance) {
      RgSdkNext.instance = new RgSdkNext();
    }
    return RgSdkNext.instance;
  }
}
