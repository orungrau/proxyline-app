import {BaseController} from '~libs/proxyline-sdk/base-controller';
import {AccessTokenSchema} from '~libs/proxyline-sdk/models';

export class AuthController extends BaseController {
  public async resetPasswordCode(email: string): Promise<{success: boolean}> {
    return await this.requester.exec(
      '/projectapi/v1/{project_id}/reset-password-code/',
      'POST',
      {
        body: {
          email,
        },
      },
    );
  }

  public async resetPassword(
    email: string,
    code: string,
  ): Promise<{success: boolean}> {
    return await this.requester.exec(
      '/projectapi/v1/{project_id}/reset-password/',
      'POST',
      {
        body: {
          email,
          code,
        },
      },
    );
  }

  public async verificationCode(email: string): Promise<{success: boolean}> {
    return await this.requester.exec(
      '/projectapi/v1/{project_id}/verification-code/',
      'POST',
      {
        body: {
          email,
        },
      },
    );
  }

  public async signUp(
    email: string,
    email_code: string,
  ): Promise<AccessTokenSchema> {
    return await this.requester.exec(
      '/projectapi/v1/{project_id}/user/',
      'POST',
      {
        body: {
          email,
          email_code,
        },
      },
    );
  }

  public async singIn(
    email: string,
    password: string,
  ): Promise<{success: boolean; user: AccessTokenSchema}> {
    return await this.requester.exec(
      '/projectapi/v1/{project_id}/auth-user/',
      'POST',
      {
        body: {
          email,
          password,
        },
      },
    );
  }
}
