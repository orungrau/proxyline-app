import {BaseController} from '~libs/proxyline-sdk/base-controller';

export class AuthController extends BaseController {
  public async authUser(): Promise<any> {
    return await this.requester.exec(
      '/projectapi/v1/{project_id}/auth-user/',
      'POST',
      {},
    );
  }
}
