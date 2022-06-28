import axios from 'axios';

export class ApiError extends Error {
  public error?: {code: string; field: string[]; params: string[]};
  public errorBody?: any;

  constructor(
    message: string,
    error?: {code: string; field: string[]; params: string[]},
    errorBody?: any,
  ) {
    super(message);
    this.error = error;
    this.errorBody = errorBody;
  }
}

export type UploadProgressCallback = (progress: number) => void;

export class BaseController {
  requester: Requester;

  constructor() {
    this.requester = Requester.shared();
  }
}

export class Requester {
  private endpoint = 'https://proxydbtest.proxyline.net';
  private static instance: Requester;

  private project: {id: string; key: string} | undefined = undefined;
  private token?: string = undefined;

  private constructor() {}

  public setProject(id: string, key: string) {
    this.project = {id, key};
  }

  public setToken(token: string | undefined) {
    this.token = token;
  }

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
      pathParams?: {[key: string]: string};
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
        for (const [key, value] of Object.entries(pathParams)) {
          _path = _path.replace(`{${key}}`, value);
        }
      }
      if (this.project) {
        _path = _path.replace('{project_id}', this.project.id);
      }
      if (this.token) {
        _path = _path.replace('{user_token}', this.token);
      }
      const _headers = {
        ...(payload.headers ? payload.headers : {}),
        ...(this.project ? {apikey: this.project.key} : {}),
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
      // @ts-ignore
      throw new ApiError(`${e};`, e.response?.data?.error, e.response?.data);
    }
  }
}
