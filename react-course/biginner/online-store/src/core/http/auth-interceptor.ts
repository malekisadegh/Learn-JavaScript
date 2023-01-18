import { AxiosRequestConfig } from 'axios';

export const AuthInterceptor = (
  config: AxiosRequestConfig,
  accessToken: string
) => {
  // config.headers = headers;
  if (accessToken) {
    config.headers['Authorization'] = 'Bearer ' + accessToken;
  }
  config.headers['Content-Type'] = 'application/json; charset=utf-8';
  config.headers['Access-Control-Allow-Origin'] = '*';

  //config.headers['text'] = process.env['API_HEADER_VALUE'];
  return config;
};
