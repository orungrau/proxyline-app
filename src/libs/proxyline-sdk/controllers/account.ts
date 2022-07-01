import {BaseController} from '~libs/proxyline-sdk/base-controller';

export class AccountController extends BaseController {
  public async resetPasswordCode(
    password: string,
  ): Promise<{success: boolean}> {
    return await this.requester.exec(
      '/projectapi/v1/{project_id}/user/{user_token}/set-password/',
      'POST',
      {
        body: {
          password,
        },
      },
    );
  }
}
