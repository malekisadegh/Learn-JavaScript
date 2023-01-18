import { postApi, getApi } from '../../core/http/call-api';
import { LoginData } from '../faker/login';
import * as dotenv from 'dotenv';
const login = (data: any) => {
  //  return postApi('/user/login', data, false);
  return new Promise((resolve, reject) => {
    resolve(LoginData);
  });
};

const loginToAgp = () => {
  const _data = {
    clientId: process.env['AGP_CLIENT_ID'],
    username: process.env['AGP_USER_NAME'],
    password: process.env['AGP_PASSWORD'],
  };

  const authUrl = process.env['AGP_AUTH_SERVICE_URL'];
  return postApi(authUrl, _data, 'agp');
};

const AuthApiService = { login, loginToAgp };

export default AuthApiService;
