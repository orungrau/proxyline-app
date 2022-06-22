import axios from 'axios';

class ApiError extends Error {}

export type UploadProgressCallback = (progress: number) => void;

export class BaseController {
  requester: Requester;

  constructor() {
    this.requester = Requester.shared();
  }
}

interface PathParam {
  key: string;
  param: string;
}

export class Requester {
  private endpoint = '';
  private static instance: Requester;

  private constructor() {}

  public static shared(): Requester {
    if (!Requester.instance) {
      Requester.instance = new Requester();
    }

    return Requester.instance;
  }

  public async exec(
    path: string,
    action: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' = 'POST',
    payload: {
      pathParams?: PathParam[];
      args?: {[key: string]: any};
      body?: {[key: string]: any} | FormData;
      headers?: {[key: string]: string};
    },
    cbProgress?: UploadProgressCallback,
  ): Promise<any> {
    try {
      const {pathParams, args, body} = payload;
      let _path = path;
      if (pathParams) {
        pathParams.map(value => {
          _path = _path.replace(`{${value.key}}`, value.param);
        });
      }
      const _headers = {
        ...(payload.headers ? payload.headers : {}),
      };
      const response = await axios.request({
        url: this.endpoint + _path,
        withCredentials: false,
        method: action,
        params: args,
        data: body,
        headers: _headers,
        responseType: 'json',
        onUploadProgress: progressEvent => {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total,
          );
          if (cbProgress) {
            cbProgress(percentCompleted / 100);
          }
        },
      });
      return response.data;
    } catch (e) {
      throw new ApiError(`${e};`);
    }
  }
}
